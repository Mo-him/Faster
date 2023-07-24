import React from 'react'
import { Box, Button, Input, Text } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [Login, setLogin] = useState("");


  const navigate = useNavigate();
  const toast = useToast()

  const OPTSend = () => {
    toast({title: 'Succesfullt Login',description: "Your OTP is  123456", status: 'successfully', duration: 3000, isClosable: true, })
    navigate('/OTPVerification')
  }
  return (
    <Box>
      <Box paddingTop={"10%"} >

        <Text fontSize='35px' as='b' >Enter Your Mobile Number</Text>
        <Text color='grey'>We will send you the 6 digits verification code </Text>


      </Box>


      <Box textAlign="center" paddingTop={"30px"}>
        <Input size='md' width={"28%"} placeholder="Enter your Mobile Number" type={"number"} onChange={(e) => setLogin(e.target.value)} />


        <Box paddingTop={"30px"}>
          <Button background={'#ff7878'} color="white" onClick={OPTSend}>Send Code</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Login;