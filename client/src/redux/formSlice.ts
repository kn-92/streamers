import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { State } from "../types";

import { postStreamer, getStreamers } from "./api";

const initialState: State = {
  loading: false,
  error: [],
  data: [],
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
        state.data.streamers.push(action.payload.streamer);
      })
      .addCase(postStreamer.rejected, (state, action) => {
        state.loading = false;
        state.error.push(action.payload as never);
      })
      .addCase(getStreamers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getStreamers.fulfilled, (state, action: any) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getStreamers.rejected, (state, action) => {
        state.loading = false;
        state.error.push(action.payload as never);
      });
  },
});

export default streamersSlice.reducer;
