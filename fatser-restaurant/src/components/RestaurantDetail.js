import React from "react";
import { useHistory } from "react-router-dom";
//import {useNavigate } from 'react-router-dom';
import RestaurantImageOverlay from "./RestaurantImageOverlay";

const RestaurantDetail = () => {
  const history = useHistory();
  //const navigate = useNavigate();

  // Sample restaurant image URL
  const restaurantImageURL = "IMAGE_URL";

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div>
      <button onClick={handleBack}>Back to Restaurant List</button>
      <img src={restaurantImageURL} alt="Restaurant" />
      {/* <RestaurantImageOverlay /> */}
    </div>
  );
};

export default RestaurantDetail;
