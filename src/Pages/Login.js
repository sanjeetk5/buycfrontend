import { useEffect, useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Center,
  InputGroup,
  InputRightElement,
  Checkbox,
  useToast,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginNow } from "../Redux/LoginReducer/action";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const loading = useSelector((store) => {
    return store.LoginReducer.isLoading;
  });
  const token = useSelector((store) => {
    return store.LoginReducer.token;
  });

  useEffect(() => {
    if (token) {
      toast({
        title: "Login Successful",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
  }, [token]);

  function sumbit(e) {
    e.preventDefault();
    dispatch(loginNow(details))
      .then((res) => {
        if (res.token) {
          navigate("/addcar");
        }
        // console.log(res.token);
      })
      .catch((err) => {
        console.log(err);
      });

    setDetails({
      email: "",
      password: "",
    });
  }

  return loading ? (
    <Spinner
      thickness="4px"
      mt={"25%"}
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  ) : (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Log in to your account</Heading>
          </Stack>
          <VStack
            as="form"
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h="max-content !important"
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
            spacing={8}
            onSubmit={sumbit}
          >
            <VStack spacing={4} w="100%">
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  rounded="md"
                  type="email"
                  value={details.email}
                  onChange={(e) => {
                    setDetails({ ...details, email: e.target.value });
                  }}
                  placeholder="Email"
                  required={true}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    rounded="md"
                    type={show ? "text" : "password"}
                    value={details.password}
                    onChange={(e) => {
                      setDetails({ ...details, password: e.target.value });
                    }}
                    placeholder="Password"
                    required={true}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      rounded="md"
                      onClick={handleClick}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justify="space-between" w="100%">
                <Checkbox colorScheme="green" size="md">
                  Remember me
                </Checkbox>
                <Link fontSize={{ base: "md", sm: "md" }}>
                  Forgot password?
                </Link>
              </Stack>
              <Button
                bg="green.300"
                color="white"
                _hover={{
                  bg: "green.500",
                }}
                rounded="md"
                w="100%"
                type="submit"
              >
                Log in
              </Button>
            <Link to={"/signup"}>
            <Text>Didn't have account SignUP</Text>
            </Link>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
};

export default Login;
