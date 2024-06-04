import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import VideoListEntry from "../VideoListEntry";
import { getRandomVideos, getSearchVideos } from "../../utils/youtube.js";
import VideoDetail from "../VideoDetail";

const Home = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;

  .border{
    align-self: center;
    width: 1px;
    z-index: 2;
    opacity: 0%;
  }
`;

const Videos = styled.div`
  display: grid;
  padding: 2em 0 0;
  width: 100%;
  aspect-ratio: 16 / 9;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  column-gap: 20px;
  row-gap: 50px;
`;

export function VideoList({ randomVideos, setRandomVideos, searchValue, setSearchValue }) {
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState(" ");

  const targetRef = useRef();
  const scroller = useRef();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");

  const scrollOptions = {
    root: null,
    rootMargin: "30px",
    threshold: 0.1,
  };

  if (query && !searchValue) {
    setSearchValue(query);
    window.scrollTo(0, 0);
  }

  async function updateVideos () {
    setIsLoading(true);

    if (searchValue) {
      const data = await getSearchVideos(nextPage, searchValue);

      setRandomVideos((prev) => [...prev, ...data.items]);
      setNextPage(data.nextPageToken);
    } else {
      const data = await getRandomVideos(nextPage);

      setRandomVideos((prev) => [...prev, ...data.items]);
      setNextPage(data.nextPageToken);
    }

    setIsLoading(false);
  };

  function handleObserver (entries, observer) {
    if (entries[0].isIntersecting && !isLoading) {
      observer.unobserve(targetRef.current);

      setTimeout(() => {
        updateVideos();
      }, 600);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, scrollOptions);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef.current, handleObserver]);

  return (
    <Home ref={scroller}>
      <Videos data-test={"video-list"}>
        {randomVideos.map(({ id, snippet }, index) => (
        <VideoListEntry
          key={id.videoId ? id.videoId + index : id + index}
          id={id.videoId ? id.videoId : id}
          snippet={snippet}
        />
        ))}
      </Videos>
      <Routes>
        <Route
          path=":videoId"
          element={<VideoDetail randomVideos={randomVideos} />}
        />
      </Routes>
      <hr className="border" ref={targetRef} />
    </Home>
  );
}

VideoList.propTypes = {
  randomVideos: PropTypes.array.isRequired,
  setRandomVideos: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func.isRequired,
};

export default React.memo(VideoList);
