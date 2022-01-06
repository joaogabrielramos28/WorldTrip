import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    gray: {
      50: "#F5F8FA",
      100: "#DADADA",
      300: "#999999",
      700: "#47585B",
    },
    yellow: {
      700: "#FFBA08",
    },
  },
  fonts: {
    body: "Poppins, sans-serif",
  },
});

export default theme;
