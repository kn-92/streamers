import { createSlice } from "@reduxjs/toolkit";

//type
import { State } from "./types";

//api
import { postStreamer } from "./api";

const initialState: State = {
  loading: false,
  error: [],
};

export const streamersSlice = createSlice({
  name: "streamers",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postStreamer.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(postStreamer.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(postStreamer.rejected, (state, action) => {
        state.loading = false;
        state.error.push(action.payload as never);
      });
  },
});

export default streamersSlice.reducer;
