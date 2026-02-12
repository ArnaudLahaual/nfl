import { createSlice } from "@reduxjs/toolkit";
import { players as playersData } from "../../data/players";

const initialState = {
  playersList: playersData,
  searchValue: "",
};

const teamsSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = teamsSlice.actions;
export default teamsSlice.reducer;
