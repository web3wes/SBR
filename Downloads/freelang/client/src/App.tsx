import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Logo from "./components/Logo";
import theme from "./theme";
import { Outlet, BrowserRouter as Router } from "react-router-dom";
import { useQuery, ApolloProvider } from "@apollo/client";
import { client } from "./apolloClient";
import { ROUTES } from "src/utils/routes";
import { AuthProvider } from "src/utils/auth";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <ApolloProvider client={client}>
        <AuthProvider>{ROUTES}</AuthProvider>
      </ApolloProvider>
    </Router>
  </ChakraProvider>
);
