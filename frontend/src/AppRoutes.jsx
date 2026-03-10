import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import TeamDetails from "./pages/TeamDetails";
import History from "./pages/History";
import Conference from "./pages/Conference";
import Map from "./pages/Map";
import Players from "./pages/Players";
import PlayerCard from "./components/PlayerCard";
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/teams" element={<Teams />}></Route>
      <Route path="/teams/:id" element={<TeamDetails />}></Route>
      <Route path="/history" element={<History />}></Route>
      <Route path="/conference/:conference" element={<Conference />}></Route>
      <Route path="/players" element={<Players />}></Route>
      <Route path="/players/:teamId" element={<PlayerCard />} />
      <Route path="/rules" element={<Home />}></Route>
      <Route path="/news" element={<Home />}></Route>
      <Route path="/map" element={<Map />}></Route>
      <Route path="/auth" element={<Auth />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}
