import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default function PageRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
  );
}
