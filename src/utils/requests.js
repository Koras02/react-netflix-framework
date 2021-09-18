 

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

 


const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=${Language}`,
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

    // 영화
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=${Language}`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=${Language}`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12&language=${Language}`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=${Language}`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=${Language}`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80&language=${Language}`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=${Language}`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18&language=${Language}`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751&language=${Language}`,
    fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14&language=${Language}`,
    fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36&language=${Language}`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=${Language}`,
    fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402&language=${Language}`,
    fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=${Language}`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=${Language}`,
    fetchScifiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=${Language}`,
    fetchTvMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=${Language}`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53&language=${Language}`,
    fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752&language=${Language}`,
    fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=${Language}`,

}

export default requests