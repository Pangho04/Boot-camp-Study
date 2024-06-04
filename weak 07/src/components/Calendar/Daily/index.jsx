import { useSelector } from "react-redux";
import Row from "../Row";

function Daily({ eachDate, fulldate }) {
  const calendarCurrentDate = new Date(useSelector((state) => state.calendar.currentDate));
  const calendarViewMode = useSelector((state) => state.calendar.viewMode);
  const indicatedDay = fulldate ? fulldate.toLocaleString("ko-KR") : calendarCurrentDate.toLocaleString("ko-KR");
  const currentNow = new Date().toLocaleString("ko-KR").slice(0, new Date().toLocaleString("ko-KR").indexOf("오"));
  const dayOfWeek = getDayOfWeek(fulldate) || getDayOfWeek(calendarCurrentDate);
  const dateOfWeek = indicatedDay.slice(indicatedDay.indexOf("오") - 4, indicatedDay.indexOf("오") - 2).trim();
  const toggleTimes = calendarViewMode === "daily" ? calendarCurrentDate : new Date(calendarCurrentDate.setDate(eachDate));
  const timeTable = getTimeTable();

  function getTimeTable() {
    const timeZone = [];

    for (let hour of Array.from(Array(24).keys())) {
      timeZone.push(new Date(toggleTimes.setHours(hour)));
    }

    return timeZone;
  }

  function getDayOfWeek(currentDate) {
    return new Intl.DateTimeFormat("ko-KR", { weekday: "short" }).format(eachDate ? new Date(currentDate).setDate(eachDate) : currentDate);
  }

  return (
    <div className="grow basis-4" data-test="ui-daily">
      <div
        className={`
          fixed
          ${calendarViewMode === "weekly" ? "w-[13%]" : "w-[90%]"}
          whitespace-nowrap
          border
          border-slate-600
          ${(indicatedDay.slice(0, indicatedDay.indexOf("오"))) === currentNow ? "bg-green-300" : "bg-white"}
          text-center
        `}
        data-test={String(eachDate) === dateOfWeek ? "ui-today" : null}
      >
        {eachDate ? String(eachDate) : dateOfWeek}{`(${dayOfWeek})`}
      </div>
      <div className="flex flex-col pt-6" data-test="ui-date">
        {timeTable.map((hour, index) => (
          <Row
            key={hour}
            timeTable={hour}
            fulldate={fulldate ? fulldate : calendarCurrentDate}
            data-test={"ui-hour"}
          />
        ))}
      </div>
    </div>
  );
}

export default Daily;
