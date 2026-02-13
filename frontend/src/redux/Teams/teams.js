import { createSlice } from "@reduxjs/toolkit";
import { teams as teamsData } from "../../data/team";

const initialState = {
  teamsList: teamsData,
  search: "",
  searchValue: "",
  conferenceFilter: null,
  divisionFilter: null,
};

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setConferenceFilter(state, action) {
      state.conferenceFilter = action.payload;
    },
    setDivisionFilter(state, action) {
      state.divisionFilter = action.payload;
    },
  },
});

export const {
  setSearch,
  setSearchValue,
  setConferenceFilter,
  setDivisionFilter,
} = teamsSlice.actions;
export default teamsSlice.reducer;
