import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../../Redux/store";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </ChakraProvider>
  );
}
