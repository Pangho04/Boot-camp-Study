import React from "react";
import { Link, useParams } from "react-router-dom";
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
  background-color: #0f0f0f;
  width: 35%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  z-index: 2;

  .player {
    width: 99%;
    aspect-ratio: 16 / 9;
    margin: 5px auto;
    border-radius: 15px;
  }

  h1 {
    font-size: 1.3rem;
    text-align: left;
    align-self: flex-start;
    margin: 0.3rem 1.5rem;
    color: #f1f1f1;
  }

  h2 {
    font-size: 0.9rem;
    text-align: left;
    margin: 0.3rem 1.5rem;
    color: #aaaaaa;
  }

  h5 {
    font-size: 0.9rem;
    text-align: left;
    margin: 2rem 1.5rem;
    margin-top: 0;
    color: #dbdbdb;
    background-color: #272727;
    padding: 10px;
    border-radius: 10px;
  }

  p {
    text-align: left;
    margin: 0.3rem 1.5rem;
    color: #aaaaaa;
  }

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

export default function VideoDetail({ randomVideos }) {
  const { videoId } = useParams();

  const filtering = randomVideos.filter(
    (video) => video.id.videoId === videoId || video.id === videoId
  )[0];

  function handleClick() {
    document.body.style.overflow = "visible";
  }

  return (
    <>
      <Link to="/" onClick={handleClick}>
        <Shadow />
      </Link>
      <Div data-test={"video-modal"}>
        {[filtering].map(({ id, snippet }, index) => (
          <div key={id.videoId ? id.videoId + index : id + index}>
            <Link to="/" onClick={handleClick}>
              <button data-test={"btn-modal-close"}>X</button>
            </Link>
            <div>
              <iframe
                className="player"
                type="text/html"
                src={`http://www.youtube.com/embed/${
                  id.videoId ? id.videoId : id
                }?enablejsapi=1&origin=http://example.com`}
              />
            </div>
            <h1>{snippet.title}</h1>
            <div>
              <h2>{snippet.channelTitle}</h2>
              <p>{snippet.publishedAt.slice(0, 10)}</p>
            </div>
            <h5>{snippet.description.length > 300 ? snippet.description.slice(0, 300) + "..." : snippet.description}</h5>
          </div>
        ))}
      </Div>
    </>
  );
}

VideoDetail.propTypes = {
  randomVideos: PropTypes.array.isRequired,
};
