import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { LOG_IN } from "src/utils/mutations";
import { useNavigate } from "react-router-dom";
import { Box, Input, Text, Center, Button } from "@chakra-ui/react";
import { AuthContext } from "src/utils/auth";

export default function LogIn() {
  const { updateToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const [login] = useMutation(LOG_IN, {
    onCompleted: (data) => {
      localStorage.setItem("auth-token", data.tokenAuth.token);
      updateToken(data.tokenAuth.token);
      navigate("/home");
    },
    onError: (error) => console.error(error),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login({
      variables: {
        email,
        password,
      },
    });
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <Center>
      <Box mt={250}>
        <Text>Email:</Text>
        <Input onChange={(e) => setEmail(e.target.value)} />
        <Text>Password:</Text>
        <Input type="password" onChange={(e) => setPassword(e.target.value)} />
        <Button my={10} colorScheme="blue" onClick={handleLogin}>
          Log in
        </Button>

        <Button onClick={handleSignup}>Sign Up</Button>
      </Box>
    </Center>
  );
}
