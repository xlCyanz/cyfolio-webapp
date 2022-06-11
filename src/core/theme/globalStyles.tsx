/** @jsxImportSource theme-ui */
import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Poppins Regular";
        src: url("/fonts/Poppins-Regular.ttf");
        font-weight: 400;
        font-style: normal;
      }

      @font-face {
        font-family: "Clicker Script Regular";
        src: url("/fonts/ClickerScript-Regular.ttf");
        font-weight: 400;
        font-style: normal;
      }

      @font-face {
        font-family: "Poppins Bold";
        src: url("/fonts/Poppins-Bold.ttf");
        font-weight: 700;
        font-style: normal;
      }

      @font-face {
        font-family: "Poppins Black";
        src: url("/fonts/Poppins-Black.ttf");
        font-weight: 900;
        font-style: normal;
      }

      html,
      body {
        margin: 0;
        padding: 0;
        background-color: var(--theme-ui-colors-background);
      }

      .poppins {
        font-family: "Poppins Regular";
      }

      /* Start Logo addons */
      .logo-addons::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-bottom: 5px solid var(--theme-ui-colors-primary);
        border-left: 5px solid var(--theme-ui-colors-primary);
        left: 0;
        bottom: 0;
      }

      .logo-addons::after {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-top: 5px solid var(--theme-ui-colors-primary);
        border-right: 5px solid var(--theme-ui-colors-primary);
        top: 0;
        right: 0;
      }
      /* End Logo addons */

      /* Start Home-Image addons */
      .home-image {
        position: relative;
      }

      .home-image::before {
        content: "";
        position: absolute;
        width: 80px;
        height: 80px;
        border-top: 10px solid var(--theme-ui-colors-primary);
        border-left: 10px solid var(--theme-ui-colors-primary);
        z-index: 1;
        top: 0 !important;
        left: 0 !important;
      }

      .home-image::after {
        content: "";
        position: absolute;
        width: 80px;
        height: 80px;
        border-right: 10px solid var(--theme-ui-colors-primary);
        border-bottom: 10px solid var(--theme-ui-colors-primary);
        bottom: 0 !important;
        right: 0 !important;
      }
      /* End Home-Image addons */

      /* Start Timeline After and Before */

      .timeline::after {
        content: "";
        position: absolute;
        width: 2px;
        background-color: var(--theme-ui-colors-primary);
        top: 20px;
        left: 20px;
        bottom: 20px;
      }

      .timeline-item::before {
        content: "";
        position: absolute;
        left: 11.4px;
        margin-top: 1px;
        width: 20px;
        border-radius: 50%;
        height: 20px;
        background-color: var(--theme-ui-colors-primary);
        z-index: 1;
      }

      /* End Timeline After and Before */

      /* Start Custom Scrollbar */

      /* width */
      ::-webkit-scrollbar {
        width: 12px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: var(--theme-ui-colors-muted);
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: var(--theme-ui-colors-primary);
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: var(--theme-ui-colors-primaryHover);
      }

      /* End Custom Scrollbar */
    `}
  />
);

export default GlobalStyles;
