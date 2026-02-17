import { createSlice } from "@reduxjs/toolkit";
import { players as playersData } from "../../data/players";

const initialState = {
  playersList: [],
  searchValue: "",
  selectedTeamById: null,
};

const teamsSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setPlayersList(state, action) {
      state.playersList = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSelectedTeamById(state, action) {
      state.selectedTeamById = action.payload;
    },
  },
});

export const { setPlayersList, setSearchValue, setSelectedTeamById } =
  teamsSlice.actions;
export default teamsSlice.reducer;
