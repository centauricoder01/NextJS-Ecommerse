import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Login() {
  return (
    <Flex
      backgroundColor={"blue.200"}
      p="5rem"
      justifyContent={"center"}
      alignContent="center"
      gap={"10rem"}
      boxShadow="dark-lg"
    >
      <Image src="/login.png" alt={`Login Img`} width={500} height={100} />
      <Box
        backgroundColor={"white"}
        width="30%"
        borderRadius={"1rem"}
        padding="10px"
        display={"flex"}
        flexDir="column"
        justifyContent={"center"}
        alignContent="center"
      >
        <Heading textAlign={"center"}>Login</Heading>
        <Flex
          border={"1px solid"}
          justifyContent="center"
          m="1rem"
          borderRadius={"10rem"}
          width="10%"
          margin={"auto"}
          mt="1rem"
          mb="1rem"
        >
          <Image
            src="/profile.png"
            alt={`profile Img`}
            width={200}
            height={100}
          />
        </Flex>
        <FormLabel fontWeight={"normal"}>First name</FormLabel>
        <Input id="first-name" backgroundColor="blue.200" />
        <FormLabel fontWeight={"normal"}>First name</FormLabel>
        <Input id="first-name" backgroundColor="blue.200" />
        <Button
          width={"100%"}
          borderRadius="1rem"
          backgroundColor={"blue.400"}
          color="white"
          mt={"1rem"}
        >
          Submit
        </Button>
        <Text textAlign={"center"} mt="10px">
          Forget Password?{" "}
          <span style={{ color: "blue" }}>Get it on Email !</span>
        </Text>
      </Box>
    </Flex>
  );
}
