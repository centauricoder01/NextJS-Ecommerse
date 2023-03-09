import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const Checkout = () => {
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
        Here You will have your cart
      </Box>
      <Box
        display={"flex"}
        justifyContent="left"
        width={"80%"}
        margin="auto"
        marginTop={"2rem"}
        mb="4rem"
      >
        <Button>Pay ₹3400</Button>
      </Box>
    </div>
  );
};

export default Checkout;
