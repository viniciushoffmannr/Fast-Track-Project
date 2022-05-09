import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Profile from "./pages/Profile";

export default function PageRoutes() {
  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/" element={<LoginPage />} />
    </Routes>
  );
}
