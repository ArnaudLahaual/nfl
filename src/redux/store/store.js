import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "../Teams/teams.js";
import conferencesReducer from "../Conferences/confs.js";
import playersReducer from "../Players/players.js";

export default configureStore({
  reducer: {
    teams: teamsReducer,
    conferences: conferencesReducer,
    players: playersReducer,
  },
});
