import { noop } from "lodash";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Row({ onClick = noop, timeTable, fulldate }) {
  const events = useSelector((state) => state.events);
  const hours = new Intl.DateTimeFormat("ko-KR", { hour: "numeric", hour12: false }).format(timeTable);
  const thisYear = fulldate.getFullYear();
  const thisMonth = fulldate.getMonth() + 1;
  const thisDate = String(fulldate.getDate());
  const eventTime = hours.replace("시", "");
  const thisFullDate = `${thisYear}-${(
    String(thisMonth)).length < 2
    ? `0${thisMonth}`
    : thisMonth}-${thisDate.length < 2 ? `0${thisDate}` : thisDate}`;
  let eventHour = 0;

  if (events[thisFullDate]) {
    const currentEvents = events[thisFullDate].byStart;
    const clickedStartAt = Object.keys(currentEvents).filter((startHour) => Number(startHour) <= Number(eventTime)).map(Number);
    const belongedEventHour = Math.max(...clickedStartAt);
    eventHour = belongedEventHour;
  }

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  function hasEvent() {
    for (let schedule in events) {

      if (schedule === thisFullDate) {
        const booked = 1;
        if (events[schedule].timeTable[Number(eventTime)] === booked) {
          return true;
        }
      }
    }
    return false;
  }

  return (
    <Link className="h-[100%] w-[100%]"
      onClick={scrollTop}
      state={{ eventTime: eventHour, eventDate: thisFullDate }}
      to={
        hasEvent() ?
          `events/${thisFullDate} ${eventHour.length < 2 ? `0${eventHour}` : eventHour}` :
          "events/new"
      }
    >
      <div onClick={onClick}
        className={`
        h-16
        max-w-[100%]
        overflow-clip
        text-lg
        text-center
        border
        border-dotted
        border-slate-600
        ${hasEvent() ? "bg-red-400 hover:bg-red-200" : "hover:bg-slate-300"}
        `}
      >
        {events[thisFullDate]?.byStart[eventTime]?.title}
      </div>
    </Link>
  );
}

export default Row;
