import { createSlice } from "@reduxjs/toolkit";
import { teams as teamsData } from "../../data/team";

const initialState = {
  teamsList: teamsData,
  search: "",
  searchValue: "",
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
  },
});

export const { setSearch, setSearchValue } = teamsSlice.actions;
export default teamsSlice.reducer;
