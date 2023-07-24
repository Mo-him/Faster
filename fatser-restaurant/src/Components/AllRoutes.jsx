import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import OTPVerification from './OTPVerification';
import RestaurantPage from './RestaurantPage';
import Login from './Login';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/otpverification' element={<OTPVerification />} />
      <Route path='/mainPage' element={<MainPage/>} />
      <Route path='/restaurantPage' element={<RestaurantPage />} />
    </Routes>
  )
}

export default AllRoutes