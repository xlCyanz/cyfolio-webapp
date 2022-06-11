import Swal from "sweetalert2";
import { Icon } from "@atoms";
import { Button, Flex } from "theme-ui";
import { I18nContext } from "@contexts";

const ButtonLang = () => {
  const { locale, changeLang } = I18nContext.useI8nContext();

  const handleChangeLang = async () => {
    const customSwal = Swal.mixin({
      customClass: {
        confirmButton: "poppins",
        cancelButton: "poppins",
        input: "",
      },
    });

    const { value: language } = await customSwal.fire({
      title: locale?.messages.alertChangingLanguage.title,
      text: locale?.messages.alertChangingLanguage.message,
      input: "select",
      icon: "question",
      inputOptions: {
        en: "English (Ingles)",
        es: "Español (Spanish)",
      },
      confirmButtonText: locale?.messages.alertChangingLanguage.buttonAccept,
      cancelButtonText: locale?.messages.alertChangingLanguage.buttonCancel,
      confirmButtonColor: "var(--theme-ui-colors-primary)",
      cancelButtonColor: "#d33",
      showCancelButton: true,
      inputPlaceholder: locale?.messages.alertChangingLanguage.inputPlaceholder,
    });

    if (language) changeLang(language);
  };

  return (
    <Button
      onClick={handleChangeLang}
      p={2}
      sx={{
        bg: "primary",
        color: "white",
        textAlign: "center",
        borderRadius: "50%",
      }}
    >
      <Flex>
        <Icon name="translate" height={26} width={26} />
      </Flex>
    </Button>
  );
};

export default ButtonLang;
