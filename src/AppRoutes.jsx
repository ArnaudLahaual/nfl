import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import TeamDetails from "./pages/TeamDetails";
import History from "./pages/History";
import Conference from "./pages/Conference";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/teams" element={<Teams />}></Route>
      <Route path="/teams/:id" element={<TeamDetails />}></Route>
      <Route path="/history" element={<History />}></Route>
      <Route path="/conference/:conference" element={<Conference />}></Route>
      <Route path="/players" element={<Home />}></Route>
      <Route path="/rules" element={<Home />}></Route>
      <Route path="/news" element={<Home />}></Route>
    </Routes>
  );
}
