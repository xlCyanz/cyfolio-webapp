import React from "react";

import { Locales } from "@core";

interface IProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

type Locale = "en" | "es";
type LocaleEN = typeof Locales.LocaleEN;
type LocaleES = typeof Locales.LocaleES;

interface II18nContextProps {
  lang: "en" | "es";
  locale: LocaleEN | LocaleES | null;
  changeLang: (newLang: Locale) => void;
}

const I18nContext = React.createContext<II18nContextProps>({
  lang: "es",
  locale: null,
  changeLang: () => {},
});

const useI8nContext = () => React.useContext(I18nContext);

const locales = {
  en: Locales.LocaleEN,
  es: Locales.LocaleES,
};

const Provider = ({ children }: IProviderProps) => {
  const [lang, setLang] = React.useState<Locale>("en");

  const changeLang = React.useCallback((newLang: Locale) => {
    setLang(newLang);
  }, []);

  const value = React.useMemo(
    () => ({ lang, locale: locales[lang], changeLang }),
    [changeLang, lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export { Provider, useI8nContext };
