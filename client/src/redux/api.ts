import { createAsyncThunk } from "@reduxjs/toolkit";

//type
import { PayloadData } from "./types";

import axios from "axios";

export const postStreamer = createAsyncThunk(
  "postStreamer",
  async (data: any, thunkApi) => {
    const URL = `https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/`;
    try {
      const response = await axios.post(URL, data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
