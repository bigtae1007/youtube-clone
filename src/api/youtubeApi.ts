import axios from "axios";

// axios 기본 주소 & header 타입 세팅
export const Axios = axios.create({
  baseURL: process.env.REACT_APP_YOUTUBE_BASE_URL,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

export const YouTubeAPI = {
  getVideoList: (query: string) => Axios.get(`video${query || ""}`),
};

// 매 실행 시 토큰값 넣기, 없으면 null값이 들어간다
// api.interceptors.request.use(function (config) {
//   const accessToken = getCookie("token");
//   config.headers.common["Authorization"] = `${accessToken}`;
//   return config;
// });
