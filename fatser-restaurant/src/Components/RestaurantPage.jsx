import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";


const RestaurantPage = () => {
  const data = JSON.parse(localStorage.getItem("fast"));
  console.log(data);
  return (
    <Box>
      <Text>{data.restaurant_name}</Text>
      <Image src={data.images[0].url} alt="Image" />
      <img src="../Images/faster-logo.png" alt="Fastor-logo" />
    </Box>
  );
};

export default RestaurantPage;
