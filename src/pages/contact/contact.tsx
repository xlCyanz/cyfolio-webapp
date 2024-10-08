import Link from "next/link";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { NextPage } from "next";
import { JsxUtil } from "@utils";
import { MainLayout } from "@templates";
import { I18nContext } from "@contexts";
import { useGetConfigGeneral } from "@hooks";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Heading,
  Textarea,
  useThemeUI,
  Link as LinkA,
} from "theme-ui";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  throw new Error("Please add your EmailJS to enviroment variables.");
}

const Contact: NextPage = () => {
  const { locale, lang } = I18nContext.useI8nContext();
  const { colorMode } = useThemeUI();

  const { configGeneral } = useGetConfigGeneral({
    locale: lang,
  });

  const handleSendEmail = async (e: any) => {
    e?.preventDefault();

    const fromName = e?.target?.from_name.value;
    const fromEmail = e?.target?.from_email.value;
    const subject = e?.target?.subject.value;
    const message = e?.target?.message.value;

    if (!fromName || !fromEmail || !message || !subject) {
      Swal.fire({
        title: locale?.messages.contactpage.alerts.emptyTitle,
        text: locale?.messages.contactpage.alerts.empty,
        icon: "warning",
      });
      return;
    }

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e?.currentTarget,
        EMAILJS_PUBLIC_KEY,
      )
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            title: locale?.messages.contactpage.alerts.succesTitle,
            text: locale?.messages.contactpage.alerts.success,
            icon: "success",
          });

          e?.target.reset();
        }
      })
      .catch(() => {
        Swal.fire({
          title: locale?.messages.contactpage.alerts.errorTitle,
          text: locale?.messages.contactpage.alerts.error,
          icon: "error",
        });
      });
  };

  return (
    <MainLayout title={locale?.messages.contactpage.title}>
      <Box>
        <Box mb={4}>
          <Heading as="h1">{`${locale?.messages.contactpage.title}`}</Heading>
          <Box
            bg="primary"
            sx={{
              height: "5px",
              width: "50px",
              marginTop: 2,
              marginBottom: 1,
            }}
          />
          <Box bg="primary" sx={{ height: "5px", width: "20px" }} />
        </Box>
        <Box>
          <Heading as="h2" mb={2}>
            {locale?.messages.contactpage.subtitle}
          </Heading>
          <Text>
            {JsxUtil.replaceString(
              locale?.messages.contactpage.description || "",
              {
                email: (
                  <Link
                    key="email-contact"
                    href={`mailto:${configGeneral?.email}`}
                    passHref
                  >
                    <LinkA sx={{ textDecoration: "none" }}>email</LinkA>
                  </Link>
                ),
              },
            )}
          </Text>
          <Box as="form" onSubmit={handleSendEmail} sx={{ mt: 3 }}>
            <Flex sx={{ flexDirection: ["column", "row"], gap: 3 }} mb={3}>
              <Box sx={{ width: "100%" }}>
                <Input
                  type="text"
                  variant={colorMode === "dark" ? "input.dark" : "input.light"}
                  name="from_name"
                  placeholder={
                    locale?.messages.contactpage.form.inputName || "Name"
                  }
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <Input
                  type="email"
                  variant={colorMode === "dark" ? "input.dark" : "input.light"}
                  name="from_email"
                  placeholder={
                    locale?.messages.contactpage.form.inputEmail || "Email"
                  }
                />
              </Box>
            </Flex>
            <Input
              type="text"
              variant={colorMode === "dark" ? "input.dark" : "input.light"}
              name="subject"
              placeholder={
                locale?.messages.contactpage.form.inputSubject || "Subject"
              }
              autoComplete="off"
              mb={3}
            />
            <Textarea
              name="message"
              variant={
                colorMode === "dark" ? "textarea.dark" : "textarea.light"
              }
              placeholder={
                locale?.messages.contactpage.form.inputMessage || "Message"
              }
              rows={6}
              mb={3}
            />
            <Button type="submit" aria-label="submit-contact">
              {locale?.messages.contactpage.button || "Submit"}
            </Button>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Contact;
