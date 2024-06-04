import PropTypes from "prop-types";
import styled from "styled-components";

const Shadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  cursor: default;
`;

const Div = styled.div`
  position: fixed;
  text-align: center;
  line-height: 2.3;
  background-color: #0f0f0f;
  width: 40%;
  height: 20%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  z-index: 2;
  color: #ffffff;
  font-size: 16px;

  button {
    float: right;
    margin: 1% 1.5% 0 0;
    background-color: #303030;
    border: none;
  }

  button:hover {
    background-color: #b9b4c6;
  }
`;

export default function Error({ setShowError }) {
  function handleError () {
    setShowError(false);
  }

  return (
    <>
      <Shadow onClick={handleError} />
      <Div data-test={"error-message-modal"}>
        <button onClick={handleError}>X</button>
        <h1>검색어를 입력해주세요</h1>
      </Div>
    </>
  );
}

Error.propTypes = {
  setShowError: PropTypes.func.isRequired,
}
