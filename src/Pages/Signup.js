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
  Link,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { registerNow, registerReset } from "../Redux/LoginReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navi = useNavigate();
  const toast = useToast();
  const [details, setDetails] = useState({
    email: "",
    password: "",
    name: "",
  });
  const dispatch = useDispatch();
  const loading = useSelector((store) => {
    return store.LoginReducer.isLoading;
  });
  const registered = useSelector((store) => {
    return store.LoginReducer.isRegistered;
  });
  // console.log(registered);

  useEffect(() => {
    if (registered > 0) {
      dispatch(registerReset);
      toast({
        title: "Account created.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      navi("/");
    }
  }, [registered]);

  function register(e) {
    e.preventDefault();
    dispatch(registerNow(details));
    setDetails({
      email: "",
      password: "",
      name: "",
    });
  }

  return loading ? <Spinner
  thickness='4px'
  mt={'25%'}
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  /> :
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Create your account</Heading>
          </Stack>
          <VStack
            as="form"
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h="max-content !important"
            
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
            spacing={8}
            onSubmit={register}
          >
            <VStack spacing={4} w="100%">
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  rounded="md"
                  type="text"
                  value={details.name}
                  onChange={(e) => {
                    setDetails({ ...details, name: e.target.value });
                  }}
                />
              </FormControl>

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
                Sign Up
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Container>
  
};

export default Signup;
