import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function ForgetPassword() {
  return (
    <Flex
      backgroundColor={"#ebf8ff"}
      justifyContent={"center"}
      alignContent="center"
      gap={"10rem"}
      pt={"4rem"}
      pb="4rem"
    >
      <Box
        backgroundColor={"white"}
        width={{ sm: "70%", md: "50%", lg: "30%" }}
        borderRadius={"1rem"}
        padding="10px"
        display={"flex"}
        flexDir="column"
        justifyContent={"center"}
        alignContent="center"
        boxShadow={"2xl"}
      >
        <Heading textAlign={"center"}>Forget Password</Heading>
        <Flex
          border={"1px solid"}
          justifyContent="center"
          borderRadius={"10rem"}
          width="25%"
          margin={"auto"}
          mt="1rem"
          mb="1rem"
          alignItems={"center"}
          boxShadow=""
        >
          <Image
            src="/profile.png"
            alt={`profile Img`}
            width={110}
            height={90}
            style={{ padding: "9px" }}
          />
        </Flex>
        <FormLabel fontWeight={"normal"}>Enter Email</FormLabel>
        <Input id="first-name" backgroundColor="blue.200" />
        <Button
          width={"100%"}
          borderRadius="11rem"
          backgroundColor={"blue.400"}
          color="white"
          mt={"2rem"}
          _hover={{
            bg: "blue.500",
          }}
        >
          Submit
        </Button>
      </Box>
    </Flex>
  );
}
