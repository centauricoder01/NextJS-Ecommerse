import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  useColorModeValue,
  Input,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Post({ addToCart }) {
  const [enterPin, setenterPin] = useState();
  const toast = useToast();

  const router = useRouter();
  const { slug } = router.query;
  const handlechange = (e) => {
    setenterPin(e.target.value);
  };

  const checkPin = async () => {
    await fetch("http://localhost:3000/api/Pincode")
      .then((res) => res.json())
      .then((res) => {
        if (!enterPin || enterPin === null) {
          toast({
            title: `Please Enter Your Pincode`,
            position: "top",
            status: "error",
            duration: 4000,
          });
        } else if (res.includes(Number(enterPin))) {
          toast({
            title: `hurry we deliver to your doorstep`,
            position: "top",
            status: "success",
            duration: 4000,
          });
          setenterPin();
        } else {
          toast({
            title: `delivery is not possible to your location`,
            position: "top",
            status: "info",
            duration: 4000,
          });
          setenterPin();
        }
      })
      .catch((err) => console.log(err));
  };

  let value =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("single"))
      : {};

  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "auto", lg: "80%" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"xl"}
        padding={4}
      >
        <Flex flex={1} justifyContent="center">
          <Image w={{ sm: "60%", md: "auto" }} src={value.img} />
        </Flex>
        <Stack flex={1} flexDirection="column" alignItems="left" p={1} pt={2}>
          <Text fontWeight={600} color={"gray.500"} size="sm">
            @Circuit Shop
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {value.title}
          </Heading>
          <Text
            textAlign={"left"}
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {value.desc}
          </Text>
          <Stack>
            <Text fontWeight={"bolder"}>Product Highlights:</Text>
            <ul>
              <Box ml={"2rem"}>
                <li>100% cotton material</li>
                <li> Eyecatching design</li>
                <li>Perfect for programmers and developers</li>
                <li> Comfortable fit</li>
              </Box>
            </ul>
          </Stack>
          <Stack align={"left"} direction={"row"} mt={6}>
            <Box as="span" color={"gray.600"} fontSize="2xl" mr={"4px"}>
              ₹ {value.price}
            </Box>
          </Stack>

          <Text fontSize={"sm"} mt="3rem">
            Enter pincode to check Delivery status{" "}
          </Text>
          <Flex
            justifyContent={"left"}
            gap="1rem"
            w={{ sm: "60%", md: "50%", lg: "40%" }}
            mb="3rem"
          >
            <Input
              placeholder="Enter Pincode"
              width={"60%"}
              type="number"
              value={enterPin}
              onChange={handlechange}
            />
            <Button
              width={"40%"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
              onClick={checkPin}
            >
              Check
            </Button>
          </Flex>
          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.300",
              }}
              width="50%"
              onClick={() => {
                addToCart(
                  value._id,
                  1,
                  value.price,
                  value.title,
                  value.size,
                  value.color
                );
                // id, qty, price, name, size, varient, img;
              }}
            >
              Add to Cart
            </Button>
            <Link href={"/SmallPages/Checkout"} style={{ width: "50%" }}>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"orange.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "orange.600",
                }}
                width="100%"
                _focus={{
                  bg: "orange.600",
                }}
                onClick={() => {}}
              >
                Buy Now
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
