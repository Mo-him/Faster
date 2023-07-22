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
        <label htmlFor="mobileNumber">Enter Your Mobile Number:</label>
        <p>We will send you 6 digit verification code</p>
        <input
          type="text"
          id="mobileNumber"
          value={mobileNumber}
          onChange={handleMobileNumberChange}
          required
        />
        <button type="submit">{otpSent ? 'Submit Code' : 'Send Code'}</button>
      </form>
    </div>
  );





  

};

export default Login;
