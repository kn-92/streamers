import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { PayloadActionDataStreamer, State, StreamerData } from "../types";

import { postStreamer, getStreamers, voteAStreamer } from "./api";

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
      .addCase(getStreamers.fulfilled, (state, action: PayloadAction) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getStreamers.rejected, (state, action) => {
        state.loading = false;
        state.error.push(action.payload as never);
      })
      .addCase(voteAStreamer.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        voteAStreamer.fulfilled,
        (state, action: PayloadAction<PayloadActionDataStreamer>) => {
          state.loading = false;
          const index = state.data.streamers.findIndex(
            (streamer: StreamerData) =>
              streamer._id === action.payload.streamer._id
          );
          state.data.streamers[index] = action.payload.streamer;
        }
      )
      .addCase(voteAStreamer.rejected, (state, action) => {
        state.loading = false;
        state.error.push(action.payload as never);
      });
  },
});

export default streamersSlice.reducer;
