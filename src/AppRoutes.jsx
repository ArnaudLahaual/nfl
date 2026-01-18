import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/teams" element={<Teams />}></Route>
      <Route path="/confs" element={<Home />}></Route>
      <Route path="/players" element={<Home />}></Route>
      <Route path="/rules" element={<Home />}></Route>
      <Route path="/news" element={<Home />}></Route>
    </Routes>
  );
}
