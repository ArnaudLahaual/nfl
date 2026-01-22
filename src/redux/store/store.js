import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "../Teams/teams.js";
import conferencesReducer from "../Conferences/confs.js";

export default configureStore({
  reducer: {
    teams: teamsReducer,
    conferences: conferencesReducer,
  },
});
