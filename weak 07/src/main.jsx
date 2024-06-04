import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import App from "./components/App";
import "./index.css";
import Calendar from "./components/Calendar/Calendar";
import EventDetail from "./components/EventDetail";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Calendar",
        element: <Calendar />,
        children: [
          {
            path: "events/:event_Id",
            element: <EventDetail />,
          },
          {
            path: "events/new",
            element: <EventDetail />,
          },
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
