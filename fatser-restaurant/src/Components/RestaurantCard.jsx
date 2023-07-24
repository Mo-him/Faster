import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const RestaurantCard = (props) => {
  const navigate = useNavigate();

  const restaurantButton = () => {
    localStorage.setItem("fast", JSON.stringify(props))
    navigate('/restaurantPage')

  }
  return (
    <Card onClick={restaurantButton}
    >
      <Image src={props.images[0].url} alt="Caffe Latte"/>

      <Stack>
        <CardBody>
          <Heading >{props.restaurant_name}</Heading>
          <Text>{`Rating : ${props.rating.restaurant_avg_rating}`}</Text>
          <Text>{`Cost for Two : $ ${props.avg_cost_for_two}`}</Text>
          <Text>{`Opens at : ${props.opens_at},Closed at : ${props.closes_at}`}</Text>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default RestaurantCard;
