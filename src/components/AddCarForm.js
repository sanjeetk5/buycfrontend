import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Checkbox,
  CheckboxGroup,
  FormLabel,
  HStack,
  Heading,
  Input,
  Textarea,
  Stack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const carsDetailsObject = {
  image: "",
  title: "",
  kmInOdometer: "",
  accidentsReports: "",
  previousBuyers: "",
  registrationPlace: "",
  price: "",
  description: "",
};

const AddCarForm = () => {
  const [cardDetails, setcardDetails] = useState(carsDetailsObject);
  const [object, setObject] = useState({});
  //   Catch id from URL
  const { id } = useParams();

  // redux dispatcher
  const dispatch = useDispatch();
  // redux store
  const store = useSelector((store) => store.OEM_Reducer);

  const handleSubmit = (e) => {};
  const handleChange = (e) => {};

  useEffect(() => {
    (() => {
      axios
        .get(`https://buycback.onrender.com/oem/${id}`)
        .then((res) => {
          setObject(res.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  return (
    <Box minH={"110vh"} bgColor={"#00171F"} fontFamily={"Poppins"}>
      <Box pt={"90px"} px={10}>
        <Flex gap={10} minH={"80vh"} color={"#fff"}>
          <Box flex={1} p={5}>
            <Center>
              <Heading fontSize={"lg"}>Add Your Car Details</Heading>
            </Center>
            <form action="" onSubmit={handleSubmit}>
              <FormControl pb={2}>
                <FormLabel>Image</FormLabel>
                <Input type="url" />
              </FormControl>
              <FormControl pb={2}>
                <FormLabel>Title</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl py={2}>
                {" "}
                <Stack direction="row" spacing={5}>
                  <Checkbox>Major Scratches</Checkbox>
                  <Checkbox>Original Parents</Checkbox>
                </Stack>
              </FormControl>
              <FormControl pb={2}>
                <FormLabel>Km in Odometer</FormLabel>
                <Input type="number" />
              </FormControl>
              <FormControl pb={2}>
                <FormLabel>Number of Accidents reported</FormLabel>
                <Input type="number" />
              </FormControl>
              <FormControl pb={2}>
                <FormLabel>Number of Previous buyers</FormLabel>
                <Input type="number" />
              </FormControl>
              <FormControl pb={2}>
                <FormLabel>Registration Place</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl pb={2}>
                <FormLabel>Price</FormLabel>
                <Input type="number" />
              </FormControl>
              <FormControl pb={2}>
                <FormLabel>Description</FormLabel>
                <Textarea type="number" />
              </FormControl>
              <Center>
                <Button
                  type="submit"
                  _hover={{ bg: "trasnparent" }}
                  _focus={{ bgColor: "#00171F" }}
                  color={"#fff"}
                  variant={"outline"}>
                  Submit Car Information
                </Button>
              </Center>
            </form>
          </Box>
          <Box border={"1px solid"}></Box>
          <Box flex={1} p={5}>
            <Center>
              <Heading fontSize={"lg"}>OEM Car Specification</Heading>
            </Center>
            <FormControl pb={2}>
              <FormLabel>Model Name</FormLabel>
              <Input type="url" value={object.modelName} />
            </FormControl>
            <FormControl pb={2}>
              <FormLabel>Year</FormLabel>
              <Input type="text" value={object.year} />
            </FormControl>
            <FormControl pb={2}>
              <FormLabel>Listing Price</FormLabel>
              <Input type="number" value={object.listPrice} />
            </FormControl>
            <FormControl pb={2}>
              <FormLabel>Available Colors</FormLabel>
              <HStack alignItems={"center"}>
                {object.availableColors?.map((element, ind) => {
                  return (
                    <Box
                      key={ind}
                      height={"15px"}
                      width={"15px"}
                      bgColor={`${element}`}></Box>
                  );
                })}
              </HStack>
            </FormControl>
            <FormControl pb={2}>
              <FormLabel>Milage</FormLabel>
              <Input type="number" value={object.milage} />
            </FormControl>
            <FormControl pb={2}>
              <FormLabel>Max Speed</FormLabel>
              <Input type="text" value={object.maxSpeed} />
            </FormControl>
            <FormControl pb={2}>
              <FormLabel>Power In BHP</FormLabel>
              <Input type="number" value={object.power} />
            </FormControl>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default AddCarForm;