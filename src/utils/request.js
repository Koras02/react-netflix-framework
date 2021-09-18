// Typically we would store in {process.env.API_KEY}
export const API_KEY = '7db8b1ffbba88aaa67068565d84fe99f';

export const requestsFilms = {
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=ko`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&langauge=ko`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=ko`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53&language=ko`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=ko`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ko`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=ko`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ko`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=ko`,
};

export const requestsTV = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=ko`,
  fetchTrending: `/trending/tv/week?api_key=${API_KEY}&language=ko`,
  fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=ko`,
  fetchActionTV: `/discover/tv?api_key=${API_KEY}&with_genres=10759&language=ko`,
  fetchAnimationTV: `/discover/tv?api_key=${API_KEY}&with_genres=16&language=ko`,
  fetchMysteryTV: `/discover/tv?api_key=${API_KEY}&with_genres=9648&language=ko`,
  fetchComedyTV: `/discover/tv?api_key=${API_KEY}&with_genres=35&language=ko`,
  fetchCrimeTV: `/discover/tv?api_key=${API_KEY}&with_genres=80&language=ko`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99&language=ko`,
};
