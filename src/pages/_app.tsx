import { ReactNode } from "react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { SkeletonTheme } from "react-loading-skeleton";
import { AnimatePresence } from "framer-motion";
import { GlobalStyles, theme } from "@core";
import { ApolloClientContext, I18nContext } from "@contexts";

import "react-loading-skeleton/dist/skeleton.css";

const GlobalProviders = ({ children }: { children: ReactNode }) => (
  <ApolloClientContext>
    <ThemeProvider theme={theme}>
      <I18nContext.Provider>
        <AnimatePresence
          initial={false}
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <SkeletonTheme baseColor="#dfe4ea" highlightColor="#ced6e0">
            {children}
          </SkeletonTheme>
        </AnimatePresence>
      </I18nContext.Provider>

      <GlobalStyles />
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
