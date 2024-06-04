import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import logo from "../../assets/vaco.png";
import SearchInput from "../SearchInput";
import Container from "../shared/Container";
import Heading from "../shared/Heading";
import updateVideos from "../VideoList";

const Header = styled.header`
  position: fixed;
  border-bottom: solid;
  background-color: #0f0f0f;
  border-color: #0f0f0f;
  width: 100%;
  top: 0;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);

  section {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 0;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  .brand {
    display: flex;
    align-items: center;

    h1 {
      padding: 2px 5px;
      margin-left: 10px;
      text-transform: uppercase;
      background-color: #7b717142;
      border-radius: 5px;
      font-style: italic;
    }
  }

  img {
    height: 30px;
    background-color: #ffffff;
    border-radius: 8px;
  }

  .input-container {
    width: 300px;
  }
`;

export default function AppHeader({ setSearchValue, setRandomVideos, setShowError }) {
  return (
    <Header>
      <Container>
        <section>
          <Link onClick={updateVideos}>
            <div className="brand">
              <img src={logo} alt="logo" />
              <Heading>Youtube Viewer</Heading>
            </div>
          </Link>
          <div className="input-container">
            <SearchInput
              placeholder="Youtube 검색"
              setSearchValue={setSearchValue}
              setRandomVideos={setRandomVideos}
              setShowError={setShowError}
            />
          </div>
        </section>
      </Container>
    </Header>
  );
}

AppHeader.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
  setRandomVideos: PropTypes.func.isRequired,
  setShowError: PropTypes.func.isRequired,
};
