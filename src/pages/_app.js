import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
