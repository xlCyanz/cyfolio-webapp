import Swal from "sweetalert2";
import { Icon } from "@atoms";
import { I18nContext } from "@contexts";
import { Button, Flex, useThemeUI } from "theme-ui";

const ButtonLang = () => {
  const { theme } = useThemeUI();
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
      confirmButtonColor: `${theme.colors?.primary}`,
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
      aria-label="change-language"
    >
      <Flex>
        <Icon name="translate" height={26} width={26} />
      </Flex>
    </Button>
  );
};

export default ButtonLang;
