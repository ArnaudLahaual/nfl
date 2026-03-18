import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const logSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = logSlice.actions;
export default logSlice.reducer;
