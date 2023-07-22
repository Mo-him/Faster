import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OTPVerification from './OTPVerification';
import Login from './Login';
import RestaurantList from './RestaurantList';
import RestaurantDetail from './RestaurantDetail';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/otp' element={<OTPVerification />} />
      <Route path='/dashboard' element={<RestaurantList />} />
      <Route path='/single' element={<RestaurantDetail />} />
    </Routes>
  )
}

export default AllRoutes