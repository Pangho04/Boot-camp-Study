import Daily from "../Daily";

function Weekly({ currentWeek }) {
  return (
    <div className="flex items-start justify-center w-full">
      {currentWeek.map((date, index) =>
        <Daily key={date} eachDate={date.getDate()} fulldate={date} />
      )}
    </div>
  );
}

export default Weekly;
