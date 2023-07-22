import React from "react";
//import { useHistory } from "react-router-dom";
import {useNavigate } from 'react-router-dom';
import RestaurantImageOverlay from "./RestaurantImageOverlay";

const RestaurantDetail = () => {
  //const history = useHistory();
  const navigate = useNavigate();

  const restaurantImageURL = "";

  const handleBack = () => {
    navigate.goBack();
  };

  return (
    <div>
      <button onClick={handleBack}>Back to Restaurant List</button>
      <img src={restaurantImageURL} alt="Restaurant" />
      <RestaurantImageOverlay />
    </div>
  );
};

export default RestaurantDetail;
