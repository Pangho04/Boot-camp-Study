import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { addEvent, removeEvent } from "../../services/slices/events";

function EventDetail() {
  const dispatch = useDispatch();
  const { event_Id: eventId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const existEvents = useSelector((state) => state.events);
  const eventDate = eventId?.split(" ")[0];
  const eventTime = location.state ? location.state.eventTime : eventId?.split(" ")[1];

  let eventTitle = "";
  let prevStartTime = 0;
  let prevEndTime = 0;
  let eventBody = "";

  if (eventDate !== "new") {

    for (const event in existEvents) {
      const targetEvent = existEvents[event].byStart[eventTime];

      if (event === eventDate) {
        const { endTime, title, description } = targetEvent;

        prevStartTime = eventTime;
        prevEndTime = endTime;
        eventTitle = title;
        eventBody = description;
      }
    }
  }

  function modifyEvent(e) {
    e.preventDefault();

    const newEventDate = document.forms.setEvent.newEventDate.value;
    const newEventTitle = document.forms.setEvent.eventTitle.value;
    const newStartTime = Number(document.forms.setEvent.startTime.value);
    const newEndTime = Number(document.forms.setEvent.endTime.value);
    const newEventBody = document.forms.setEvent.description.value;

    const newEvent = {
      date: newEventDate,
      startTime: newStartTime,
      items: {
        endTime: newEndTime,
        title: newEventTitle,
        description: newEventBody,
      }
    };

    if (!isValid(newEventTitle, newEventDate, newStartTime, newEndTime)) {
      return;
    }

    eventDate ? cancelEvent() : null;
    dispatch(addEvent(newEvent));
    navigate(-1);
  }

  function isValid(newEventTitle, newEventDate, newStartTime, newEndTime) {
    if (newEventTitle.trim().length <= 0) {
      alert("유효하지 않은 입력값입니다.\n제목과 일자를 확인해주세요.");
      return false;
    }

    if (new Date(newEndTime) < new Date(newStartTime)) {
      alert("종료 시간을 시작 시간보다 뒤로 설정해 주세요");
      return false;
    }

    for (let date in existEvents) {
      if (date === newEventDate) {
        const schedule = existEvents[date].timeTable;
        const isNewScheduleConflict = schedule.slice(newStartTime, newEndTime).includes(1);
        const isExistScheduleConflict = schedule.slice(newStartTime, newEndTime).includes(1) ||
          schedule.slice(newStartTime, prevStartTime).includes(1) ||
          schedule.slice(prevEndTime, newEndTime).includes(1);

        if (eventDate ? isExistScheduleConflict : isNewScheduleConflict) {
          alert("이미 일정이 존재합니다. 다른 시간대를 선택해주세요");

          return false;
        }
      }
    }
    return true;
  }

  function cancelEvent() {
    dispatch(removeEvent([eventDate, prevStartTime, prevEndTime]));
    navigate(-1);
  }

  function SubmitButtons() {

    return (
      eventDate ?
      <div>
        <button type="button" className="w-20 h-16 mr-10 bg-red-400 rounded-xl" onClick={cancelEvent}>삭제</button>
        <button type="button" className="w-20 h-16 ml-10 bg-teal-600 rounded-xl" onClick={modifyEvent}>수정</button>
      </div> :
      <button type="submit" className="w-24 h-20 bg-teal-600 rounded-xl" onClick={modifyEvent}>저장</button>
    );
  }

  return (
    <>
      <div onClick={() => navigate(-1)} className="fixed w-full h-full bg-slate-600 opacity-70" />
      <form onSubmit={modifyEvent} name="setEvent" autoComplete="off" className="h-[55rem] bg-[#E0FBE2] rounded-2xl mt-[10rem] w-2/5  m-auto text-center absolute left-0 right-0 text-xl">
        <div className="mr-5 text-3xl text-right">
          <button type="button" onClick={() => navigate(-1)} >X</button>
        </div>
        <div>
          <input type="text" name="eventTitle" defaultValue={eventTitle || ""} placeholder="제목" className="block mx-auto mt-5 border" />
        </div>
        <div className="h-[40rem]">
          <input type="date" name="newEventDate" defaultValue={eventDate || ""} />
          <select name="startTime" defaultValue={prevStartTime || ""} className="inline ml-3">
            {Array.from(Array(24).keys()).map((hour, index) => (
              <option key={index} value={hour}>{hour.length < 2 ? `0${hour}시` : `${hour}시`}</option>
            ))}
          </select>
          <p className="inline-block my-2">부터</p>
          <select name="endTime" defaultValue={prevEndTime || ""} className="inline ml-3" >
            {Array.from(Array(24).keys()).map((hour, index) => (
              <option key={index} value={hour + 1}>{hour.length < 2 ? `0${hour + 1}시` : `${hour + 1}시`}</option>
            ))}
          </select>
          <p className="inline-block">까지</p>
          <textarea type="text" name="description" defaultValue={eventBody || ""} placeholder="내용" className="border w-[70%] h-[70%] block mx-auto my-[10%]" />
        </div>
        <SubmitButtons />
      </form>
    </>
  );
}

export default EventDetail;
