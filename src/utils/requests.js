 
// // ======================== API 이미지 주소 모음 ============================//
// export const API_KEY = process.env.REACT_APP_API_KEY;
// // 이미지 BASE주소 
// export const BASE_URL = "https://image.tmdb.org/t/p/original/";
// // 언어 기본 설정
// export const Language = "ko-KR"

// export const URL = "https://api.themoviedb.org/3";

// //image sizes for tmdb
// export const img_300 = "https://image.tmdb.org/t/p/w300";
// export const img_1000 = "https://image.tmdb.org/t/p/w800";
// export const img_original = 'https://image.tmdb.org/t/p/original';

// // contentModal and singleContent
// export const unvaliable =
//   "https://www.movienewz.com/img/films/poster-holder.jpg";

// // contentModal
// export const unavailableLandscape =
//   "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg";

// // For Carousel
// export const noPicture =
//   "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";



// // 검색 국가
// export const Ko = "ko"
// // ======================== API 이미지 주소 모음 ============================//


// // TV 영화 장르별 api 모은 requests 주소
// export const requests = {

//     // TV 에대한 Request 

//     // 현재 인기 영화  == 매일 기준
//     fetchTrendingTV: `/trending/tv/week?api_key=${API_KEY}&language=${Language}`,
//     // 넷플릭스 오리지널용 == tv
//     fetchNetflixOriginalTv: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=${Language}`,
//     // 인기 드라마 TV 장르
//     fetchPopularTV: `/tv/popular?api_key=${API_KEY}&language=${Language}`,
//     // 최고 평점
//     fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=${Language}`,
    
//     // 영화
//     // trending 인기 
//     // 트렌딩 인기 영화 규칙 주 간격 
//     fetchTrendingMovie: `/trending/movie/week?api_key=${API_KEY}&language=${Language}`,
//     // 현재인기 영화 == 한국 기준 재일 유명한거
//     fetchNowPlayingMovies: `/movie/now_playing?api_key=${API_KEY}&language=${Language}&region=${Language}`,
//     // 최고 영화
//     fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=${Language}`,

//     // 인기 영화
//     fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=${Language}`,
//     // 액션 영화 == 28번     
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=${Language}`,
//     // 애니메이션 == 16번
//     fetchAnimationMovie: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=${Language}`,
//     // 드라마 영화 == 18번
//     fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18&language=${Language}`,
//     // 역사 영화 == 36번
//     fetchDiscoveryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36&language=${Language}`,
//     // 공포 영화 == 27번
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=${Language}`,
//     // 미스터리 영화 == 9468번
//     fetchMistaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9468&language=${Language}`,
//     // SF영화 == 878번
//     fetchSFMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=${Language}`,
//     // 로맨스 영화 == 10749번
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=${Language}`,
//     // 전쟁 영화 == 10752번
//     fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752&language=${Language}`,


//     // 검색 기능 
    
//     // 기본 검색 == 성인요소 제거 page == 1페이지만 국가는 한국사이트 기준으로 검색
//     fetchSearchResult: `/search/multi?api_key=${API_KEY}&language=${Language}&page=1&include_adult=false&region=${Ko}`,
//     // 영화 검색
//     fetchSearchResultMovies: `/search/movie?api_key=${API_KEY}&language=${Language}&page=1&include_adult=false&region=${Ko}`,
//     // TV 시리즈 검색
//     fetchSearchResultTV: `/search/tv?api_key=${API_KEY}&language=${Language}&page=1&include_adult=false&region=${Ko}`,

   
// };



//  export default requests;


export const API_KEY = "7db8b1ffbba88aaa67068565d84fe99f"
// // ======================== API 이미지 주소 모음 ============================//
// export const API_KEY = process.env.REACT_APP_API_KEY;
// // 이미지 BASE주소 
// export const BASE_URL = "https://image.tmdb.org/t/p/original/";
// // 언어 기본 설정
export const Language = "ko-KR"

// export const URL = "https://api.themoviedb.org/3";

// //image sizes for tmdb
// export const img_300 = "https://image.tmdb.org/t/p/w300";
// export const img_1000 = "https://image.tmdb.org/t/p/w800";
// export const img_original = 'https://image.tmdb.org/t/p/original';


