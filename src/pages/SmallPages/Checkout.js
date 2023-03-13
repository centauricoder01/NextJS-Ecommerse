import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subtotal }) => {
  return (
    <div>
      <Heading fontSize={"2rem"} textAlign="center">
        Checkout Details
      </Heading>
      <Box
        m="auto"
        p={"1rem"}
        mb="5"
        width={{ sm: "95%", md: "90%", lg: "80%" }}
      >
        <Flex
          gap={"3rem"}
          justifyContent="center"
          alignItems={"center"}
          mb="3"
          width="100%"
          display={{ sm: "block", md: "flex" }}
        >
          <Box width={{ sm: "100%", md: "50%", lg: "50%" }} mb="3">
            <FormLabel fontWeight={"normal"}>First name</FormLabel>
            <Input id="first-name" />
          </Box>
          <Box width={{ sm: "100%", md: "50%", lg: "50%" }}>
            <FormLabel fontWeight={"normal"}>Last name</FormLabel>
            <Input id="first-name" />
          </Box>
        </Flex>
        <FormLabel fontWeight={"normal"}>Enter Your Address</FormLabel>
        <Textarea
          rows={3}
          shadow="sm"
          mb={3}
          focusBorderColor="brand.400"
          fontSize={{
            sm: "sm",
          }}
        />
        <Flex
          gap={"3rem"}
          justifyContent="center"
          alignItems={"center"}
          mb="3"
          width="100%"
          display={{ sm: "block", md: "flex" }}
        >
          <Box width={{ sm: "100%", md: "50%", lg: "50%" }} mb="3">
            <FormLabel fontWeight={"normal"}>State</FormLabel>
            <Input id="first-name" />
          </Box>
          <Box width={{ sm: "100%", md: "50%", lg: "50%" }}>
            <FormLabel fontWeight={"normal"}>Pincode</FormLabel>
            <Input id="first-name" />
          </Box>
        </Flex>
        <Flex
          gap={"3rem"}
          justifyContent="center"
          alignItems={"center"}
          mb="3"
          width="100%"
          display={{ sm: "block", md: "flex" }}
        >
          <Box width={{ sm: "100%", md: "50%", lg: "50%" }} mb="3">
            <FormLabel fontWeight={"normal"}>Phone</FormLabel>
            <Input id="first-name" />
          </Box>
          <Box width={{ sm: "100%", md: "50%", lg: "50%" }}>
            <FormLabel fontWeight={"normal"}>Email</FormLabel>
            <Input id="first-name" />
          </Box>
        </Flex>
      </Box>
      <Heading fontSize={"2rem"} textAlign="center">
        Preview Cart
      </Heading>
      <Box width={"80%"} margin="auto" textAlign={"center"} border="1px solid">
        {Object.keys(cart).length === 0 && (
          <Text fontWeight={"bold"}>No Item in the Cart</Text>
        )}
        <ol style={{ textAlign: "center" }}>
          {Object.keys(cart).map((k) => (
            <li style={{ textAlign: "center" }} key={Math.random()}>
              <Flex
                gap={"1rem"}
                justifyContent="left"
                alignItems={"center"}
                key={k}
                mb="1rem"
              >
                <Text fontSize={"1rem"} fontWeight="normal">
                  {cart[k].name}
                </Text>
                <Button
                  fontSize={"1rem"}
                  height="2rem"
                  onClick={() => {
                    removeFromCart("twosonething", 1);
                  }}
                >
                  -
                </Button>
                <Text>{cart[k].qty}</Text>
                <Button
                  fontSize={"1rem"}
                  height="2rem"
                  onClick={() => {
                    addToCart(
                      "twosonething",
                      1,
                      1000,
                      "Rajendra",
                      "XL",
                      "Blue"
                    );
                  }}
                >
                  +
                </Button>
              </Flex>
            </li>
          ))}
        </ol>
      </Box>
      <Box
        display={"flex"}
        justifyContent="left"
        width={"80%"}
        margin="auto"
        marginTop={"2rem"}
        mb="4rem"
      >
        <Button>Pay ₹{subtotal}</Button>
      </Box>
    </div>
  );
};

export default Checkout;
