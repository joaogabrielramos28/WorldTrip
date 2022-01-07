import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import "../../node_modules/swiper/swiper-bundle.css";
import "../../node_modules/swiper/modules/navigation/navigation.min.css"; // Navigation module
import "../../node_modules/swiper/modules/pagination/pagination.min.css";
import "../styles/slider.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
