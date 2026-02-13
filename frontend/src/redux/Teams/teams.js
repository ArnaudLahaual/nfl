import { createSlice } from "@reduxjs/toolkit";
// import { teams as teamsData } from "../../data/team";

const initialState = {
  teamsList: [],
  search: "",
  searchValue: "",
  conferenceFilter: null,
  divisionFilter: null,
};

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    setTeamsList(state, action) {
      state.teamsList = action.payload;
    },
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
  setTeamsList,
  setSearch,
  setSearchValue,
  setConferenceFilter,
  setDivisionFilter,
} = teamsSlice.actions;
export default teamsSlice.reducer;
