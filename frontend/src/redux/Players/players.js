import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playersList: [],
  searchValue: "",
  selectedTeamById: null,
  positions: ["offense", "defense", "special_teams"],
  postes: [
    // Offense
    "Quarterback",
    "Running Back",
    "Fullback",
    "Wide Receiver",
    "Tight End",
    "Left Tackle",
    "Right Tackle",
    "Left Guard",
    "Right Guard",
    "Center",

    // Defense
    "Defensive End",
    "Defensive Tackle",
    "Nose Tackle",
    "Outside Linebacker",
    "Middle Linebacker",
    "Linebacker",
    "Cornerback",
    "Safety",
    "Free Safety",
    "Strong Safety",

    // Special Teams
    "Kicker",
    "Punter",
    "Long Snapper",
    "Kick Returner",
    "Punt Returner",
  ],
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
    setPositions(state, action) {
      state.positions = action.payload;
    },
    setPostes(state, action) {
      state.postes = action.payload;
    },
  },
});

export const {
  setPlayersList,
  setSearchValue,
  setSelectedTeamById,
  setPositions,
  setPostes,
} = teamsSlice.actions;
export default teamsSlice.reducer;
