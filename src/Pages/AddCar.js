import React, { useEffect } from "react";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Input,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { get_oem_fun } from "../Redux/oem/action";
import { Link } from "react-router-dom";
const AddCar = () => {
  // redux dispatcher
  const dispatch = useDispatch();
  // redux store
  const store = useSelector((store) => store.OEM_Reducer);
  useEffect(() => {
    dispatch(get_oem_fun);
  }, []);

  return (
    <Box minH={"100vh"} bgColor={"#00171F"} fontFamily={"Poppins"}>
      <Box pt={"90px"} px={10}>
        <Input placeholder="Search Your Car OEM" />
      </Box>

      <Box mt={10}>
        <Grid
          pb={10}
          gap={5}
          width={"80%"}
          color={"#fff"}
          margin={"auto"}
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
            "repeat(4,1fr)",
          ]}>
          {store.oem_cars.map((item, index) => {
            return (
              <GridItem
                border={"1px solid"}
                key={index}
                p={3}
                boxShadow={"5px 5px 3px white"}>
                <Link to={`/addcar/${item._id}`}>
                  <Heading mb={3} textAlign={"center"} fontSize={"lg"}>
                    {" "}
                    {item.modelName}
                  </Heading>
                  <Text>Year - {item.year}</Text>
                  <Text>List Price - Rs {item.listPrice}</Text>
                  <Flex alignItems={"center"}>
                    <Text> Colors </Text>
                    <HStack alignItems={"center"} ml={4}>
                      {item.availableColors.map((element, ind) => {
                        return (
                          <Box
                            key={ind}
                            height={"10px"}
                            width={"10px"}
                            bgColor={`${element}`}></Box>
                        );
                      })}
                    </HStack>
                  </Flex>
                  <Text>Power - {item.power} BHP</Text>
                  <Text>Milage - {item.milage} km</Text>
                  <Text>Max Speed - {item.maxSpeed} km/hr</Text>
                </Link>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default AddCar;