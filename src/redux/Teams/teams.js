import { createSlice } from "@reduxjs/toolkit";
import { teams as teamsData } from "../../data/team";

const initialState = {
  teamsList: teamsData,
  search: "",
};

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = teamsSlice.actions;
export default teamsSlice.reducer;