//     // 현재 인기 영화  == 매일 기준
//     fetchTrendingTV: `/trending/tv/week?api_key=${API_KEY}&language=${Language}`,
//     // 넷플릭스 오리지널용 == tv
//     fetchNetflixOriginalTv: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=${Language}`,
//     // 인기 드라마 TV 장르
//     fetchPopularTV: `/tv/popular?api_key=${API_KEY}&language=${Language}`,
//     // 최고 평점
//     fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=${Language}`,
    
//     // 영화
//     // trending 인기 
//     // 트렌딩 인기 영화 규칙 주 간격 
//     fetchTrendingMovie: `/trending/movie/week?api_key=${API_KEY}&language=${Language}`,
//     // 현재인기 영화 == 한국 기준 재일 유명한거
//     fetchNowPlayingMovies: `/movie/now_playing?api_key=${API_KEY}&language=${Language}&region=${Language}`,
//     // 최고 영화
//     fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=${Language}`,

//     // 인기 영화
//     fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=${Language}`,
//     // 액션 영화 == 28번     
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=${Language}`,
//     // 애니메이션 == 16번
//     fetchAnimationMovie: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=${Language}`,
//     // 드라마 영화 == 18번
//     fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18&language=${Language}`,
//     // 역사 영화 == 36번
//     fetchDiscoveryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36&language=${Language}`,
//     // 공포 영화 == 27번
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=${Language}`,
//     // 미스터리 영화 == 9468번
//     fetchMistaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9468&language=${Language}`,
//     // SF영화 == 878번
//     fetchSFMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=${Language}`,
//     // 로맨스 영화 == 10749번
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=${Language}`,
//     // 전쟁 영화 == 10752번
//     fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752&language=${Language}`,


//     // 검색 기능 
    
//     // 기본 검색 == 성인요소 제거 page == 1페이지만 국가는 한국사이트 기준으로 검색
//     fetchSearchResult: `/search/multi?api_key=${API_KEY}&language=${Language}&page=1&include_adult=false&region=${Ko}`,
//     // 영화 검색
//     fetchSearchResultMovies: `/search/movie?api_key=${API_KEY}&language=${Language}&page=1&include_adult=false&region=${Ko}`,
//     // TV 시리즈 검색
//     fetchSearchResultTV: `/search/tv?api_key=${API_KEY}&language=${Language}&page=1&include_adult=false&region=${Ko}`,



const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=${Language}`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213&language=${Language}`,
    fetchActionAndAdventureSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10759&language=${Language}`,
    fetchAnimationSeries: `/discover/tv?api_key=${API_KEY}&with_genres=16&language=${Language}`,
    fetchComedySeries: `/discover/tv?api_key=${API_KEY}&with_genres=35&language=${Language}`,
    fetchCrimeSeries: `/discover/tv?api_key=${API_KEY}&with_genres=80&language=${Language}`,
    fetchDocumentarySeries: `/discover/tv?api_key=${API_KEY}&with_genres=99&language=${Language}`,
    fetchDramaSeries: `/discover/tv?api_key=${API_KEY}&with_genres=18&language=${Language}`,
    fetchFamilySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10751&language=${Language}`,
    fetchKidsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10762&language=${Language}`,
    fetchMysterySeries: `/discover/tv?api_key=${API_KEY}&with_genres=9648&language=${Language}`,
    fetchNewsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10763&language=${Language}`,
    fetchRealitySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10764&language=${Language}`,
    fetchScifiSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10765&language=${Language}`,
    fetchSoapSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10766&language=${Language}`,
    fetchTalkSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10767&language=${Language}`,
    fetchWarAndPoliticsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10768&language=${Language}`,
    fetchWesternSeries: `/discover/tv?api_key=${API_KEY}&with_genres=37&language=${Language}`,

    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=&${Language}`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&${Language}`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12&${Language}`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&${Language}`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&${Language}`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80&${Language}`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&${Language}`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18&${Language}`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751&${Language}`,
    fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14&${Language}`,
    fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36&${Language}`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&${Language}`,
    fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402&${Language}`,
    fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648&${Language}`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&${Language}`,
    fetchScifiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878&${Language}`,
    fetchTvMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10770&${Language}`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53&${Language}`,
    fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752&${Language}`,
    fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37&${Language}`,

}

export default requests