 
// ======================== API 이미지 주소 모음 ============================//
export const API_KEY = process.env.REACT_APP_API_KEY;
// 이미지 BASE주소 
export const BASE_URL = "https://image.tmdb.org/t/p/original";
// 언어 기본 설정
export const Language = "ko-KR"

// 검색 국가
export const Ko = "ko"
// ======================== API 이미지 주소 모음 ============================//


// TV 영화 장르별 api 모은 requests 주소
export const requests = {

    // TV 에대한 Request 

    // 현재 인기 영화  == 매일 기준
    fetchTrendingTV: `/trending/tv/week?api_key=${API_KEY}&language=${Language}`,
    // 넷플릭스 오리지널용 == tv
    fetchNetflixOriginalTv: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=${Language}`,
    // 인기 드라마 TV 장르
    fetchPopularTV: `/tv/popular?api_key=${API_KEY}&language=${Language}`,
    // 최고 평점
    fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=${Language}`,
    
    // 영화
    // trending 인기 
    // 트렌딩 인기 영화 규칙 주 간격 
    fetchTrendingMovie: `/trending/movie/week?api_key=${API_KEY}&language=${Language}`,
    // 현재인기 영화 == 한국 기준 재일 유명한거
    fetchNowPlayingMovies: `/movie/now_playing?api_key=${API_KEY}&language=${Language}&region=${Language}`,
    // 최고 영화
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=${Language}`,

    // 인기 영화
    fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=${Language}`,
    // 액션 영화 == 28번     
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=${Language}`,
    // 애니메이션 == 16번
    fetchAnimationMovie: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=${Language}`,
    // 드라마 영화 == 18번
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18&language=${Language}`,
    // 역사 영화 == 36번
    fetchDiscoveryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36&language=${Language}`,
    // 공포 영화 == 27번
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=${Language}`,
    // 미스터리 영화 == 9468번
    fetchMistaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9468&language=${Language}`,
    // SF영화 == 878번
    fetchSFMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=${Language}`,
    // 로맨스 영화 == 10749번
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=${Language}`,
    // 전쟁 영화 == 10752번
    fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752&language=${Language}`,


    // 검색 기능 
    
    // 기본 검색 == 성인요소 제거 page == 1페이지만 국가는 한국사이트 기준으로 검색
    fetchSearchResult: `/search/multi?api_key=${API_KEY}&language=${Language}&page=1&include_adult=false&region=${Ko}`,
    // 영화 검색
    fetchSearchResultMovies: `/search/movie?api_key=${API_KEY}&language=${Language}&page=1&include_adult=false&region=${Ko}`,
    // TV 시리즈 검색
    fetchSearchResultTV: `/search/tv?api_key=${API_KEY}&language=${Language}&page=1&include_adult=false&region=${Ko}`,

   
};



 