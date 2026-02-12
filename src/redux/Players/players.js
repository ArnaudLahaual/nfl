import { createSlice } from "@reduxjs/toolkit";
import { players as playersData } from "../../data/players";

const initialState = {
  playersList: playersData,
  searchValue: "",
  selectedTeamById: null,
};

const teamsSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSelectedTeamById(state, action) {
      state.selectedTeamById = action.payload;
    },
  },
});

export const { setSearchValue, setSelectedTeamById } = teamsSlice.actions;
export default teamsSlice.reducer;
