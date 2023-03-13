import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Grid,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import productModel from "../../../Models/product";
import connect from "../../../utils/Mongoose";

const data = {
  isNew: true,
  imageURL: "https://m.media-amazon.com/images/I/7138S0ZHxkL._UY741_.jpg",
  name: "Wayfarer Classic",
  price: 500,
  rating: 4.2,
  numReviews: 1,
};

function Zipperhoodies({ Prodata }) {
  return (
    <Grid
      p={50}
      w="100%"
      gap="1rem"
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      margin={"auto"}
    >
      {Prodata?.map((ele) => (
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}

          <Link href={"/SingleProduct/singletshirt"}>
            <Image
              src={ele.img}
              alt={`Picture of ${data.name}`}
              roundedTop="lg"
              margin={"auto"}
              maxW="100%"
              maxH="15rem"
              onClick={() => {
                localStorage.setItem("single", JSON.stringify(ele));
              }}
            />
          </Link>

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  {ele.category}
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="md"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {data.name}
              </Box>
            </Flex>

            <Flex
              justifyContent="space-between"
              alignContent="center"
              gap={"2rem"}
            >
              {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
              <Box>
                <p>Add more thing here</p>
              </Box>
              <Box fontSize="sm" color={useColorModeValue("gray.800", "white")}>
                <Box as="span" color={"gray.600"} fontSize="sm" mr={"4px"}>
                  ₹
                </Box>
                {data.price.toFixed(2)}
              </Box>
            </Flex>
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

export default Zipperhoodies;

export async function getServerSideProps(context) {
  await connect();
  try {
    const pro = await productModel.find({ category: "zipper" });
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
