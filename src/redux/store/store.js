import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "../Teams/teams.js";

export default configureStore({
  reducer: {
    teams: teamsReducer,
  },
});
