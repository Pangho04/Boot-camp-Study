import { useState } from 'react';
import './styles.css';

function UserInput({
  name,
  userData,
  onUserIdChange
}) {
  return (
    <input
      placeholder="아이디를 입력하세요!"
      name={name}
      value={userData[name]}
      onChange={onUserIdChange}
    />
  );
}

export default function InputBox({ onSubmit, isDisabled }) {
  const [userIdData, setUserIdData] = useState({
    user1: "",
    user2: ""
  });

  function handleSubmit(e) {
    const isValidID = userIdData.user1.trim().length === 0 && userIdData.user2.trim().length === 0;

    e.preventDefault();
    if (isValidID) {
      alert("유효한 아이디가 아닙니다!!!!!!!!!");
      return;
    }
    onSubmit(Object.values(userIdData));
  }

  function handleUserIdChange(e) {
    const {name, value} = e.target;
    setUserIdData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <form
      className="user-ID-Inputboxes"
      onSubmit={handleSubmit}
    >
      <div className="Input-boxes">
        <UserInput
          userData={userIdData}
          name="user1"
          onUserIdChange={handleUserIdChange}
        />
        <UserInput
          userData={userIdData}
          name="user2"
          onUserIdChange={handleUserIdChange}
        />
      </div>
      <button
        className="ID-Submit-button"
        disabled={isDisabled}
      >
        제출
      </button>
    </form>
  );
}
