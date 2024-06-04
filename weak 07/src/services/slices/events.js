import { createSlice, current } from "@reduxjs/toolkit";
import initialState from "../../store/schedules";

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      if (!isItExist(state)) {
        action.payload.timeTable = Array(24).fill(0);

        for (let i = Number(action.payload.startTime); i < Number(action.payload.items.endTime); i++) {
          action.payload.timeTable[i] = 1;
        }

        state[action.payload.date] = {
          byStart: {
            [action.payload.startTime]: action.payload.items,
          },
          timeTable: action.payload.timeTable,
        }
      }

      function isItExist(savedEvent) {
        for (let event in savedEvent) {

          if (event === action.payload.date) {
            state[event].byStart = {
              ...state[action.payload.date].byStart,
              [action.payload.startTime]: action.payload.items,
            };

            for (let i = Number(action.payload.startTime); i < Number(action.payload.items.endTime); i++) {
              state[event].timeTable[i] = 1;
            }
            return true;
          }
        }
        return false;
      }

    },
    removeEvent: (state, action) => {
      const [eventDate, startAt, endAt] = [...action.payload];

      for (let i = Number(startAt); i < Number(endAt); i++) {
        state[eventDate].timeTable[i] = 0;
      }

      delete state[eventDate].byStart[startAt];
    },
  },
})

export const { addEvent, removeEvent } = eventSlice.actions;

export default eventSlice.reducer;
