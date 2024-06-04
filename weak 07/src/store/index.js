import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import initialState from "./initialState";
import calendarReducer from "../services/slices/calendar";
import eventReducer from "../services/slices/events";

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    events: eventReducer,
  },
  initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
