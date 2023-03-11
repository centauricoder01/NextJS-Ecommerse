import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subtotal, setSubtotal] = useState(0);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let total = 0;
    for (let i = 0; i < Object.keys(myCart).length; i++) {
      total +=
        myCart[Object.keys(myCart)[i]]["price"] *
        myCart[Object.keys(myCart)[i]].qty;
    }
    setSubtotal(total);
  };

  const addToCart = (id, qty, price, name, size, varient) => {
    let newCart = cart;
    if (id in cart) {
      newCart[id].qty = cart[id].qty + qty;
    } else {
      newCart[id] = { id, qty: 1, price, name, size, varient };
    }

    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (id, qty) => {
    let newCart = cart;

    if (id in cart) {
      newCart[id].qty = cart[id].qty - qty;
    }
    if (newCart[id]["qty"] <= 0) {
      delete newCart[id];
    }

    setCart(newCart);
    saveCart(newCart);
  };

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  return (
    <ChakraProvider>
      <Navbar
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subtotal={subtotal}
      />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subtotal={subtotal}
        {...pageProps}
      />
      <Footer />
    </ChakraProvider>
  );
}
