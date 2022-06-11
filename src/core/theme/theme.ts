import type { Theme } from "theme-ui";

const theme: Theme = {
  config: {
    initialColorModeName: "light",
  },
  colors: {
    text: "#1d1c36",
    muted: "#E0E0E0",
    silver: "red",
    background: "#F1F1FB",
    modes: {
      dark: {
        text: "#F6F6F6",
        muted: "#474347",
        background: "#151415",
      },
    },
    // Colors without dark mode.
    primary: "#F0932B",
    darkGray: "#232123",
    primaryHover: "#D17E02",
  },
  borderWidths: {
    "0": "0",
    "2": "2px",
    "4": "4px",
    "8": "8px",
    px: "1px",
  },
  breakpoints: [48, 62, 75, 87.5, 160].map((n) => `${n}em`),
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "'Poppins Regular', sans-serif",
    clicker: "'Clicker Script Regular', sans-serif",
    heading: "'Poppins Bold', sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  forms: {
    input: {
      borderRadius: "4px",
      light: {
        fontSize: "inherit",
        fontFamily: "inherit",
        border: "2px solid silver",
        bg: "white",
        ":focus": {
          outline: "none",
          border: "2px solid var(--theme-ui-colors-primary)",
        },
        "::placeholder": {
          color: "gray",
        },
      },
      dark: {
        fontSize: "inherit",
        fontFamily: "inherit",
        border: "2px solid var(--theme-ui-colors-darkGray)",
        bg: "darkGray",
        color: "white",
        ":focus": {
          outline: "none",
          border: "2px solid var(--theme-ui-colors-primary)",
        },
        "::placeholder": {
          color: "gray",
        },
      },
    },
    textarea: {
      borderRadius: "4px",
      light: {
        border: "2px solid silver",
        fontSize: "inherit",
        fontFamily: "inherit",
        bg: "white",
        ":focus": {
          outline: "none",
          border: "2px solid var(--theme-ui-colors-primary)",
        },
        "::placeholder": {
          color: "gray",
        },
      },
      dark: {
        fontSize: "inherit",
        fontFamily: "inherit",
        bg: "darkGray",
        border: "2px solid var(--theme-ui-colors-darkGray)",
        ":focus": {
          outline: "none",
          border: "2px solid var(--theme-ui-colors-primary)",
        },
        "::placeholder": {
          color: "gray",
        },
      },
    },
  },
  buttons: {
    primary: {
      color: "white",
      fontFamily: "body",
      bg: "primary",
      "&:hover": {
        cursor: "pointer",
        bg: "primaryHover",
      },
    },
  },
  links: {
    navActive: {
      color: "primary",
      fontFamily: "body",
      fontWeight: "bold",
      textDecoration: "none",
      cursor: "pointer",
      borderBottom: `2px solid var(--theme-ui-colors-primary)`,
    },
    nav: {
      color: "text",
      fontFamily: "body",
      fontWeight: "bold",
      textDecoration: "none",
      cursor: "pointer",
      borderBottom: "2px solid var(--theme-ui-colors-muted)",
      "&:hover": {
        color: "primary",
        borderBottom: "2px solid var(--theme-ui-colors-primary)",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
};

export default theme;
