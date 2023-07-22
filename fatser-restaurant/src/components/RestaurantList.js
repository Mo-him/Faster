import React, { useEffect, useState } from "react";
import axios from "axios";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("https://gist.githubusercontent.com/maratgaip/44060c688fcf5f2b7b3985a6d15fdb1d/raw/e93c3dce0826d08c8c6e779cb5e6d9512c8fdced/restaurant-menu.json");
        setRestaurants(response.data);
      } catch (error) {
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <div>
          <image>{restaurant.img}</image>
          </div>
          
          <h2>{restaurant.title}</h2>
          <p>{restaurant.desc}</p>
          <price>{restaurant.price}</price>
          {/* Add other restaurant details */}
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;


