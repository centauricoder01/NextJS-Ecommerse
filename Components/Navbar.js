import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import styles from "../src/styles/navbar.module.css";

export default function Navbar({
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subtotal,
}) {
  const { isOpen, onToggle } = useDisclosure();
  const [classes, setclasses] = useState(styles.donotshownavbar);

  return (
    <>
      <Box shadow="base" position="sticky" top={0} zIndex="2000">
        <Flex
          bg={useColorModeValue("#bee3f8", "#bee3f8")}
          color={useColorModeValue("black.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Link
              href={"/"}
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <Image
                src="/logo2.png"
                alt="Picture of the author"
                width={200}
                height={100}
              />
            </Link>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            alignItems={"center"}
          >
            <BsCart4
              style={{
                fontSize: "2rem",
                fontWeight: 400,
                cursor: "pointer",
              }}
              onClick={() => {
                setclasses(styles.shownavbar);
              }}
            />
            <Link href={"/SmallPages/Signup"}>
              {/* <Button>Sign Up</Button> */}
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"blue.400"}
                _hover={{
                  bg: "blue.300",
                }}
              >
                Sign Up
              </Button>
            </Link>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
      <Box className={classes}>
        <Text fontSize={"3xl"} fontWeight="bold" mb={"1rem"}>
          Shooping Cart
        </Text>
        <ImCross
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            setclasses(styles.donotshownavbar);
          }}
        />
        {Object.keys(cart).length === 0 && (
          <Text fontWeight={"bold"}>No Item in the Cart</Text>
        )}
        <ol>
          {Object.keys(cart).map((k) => (
            <Flex
              gap={"1rem"}
              justifyContent="center"
              alignItems={"center"}
              border="1px solid"
              key={k}
            >
              <Text fontSize={"1.5rem"} fontWeight="normal">
                {cart[k].name}
              </Text>
              <Button
                fontSize={"2rem"}
                onClick={() => {
                  removeFromCart("singletshirt");
                }}
              >
                -
              </Button>
              <Text>{cart[k].qty}</Text>
              <Button
                fontSize={"2rem"}
                onClick={() => {
                  addToCart("singletshirt", 1, 1000, "Rajendra", "XL", "Blue");
                }}
              >
                +
              </Button>
            </Flex>
          ))}
        </ol>
        <Box
          display={"flex"}
          gap="2rem"
          justifyContent={"center"}
          alignItems="center"
          marginTop={"2rem"}
        >
          <Link href={"/SmallPages/Checkout"}>
            <Button
              backgroundColor={"green.200"}
              _hover={{
                bg: "green.300",
              }}
            >
              Checkout
            </Button>
          </Link>
          <Button
            backgroundColor={"red.200"}
            _hover={{
              bg: "red.300",
            }}
            onClick={clearCart}
          >
            Clear
          </Button>
        </Box>
      </Box>
    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Flex
      direction={"row"}
      gap={4}
      alignItems={"center"}
      justifyContent="center"
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"lg"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Flex>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("blue.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "blue.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"blue.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Shirts",
    children: [
      {
        label: "T-Shirts",
        subLabel: "Trending Design to inspire you",
        href: "/SmallPages/Tshirts",
      },
      {
        label: "Sweatshirts",
        subLabel: "Gives you Bold and stylish look",
        href: "/SmallPages/Sweatshirts",
      },
    ],
  },
  {
    label: "Hoodies",
    children: [
      {
        label: "Normal Hoodies",
        subLabel: "Find your dream Design today",
        href: "/SmallPages/Normalhoodies",
      },
      {
        label: "Zippper Hoodies",
        subLabel: "An exclusive collection for you.",
        href: "/SmallPages/Zipperhoodies",
      },
    ],
  },
  {
    label: "Mugs",
    href: "/SmallPages/Mugs",
  },
  {
    label: "Caps",
    href: "/SmallPages/Caps",
  },
];
