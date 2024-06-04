import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const EntryWrapper = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;

  img {
    width: 100%;
    height:99%;
    object-fit: cover;
    aspect-ratio: 16 / 9;
    border-radius: 10px;
  }

  .contents {
    font-size: 12px;
    flex-grow: 1;

    h1 {
      margin: 0;
      font-size: 16px;
      color: #f1f1f1;
    }

    h2 {
      margin: 5% 0 0 0;
      font-size: 12px;
      color: #aaaaaa;
    }

    p {
      margin: 2% 0;
      color: #aaaaaa;
    }
  }
`;

export default function VideoListEntry({ id, snippet }) {
  const summarizeDescription = snippet.description.slice(0, 30) + "...";
  const uploadDate = snippet.publishedAt.slice(0, 10);

  return (
    <EntryWrapper
      to={`/${id}`}
      data-test={`video-item-${id}`}
      onClick={()=> document.body.style.overflow = "hidden"}
    >
      <div>
        <img
          data-test={"video-thumbnail"}
          src={snippet.thumbnails.high.url}
          alt="thumbnails"
          draggable="false"
        />
      </div>
      <div className="contents">
        <h1 data-test={"video-title"}>{snippet.title}</h1>
        <h2>{snippet.channelTitle}</h2>
        <p data-test={"video-published-at"}>{uploadDate}</p>
        <p className="description" data-test={"video-description"}>{summarizeDescription}</p>
      </div>
    </EntryWrapper>
  );
}

VideoListEntry.propTypes = {
  id: PropTypes.string.isRequired,
  snippet: PropTypes.object.isRequired,
};
