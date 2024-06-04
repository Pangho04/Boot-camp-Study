import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../store/initialState";

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    toggleView: (state) => {
      if (state.viewMode === "daily") {
        state.viewMode = "weekly";
      } else if (state.viewMode === "weekly") {
        state.viewMode = "daily";
      }
    },
    changeDate: (state, action) => {
      state.currentDate = action.date;
    },
    backToday: (state) => {
      state.currentDate = new Date();
    },
    nextDate: (state) => {
      const today = new Date(state.currentDate);
      const nextDay = today.setDate(state.viewMode === "daily" ? today.getDate() + 1 : today.getDate() + 7);

      state.currentDate = new Date(nextDay);
    },
    prevDate: (state) => {
      const today = new Date(state.currentDate);
      const prevDay = today.setDate(state.viewMode === "daily" ? today.getDate() - 1 : today.getDate() - 7);

      state.currentDate = new Date(prevDay);
    },
  },
});

export const { toggleView, changeDate, backToday, nextDate, prevDate } = calendarSlice.actions;

export default calendarSlice.reducer;
