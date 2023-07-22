import React, { useState } from "react";
 import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigation = useNavigate();

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSendOTP = () => {
    const hardcodedOTP = '123456';
    console.log('OTP sent successfully:', hardcodedOTP);
    setOtpSent(true);
    navigation("./OTPVerification");
    
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (otpSent) {
      console.log('Logged in successfully with OTP:', mobileNumber);
       //history.push('/RestaurantList.js');
       
      
    } else {
      handleSendOTP();
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="text"
          id="mobileNumber"
          value={mobileNumber}
          onChange={handleMobileNumberChange}
          required
        />
        <button type="submit">{otpSent ? 'Submit OTP' : 'Send OTP'}</button>
      </form>
    </div>
  );





  

};

export default Login;
