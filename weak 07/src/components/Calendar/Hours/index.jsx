function Hours() {
  return (
    <div className="w-[8%] justify-center items-center">
      <div className="
        fixed
        w-[8%]
        border
        border-slate-600
        bg-white
        text-center">Time</div>
      <div className="pt-6">
      {Array.from(Array(24).keys()).map((hour, index) => (
        <div key={index}
          className="h-16 text-center whitespace-pre-wrap border border-slate-600"
            data-test={"ui-hour"}
        >{`${hour}:00\n\n`}</div>
      ))}
      </div>
    </div>
  );
}

export default Hours;
