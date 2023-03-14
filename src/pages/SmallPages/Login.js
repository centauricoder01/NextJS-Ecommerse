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
import userModel from "../../../Models/user";
import connect from "../../../utils/Mongoose";
import { useRouter } from "next/router";

export default function Login({ Prodata, AddUserToLocal }) {
  const router = useRouter();

  const [signupdata, setSignupData] = useState({
    email: "",
    password: "",
  });
  const toast = useToast();

  const HandleChange = (e) => {
    setSignupData({ ...signupdata, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < Prodata.length; i++) {
      if (
        Prodata[i].email == signupdata.email &&
        Prodata[i].password == signupdata.password
      ) {
        toast({
          title: `Welcome Back ${Prodata[i].name}`,
          position: "top",
          status: "success",
          duration: 3000,
        });
        AddUserToLocal(Prodata[i]);
        router.push("/");
        return;
      }
    }
    toast({
      title: `Credential doesn't Match.`,
      position: "top",
      status: "error",
      duration: 3000,
    });
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
          <Heading textAlign={"center"}>Login</Heading>
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
          <FormLabel fontWeight={"normal"}>Email</FormLabel>
          <Input
            backgroundColor="blue.200"
            name="email"
            type={"email"}
            value={signupdata.email}
            onChange={HandleChange}
          />
          <FormLabel fontWeight={"normal"}>Password</FormLabel>
          <Input
            backgroundColor="blue.200"
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
            Forget Password?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => {
                toast({
                  title: `Sorry, we are working on this feature.`,
                  position: "top",
                  status: "info",
                  duration: 3000,
                });
              }}
            >
              Get it on Email !
            </span>
          </Text>
        </form>
      </Box>
    </Flex>
  );
}

export async function getServerSideProps(context) {
  await connect();
  try {
    const pro = await userModel.find();
    return {
      props: {
        Prodata: JSON.parse(JSON.stringify(pro)),
      },
    };
  } catch (error) {
    return {
      props: { error },
    };
  }
}
