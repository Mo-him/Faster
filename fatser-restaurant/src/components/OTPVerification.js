import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();

  const handleOTPVerification = () => {
    if (otp === "123456") {
        navigate("/RestaurantList");
        alert("succefully")
    } else {
      console.log("Wrong OTP")
    }
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      <p>Enter the verification code was just send your mobile number</p>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
      />
      <br></br>
      <button onClick={handleOTPVerification}>Verify</button>
    </div>
  );
};

export default OTPVerification;
