import Document, {
  DocumentContext,
  Html,
  Main,
  NextScript,
  Head,
} from "next/document";
import { InitializeColorMode } from "theme-ui";

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            type="image/png"
            sizes="16x16"
            rel="icon"
            href="./favicon16.png"
          />
          <link
            type="image/png"
            sizes="32x32"
            rel="icon"
            href="./favicon32.png"
          />
          <link
            type="image/png"
            sizes="96x96"
            rel="icon"
            href="./favicon96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="72x72"
            href="./favicon72.png "
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href=".../icons8-portfolio-96.png"
          />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
