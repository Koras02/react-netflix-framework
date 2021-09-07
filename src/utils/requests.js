import axios from "axios";
import values from "./values";


// apiConfig 를 기본설정 변수로 선언해서 json type으로 반응하게 Type을 잡아준다.

const apiConfig = {
    baseURL:"http://api.themoviedb.org/3",
    responseType: "json",
}


const omdbApiConfig = {
    baseURL: "http://www.omdbapi.com",
    responseType: "json",
}


const API_KEY = values.api_key;

// API라는 변수를 생성
const API = axios.create(apiConfig);
const omdbApi = axios.create(omdbApiConfig);

// TV 영화 장르별 api 모은 requests 주소
const requestUrls = {
    weeklytrendingMovies: `/trending/movie/week?api_key=${API_KEY}&language=ko-KR&page=1`,
    weeklytrendingShows: `/trending/tv/week?api_key=${API_KEY}&lnaguage=ko-KR&page=1`,
    topRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`,
    popularMovies: `/movie/popular?api_key=${API_KEY}&lnaguage=ko-KR&page=1`,
    topRatedShows: `/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`,
    seasonInfo: `tv/<TV_ID>/season/<SEASON_NUMBER>?api_key=${API_KEY}`,
    watchProviders: `<type>/<TV_ID>/watch/providers?api_key=${API_KEY}`,
};

const requests = {
    api : API,
    urls: requestUrls,
    omdbApi,
}

export default requests;