import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import VideoList from "../VideoList";
import AppHeader from "../AppHeader";
import Container from "../shared/Container";
import VideoDetail from "../VideoDetail";
import Error from "../Error";

const Main = styled.main`
  margin-top: 110px;
  background-color: #0f0f0f;
`;

export default function App() {
  const [randomVideos, setRandomVideos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showError, setShowError] = useState(false);

  return (
    <>
      <AppHeader
        setSearchValue={setSearchValue}
        setRandomVideos={setRandomVideos}
        setShowError={setShowError}
      />
      <Main>
        <Container>
          {showError && <Error setShowError={setShowError} />}
          <Routes>
            <Route
              path="/"
              element={
                <VideoList
                  randomVideos={randomVideos}
                  setRandomVideos={setRandomVideos}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              }
            >
              <Route
                path=":videoId"
                element={<VideoDetail randomVideos={randomVideos} />}
              />
            </Route>
          </Routes>
        </Container>
      </Main>
    </>
  );
}
