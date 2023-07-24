import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';

const MainPage = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("FastorToken")
    const [data, setData] = useState([]);






    useEffect(() => {
        if (!token||token==null||token==undefined) {navigate('/') }
        else {
            const config = {headers: { Authorization: `Bearer ${token}`,}}
            axios.get("https://staging.fastor.in/v1/m/restaurant?city_id=118&&", config)
                .then((res) =>setData(res.data))
                .catch((err) => console.log(err))
        }
    },[])

    return (
        <Box> {data?.map((item) => (<div key={item.restaurant_id}> <RestaurantCard {...item} /> </div>))}
        </Box>
    )
}

export default MainPage;