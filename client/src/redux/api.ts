import { createAsyncThunk } from "@reduxjs/toolkit";

import { FormValues } from "../types";

import axios from "axios";

export const postStreamer = createAsyncThunk(
  "postStreamer",
  async (data: FormValues, thunkApi) => {
    const URL = `http://localhost:5000/streamers`;
    try {
      const response = await axios.post(URL, data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getStreamers = createAsyncThunk(
  "getStreamers",
  async (url: string, thunkApi) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const voteAStreamer = createAsyncThunk(
  "voteAStreamer",
  async (url: string, thunkApi) => {
    try {
      const response = await axios.put(url);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
