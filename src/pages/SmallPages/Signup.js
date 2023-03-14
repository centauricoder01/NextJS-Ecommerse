import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();

  const [signupdata, setSignupData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const toast = useToast();

  const HandleChange = (e) => {
    setSignupData({ ...signupdata, [e.target.name]: e.target.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (
      signupdata.name === "" ||
      signupdata.mobile === "" ||
      signupdata.email === "" ||
      signupdata.password === ""
    ) {
      toast({
        title: `Please Enter All Fields`,
        position: "top",
        status: "error",
        duration: 3000,
      });
    } else {
      const rawResponse = await fetch("/api/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupdata),
      });
      const content = await rawResponse.json();
      if (content.message === "User Added") {
        setTimeout(() => {
          router.push("/SmallPages/Login");
        }, 2000);
        toast({
          title: `Signup Successful`,
          position: "top",
          status: "success",
          duration: 2000,
        });
      } else {
        toast({
          title: `User Already Exist.`,
          position: "top",
          status: "info",
          duration: 3000,
        });
      }
    }
  };

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
        <form>
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
          <Input
            backgroundColor="blue.200"
            mb={"2"}
            name="name"
            value={signupdata.name}
            onChange={HandleChange}
          />
          <FormLabel fontWeight={"normal"}>Mobile no</FormLabel>
          <Input
            backgroundColor="blue.200"
            mb={"2"}
            name="mobile"
            type={"number"}
            value={signupdata.mobile}
            onChange={HandleChange}
          />
          <FormLabel fontWeight={"normal"}>Email</FormLabel>
          <Input
            backgroundColor="blue.200"
            mb={"2"}
            name="email"
            type={"email"}
            value={signupdata.email}
            onChange={HandleChange}
          />
          <FormLabel fontWeight={"normal"}>Password</FormLabel>
          <Input
            backgroundColor="blue.200"
            mb={"2"}
            name="password"
            type={"password"}
            value={signupdata.password}
            onChange={HandleChange}
          />
          <Button
            width={"100%"}
            borderRadius="11rem"
            backgroundColor={"blue.400"}
            color="white"
            mt={"2rem"}
            _hover={{
              bg: "blue.500",
            }}
            type="submit"
            onClick={HandleSubmit}
          >
            Submit
          </Button>
          <Text textAlign={"center"} mt="10px">
            Already have account{" "}
            <Link href={"/SmallPages/Login"}>
              <span style={{ color: "blue", cursor: "pointer" }}>Login !</span>
            </Link>
          </Text>
        </form>
      </Box>
    </Flex>
  );
}
