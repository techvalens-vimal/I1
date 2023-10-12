import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTimezone = createAsyncThunk("getCountries", async () => {
  const response = await fetch("https://worldtimeapi.org/api/timezone");
  const data = await response.json();
  return data;
});

export const getClock = createAsyncThunk("getCLock", async (data) => {
  const response = await fetch(`https://worldtimeapi.org/api/timezone/${data}`);
  const clock = await response.json();
  return clock;
});

const timezoneSlice = createSlice({
  name: "timezone",
  initialState: {
    timeZones: [],
    currentTime: [],
    userTime: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getTimezone.fulfilled, (state, action) => {
      return { ...state, timeZones: [...action.payload] };
    });

    builder.addCase(getClock.fulfilled, (state, action) => {
      return {
        ...state,
        currentTime: action.payload.datetime
          .split("T")[1]
          .split(".")[0]
          .split(":"),
      };
    });
  },
});

export default timezoneSlice.reducer;
