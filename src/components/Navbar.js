import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
const Links = [
  { text: "Dashboard", url: "" },
  { text: "Add Car", url: "/addcar" },
  { text: "Inventory", url: "" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <Box
        px={4}
        position={"fixed"}
        backdropFilter={"blur(25px)"}
        width={"100%"}
        zIndex={1}
        color={"#fff"}
        fontFamily={"Poppins"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            visibility={["hidden", "hidden", "visible", "visible"]}>
            <Link to={"/"}>
              {" "}
              <Box
                boxShadow={"5px 5px 10px "}
                border={"1px solid"}
                fontWeight={"600"}
                p={"10px 40px"}
                borderRadius={"10px"}>
                Buyc
              </Box>
            </Link>
          </HStack>
          <HStack
            justifyContent={"center"}
            as={"nav"}
            spacing={10}
            display={{ base: "none", md: "flex" }}>
            {Links.map(({ text, url }) => (
              <Link
                to={url}
                style={{
                  border: "1px groove #fff",
                  padding: "5px",
                  borderRadius: "5px",
                }}
                key={text}>
                {text}
              </Link>
            ))}
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              onClick={() => {
                navigate("/");
              }}
              variant={"solid"}
              letterSpacing={2}
              colorScheme={"green"}
              size={"sm"}
              mr={4}>
              Signin
            </Button>
            <Button
              onClick={() => {
                navigate("signup");
              }}
              variant={"solid"}
              letterSpacing={2}
              colorScheme={"green"}
              size={"sm"}
              mr={4}>
              Signup
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ text, url }) => (
                <Link to={url} key={text}>
                  {text}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    
    </>
  );
}