import React from "react";
import { Route, Routes } from "react-router-dom";
import { LogIn, Home, SignUp } from "src/pages";
// import Home from "../pages/Home";

export const PUBLIC_ROUTES = ["/home", "/signup"];

export const ROUTES = (
  <Routes>
    <Route path="/log-in" element={<LogIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/" element={<Home />}>
      <Route path="/home" element={<Home />} />

      {/* add more routes here */}
    </Route>
  </Routes>
);
