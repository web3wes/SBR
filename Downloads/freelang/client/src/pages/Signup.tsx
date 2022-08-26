import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { LOG_IN, SIGN_UP } from "src/utils/mutations";
import { useNavigate } from "react-router-dom";
import { Box, Input, Text, Center, Button } from "@chakra-ui/react";
import { AuthContext } from "src/utils/auth";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [signup] = useMutation(SIGN_UP, {
    variables: {
      email: email,
      password: password,
      username: username,
    },
    onCompleted: ({ signup }) => {
      console.log(signup);
      navigate("/home");
    },
  });

  const handleSignup = () => {
    signup({
      variables: {
        email,
        password,
        username,
      },
    });
  };

  return (
    <Center>
      <Box mt={250}>
        <Text>Email:</Text>
        <Input onChange={(e) => setEmail(e.target.value)} />
        <Text>Password:</Text>
        <Input type="password" onChange={(e) => setPassword(e.target.value)} />
        <Text>username:</Text>
        <Input onChange={(e) => setUsername(e.target.value)} />

        <Button onClick={handleSignup}>Sign Up</Button>
      </Box>
    </Center>
  );
}
