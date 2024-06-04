import { useSelector, useDispatch } from "react-redux";
import { toggleView, backToday, nextDate, prevDate } from "../../services/slices/calendar";

function Header() {
  const dispatch = useDispatch();
  const calendarViewMode = useSelector((state) => state.calendar.viewMode);
  const currentDate = new Date(useSelector((state) => state.calendar.currentDate)).toLocaleDateString("ko-KR");
  const handleToggleView = () => {
    dispatch(toggleView());
    dispatch(backToday());
  };
  const handlePrevDate = () => dispatch(prevDate());
  const handleNextDate = () => dispatch(nextDate());

  return (
    <header className="sticky top-0 w-full m-t-0 py-[15px] bg-white border-b-2">
      <nav>
        <ul>
          <li>
            <button
              className="text-xl ml-4 p-[10px] font-bold border border-gray-300	rounded hover:bg-slate-200 uppercase"
              onClick={handleToggleView}
            >
              {calendarViewMode}
            </button>
            <button
              className="mx-3 text-xl"
              onClick={handlePrevDate}
              data-test={"btn-prev"}
            >⬅️</button>
            <span className="text-3xl">{currentDate.slice(0, 8)}</span>
            <button
              className="mx-3 text-xl"
              onClick={handleNextDate}
              data-test={"btn-next"}
            >➡️</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
