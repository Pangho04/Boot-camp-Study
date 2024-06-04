const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export async function getRandomVideos(Token) {
  const baseUrl = "https://www.googleapis.com/youtube/v3/videos";
  const params = {
    part: "snippet",
    key: YOUTUBE_API_KEY,
    type: "video",
    maxResults: 10,
    chart: "mostPopular",
    regionCode: "kr",
    videoEmbeddable : true,
    pageToken: Token,
  };
  const queryString = new URLSearchParams(params).toString();
  const requestUrl = `${baseUrl}?${queryString}`;

  try {
    const response = await fetch(requestUrl);
      console.log("response:",response)
    const videos = await response.json();
    console.log("videos:",videos)
    if(!videos.error) {
      return videos;
    } else {
      throw new Error(videos.error.message);
    }
  } catch (e) {
    console.log(e, "에러가 발생했습니다.");
  }
}

export async function getSearchVideos(Token, searchKeyword) {
  const baseUrl = "https://www.googleapis.com/youtube/v3/search";
  const params = {
    part: "snippet",
    key: YOUTUBE_API_KEY,
    type: "video",
    maxResults: 10,
    regionCode: "kr",
    pageToken: Token,
    videoEmbeddable : true,
    q: searchKeyword,
  };
  const queryString = new URLSearchParams(params).toString();
  const requestUrl = `${baseUrl}?${queryString}`;

  try {
    const response = await fetch(requestUrl);
    const searchVideos = await response.json();

    if(!searchVideos.error) {
      return searchVideos;
    } else {
      throw new Error(searchVideos.error.message);
    }
  } catch (e) {
    console.log(e, "에러가 발생했습니다.");
  }
}
