import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Daily from "./Daily";
import Weekly from "./Weekly";
import Hours from "./Hours";

function Calendar() {
  const viewMode = useSelector((state) => state.calendar.viewMode);
  const calendarCurrentDate = new Date(useSelector((state) => state.calendar.currentDate));
  const thisWeek = getWeekDays(calendarCurrentDate);

  function getWeekDays(today) {
    const weekDays = [new Date(today)];
    let currentDay = new Date(today);

    if (today.getDay() <= 6) {
      while (weekDays.length < 7 - today.getDay()) {
        weekDays.push(new Date(currentDay.setDate(currentDay.getDate() + 1)));
      }

      currentDay = new Date(today);

      while (weekDays.length < 7) {
        weekDays.push(new Date(currentDay.setDate(currentDay.getDate() - 1)));
      }
    }

    weekDays.sort((a, b) => a - b);

    return weekDays;
  }

  return (
    <>
      <Hours />
      {viewMode === "daily" ? <Daily /> : <Weekly currentWeek={thisWeek} />}
      <Outlet />
    </>
  );
}

export default Calendar;
