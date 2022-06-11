import { Locales } from "@core";
import {
  FC,
  useMemo,
  useState,
  ReactNode,
  useContext,
  useCallback,
  createContext,
} from "react";

interface IProviderProps {
  children: ReactNode;
}

type Locale = "en" | "es";
type LocaleEN = typeof Locales.LocaleEN;
type LocaleES = typeof Locales.LocaleES;

interface II18nContextProps {
  lang: string;
  locale: LocaleEN | LocaleES | null;
  changeLang: (newLang: Locale) => void;
}

// Create a new context
const I18nContext = createContext<II18nContextProps>({
  lang: "es",
  locale: null,
  changeLang: () => {},
});

// Create a custom hook to consume the context.
const useI8nContext = () => useContext(I18nContext);

const locales = {
  en: Locales.LocaleEN,
  es: Locales.LocaleES,
};

const Provider: FC<IProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<Locale>("en");

  // Use useCallback to prevent the function from being calculated on each render.
  const changeLang = useCallback((newLang: Locale) => {
    setLang(newLang);
  }, []);

  // Use useMemo to memorize the values and not change values unnecessarily.
  const value = useMemo(
    () => ({ lang, locale: locales[lang], changeLang }),
    [changeLang, lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export { Provider, useI8nContext };
