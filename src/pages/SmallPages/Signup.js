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

export default function Signup() {
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
        <Heading textAlign={"center"}>SIGNUP</Heading>
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
        <FormLabel fontWeight={"normal"}>Name</FormLabel>
        <Input id="first-name" backgroundColor="blue.200" mb={"2"} />
        <FormLabel fontWeight={"normal"}>Mobile no</FormLabel>
        <Input id="first-name" backgroundColor="blue.200" mb={"2"} />
        <FormLabel fontWeight={"normal"}>Email</FormLabel>
        <Input id="first-name" backgroundColor="blue.200" mb={"2"} />
        <FormLabel fontWeight={"normal"}>Password</FormLabel>
        <Input id="first-name" backgroundColor="blue.200" mb={"2"} />
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

        <Text textAlign={"center"} mt="10px">
          Already have account{" "}
          <Link href={"/SmallPages/Login"}>
            <span style={{ color: "blue", cursor: "pointer" }}>Login !</span>
          </Link>
        </Text>
      </Box>
    </Flex>
  );
}
