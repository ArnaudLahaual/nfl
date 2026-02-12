import { createSlice } from "@reduxjs/toolkit";
import { players as playersData } from "../../data/players";

const initialState = {
  playersList: playersData,
};

const teamsSlice = createSlice({
  name: "players",
  initialState,
  reducers: {},
});

export const {} = teamsSlice.actions;
export default teamsSlice.reducer;
