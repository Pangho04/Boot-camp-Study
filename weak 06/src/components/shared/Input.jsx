import styled from "styled-components";

export default styled.input`
  color: #ffffff;
  background-color: #121212;
  padding: 10px 15px;
  border: 1px solid #303030;
  height: 24px;
  min-width: 200px;
  width: calc(100% - 32px);
  border-radius: 10px;
  font-size: 16px;
  letter-spacing: -0.5px;
  transition: 0.3s all ease;

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #414141;
  }
`;
