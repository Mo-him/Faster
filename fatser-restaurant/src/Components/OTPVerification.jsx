import React from "react";
import axios from 'axios'
import {Box,Button,HStack,PinInput,PinInputField,Text} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const OTPVerification = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [code5, setCode5] = useState("");
  const [code6, setCode6] = useState("");

  const [response, setResponse] = useState([])
  const toast = useToast();
  const navigate = useNavigate();

  const verifyingOTP = () => {
    navigate('/MainPage')

  }
  const verify = async () => {
    if ((code1 + code2 + code3 + code4 + code5 + code6) != "123456") {
      toast({title: 'Wrong OTP',description: "Please Enter Correct OTP",status: 'error',duration: 3000,isClosable: true,})
    }
    else {
      navigate('/MainPage')
    }



    const payload = {
      phone: "8408083042",
      otp: code1 + code2 + code3 + code4 + code5 + code6,
      dial_code: "+91"
    }
    
    
    
    await axios.post('https://staging.fastor.in/v1/pwa/user/login', payload)
    .then((res) => 
    setResponse(res.data)).catch((err) => console.log(err));
    localStorage.setItem("FastorToken", response.data.token ? response.data.token : null);
  };

  return (
    <Box padding={"30px"} width={"28%"} marginLeft={"40%"}>
      <Box paddingTop={"10%"} textAlign="left">
        <Text fontSize="35px" as="b"> OTP Verification</Text>
        <Text color="grey"> Enter the verification code we just sent on your Mobile Number.{" "} </Text>
      </Box>

      <Box textAlign="center" paddingTop={"30px"}>
        <HStack>
          <PinInput>
            <PinInputField onChange={(e) => setCode1(e.target.value)} /><PinInputField onChange={(e) => setCode2(e.target.value)} /> <PinInputField onChange={(e) => setCode3(e.target.value)} /> <PinInputField onChange={(e) => setCode4(e.target.value)} /><PinInputField onChange={(e) => setCode5(e.target.value)} /><PinInputField onChange={(e) => setCode6(e.target.value)} />
          </PinInput>
        </HStack>
      </Box>

      <Box textAlign="left" marginTop={"30px"}>
        <Button size="lg" width={"50%"} background={"#ff7878"} color="white" onClick={verifyingOTP} > Verify
 </Button>
      </Box>
      <Text marginTop={"40px"}>Didn't recieved code</Text>
      <Text color={"blue"}>
        <Link to="/">Resend</Link>
      </Text>
    </Box>
  );
};

export default OTPVerification;
