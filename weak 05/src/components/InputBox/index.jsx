import { useState } from 'react';

function UserInput({name, userData, onUserIdChange}) {

  return <input name={name} value={userData[name]} onChange={onUserIdChange}></input>

}

function InputBox({onSubmit}) {
  const [userIdData, setUserIdData] = useState({
    user1: "",
    user2: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(Object.values(userIdData));
  }

  function handleUserIdChange(e) {
    const {name, value} = e.target;
    setUserIdData((prevData) => ({
      ...prevData,
    [name]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <UserInput userData={userIdData} name="user1" onUserIdChange={handleUserIdChange}/>
      <UserInput userData={userIdData} name="user2" onUserIdChange={handleUserIdChange}/>
      <button>제출</button>
    </form>
  )
}

export default InputBox;
