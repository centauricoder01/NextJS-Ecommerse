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
} from "@chakra-ui/react";
import Link from "next/link";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const data = {
  isNew: true,
  imageURL: "https://m.media-amazon.com/images/I/81ubrYy0GrL._UX569_.jpg",
  name: "Wayfarer Classic",
  price: 500,
  rating: 4.2,
  numReviews: 1,
};

function Sweatshirts() {
  return (
    <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      flexWrap={"wrap"}
      gap="1rem"
    >
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
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
            margin={"auto"}
            maxW="70%"
          />
        </Link>

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                Tshirts
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex
            justifyContent="space-between"
            alignContent="center"
            gap={"2rem"}
          >
            {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
            <Box>
              <p>
                Add more thing here Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aliquam, illo quos fugiat voluptate esse
              </p>
            </Box>
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="2xl" mr={"4px"}>
                ₹
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default Sweatshirts;
