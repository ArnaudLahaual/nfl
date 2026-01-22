import { createSlice } from "@reduxjs/toolkit";
import { conferences as conferencesData } from "../../data/conferences";

const initialState = {
  conferencesList: conferencesData,
};

const conferencesSlice = createSlice({
  name: "conferences",
  initialState,
  reducers: {
    setConferenceList(state, action) {
      state.conferencesList = action.payload;
    },
  },
});

export const { setConferenceList } = conferencesSlice.actions;
export default conferencesSlice.reducer;
