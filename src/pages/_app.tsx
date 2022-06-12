import { ReactNode } from "react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { AnimatePresence } from "framer-motion";
import { GlobalStyles, theme } from "@core";
import { ApolloClientContext, I18nContext, SkeletonContext } from "@contexts";

const GlobalProviders = ({ children }: { children: ReactNode }) => (
  <ApolloClientContext>
    <ThemeProvider theme={theme}>
      <I18nContext.Provider>
        <SkeletonContext>
          <AnimatePresence
            initial={false}
            exitBeforeEnter
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            {children}
          </AnimatePresence>
        </SkeletonContext>
        <GlobalStyles />
      </I18nContext.Provider>
    </ThemeProvider>
  </ApolloClientContext>
);

const Application = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo title="CyFolio" description="Portfolio website for Cyanz" />

      <GlobalProviders>
        <Component {...pageProps} />
      </GlobalProviders>
    </>
  );
};

export default Application;
