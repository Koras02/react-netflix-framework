// import { API_KEY } from "./requests"

import { API_KEY } from "./requests";

export default function selectionFilter({
  trending,
  netflixOriginals,
  actionAndAdventureSeries,
  animationSeries,
  comedySeries,
  crimeSeries,
  documentarySeries,
  dramaSeries,
  familySeries,
  kidsSeries,
  mysterySeries,
  newsSeries,
  realitySeries,
  scifiSeries,
  talkSeries,
  warAndPoliticsSeries,
  westernSeries,
  topRatedMovies,
  actionMovies,
  adventureMovies,
  animationMovies,
  comedyMovies,
  crimeMovies,
  documentaries,
  dramaMovies,
  familyMovies,
  fantasyMovies,
  historyMovies,
  horrorMovies,
  musicMovies,
  mysteryMovies,
  romanceMovies,
  scifiMovies,
  tvmovieMovies,
  thrillerMovies,
  warMovies,
  westernMovies,
  searchTerm,
  animeMovie,
 

}) {
  return {
    trending: [
        {
            title: '넷플릭스 인기 콘텐츠 TOP20',
            data: trending.sort(() => Math.random() + Math.random()).slice(0,100),   
        },
   
        {
          title: '오직 넷플릭스에서',
          data: netflixOriginals.sort(() => Math.random() - Math.random()).slice(0,40),
        },
        {
            title: '액션 & 어드벤쳐',
            data: actionAndAdventureSeries.sort(() => Math.random() - Math.random()).slice(0,40)
        },
        {
            title: '애니메이션',
            data: animationSeries.sort(() => Math.random() - Math.random()).slice(0,40)
        },
        {
            title: '코미디',
            data: comedySeries.sort(() => Math.random() - Math.random()).slice(0, 40)
        },
        {
            title: '범죄 & 심리학',
            data: crimeSeries.sort(() => Math.random() - Math.random()).slice(0,40)
        },
        {
            title: '다큐멘터리',
            data: documentarySeries.sort(() => Math.random() - Math.random()).slice(0,40)
        },
        {
            title: '드라마',
            data: dramaSeries.sort(() => Math.random() - Math.random()).slice(0,40)
        },
        {
            title: '가족',
            data: familySeries.sort(() => Math.random() - Math.random()).slice(0, 40)
        },
        {
            title: '키즈 & 어린이',
            data: kidsSeries.sort(() => Math.random() - Math.random()).slice(0,40)
        },
        {
            title: '미스테리',
            data: mysterySeries.sort(() => Math.random() - Math.random()).slice(0,40)
        },
        {
            title: '뉴스',
            data: newsSeries.sort(() => Math.random() - Math.random()).slice(0,40)
        },
        {
            title: '리얼리티 & 쇼',
            data: realitySeries.sort(() => Math.random() - Math.random()).slice(0,40)
        },
        {
            title: 'SF & 과학',
            data: scifiSeries.sort(() => Math.random() - Math.random()).slice(0,40)
        },
        {
            title: '토크 쇼 & 예능',
            data: talkSeries.sort(() => Math.random() - Math.random()).slice(0,40)
        },
        {
            title: '전쟁 & 시사',
            data: warAndPoliticsSeries.sort(() => Math.random() - Math.random()).slice(0,40)
        },
        {
            title: '서부 영화',
            data: westernSeries.sort(() => Math.random() - Math.random()).slice(0,40)
        },
    ],
      series: [
          {
              title: '님이 좋아하실만한 컨텐츠',
              data: netflixOriginals.slice(1, 10)
          },
          {
            title: '오직 넷플릭스에서',
            data: netflixOriginals.slice(1, 10),
            // language=ko,
          },
          {
              title: '액션 & 어드벤쳐',
              data: actionAndAdventureSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '애니메이션',
              data: animationSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '코미디',
              data: comedySeries.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '범죄 & 심리학',
              data: crimeSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '다큐멘터리',
              data: documentarySeries.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '드라마',
              data: dramaSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '가족',
              data: familySeries.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '키즈 & 어린이',
              data: kidsSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '미스테리',
              data: mysterySeries.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '뉴스',
              data: newsSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '리얼리티 & 쇼',
              data: realitySeries.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: 'SF & 과학',
              data: scifiSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '토크 쇼 & 예능',
              data: talkSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '전쟁 & 시사',
              data: warAndPoliticsSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '서부 영화',
              data: westernSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
      ],
      films: [
          {
              title: '인기 영화 Top 10',
              data: topRatedMovies.sort(() => Math.random() - Math.random()).slice(2, 10)
          },
          {
              title: '액션',
              data: actionMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '어드벤쳐 & 모험',
              data: adventureMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '애니메이션 영화',
              data: animationMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '코미디 영화',
              data: comedyMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '범죄 & 수사 영화',
              data: crimeMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '다큐멘터리 영화',
              data: documentaries.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '드라마 영화',
              data: dramaMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '가족 영화',
              data: familyMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '판타지 영화',
              data: fantasyMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '역사 & 전쟁 영화',
              data: historyMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '호러 영화',
              data: horrorMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '음악',
              data: musicMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '미스터리 영화',
              data: mysteryMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '로맨스',
              data: romanceMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '영웅이 필요할 때',
              data: scifiMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: 'TV시리즈 극장판',
              data: tvmovieMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '스릴러',
              data: thrillerMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '전쟁 영화',
              data: warMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
          {
              title: '서부 영화',
              data: westernMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
          },
        ],
        kids:[
            {
                title: 'Netflix 인기 콘텐츠',
                data: animeMovie.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: '애니메이션',
                data: animeMovie.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: '한국 드라마 & 버라이어티',
                data: animeMovie.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: '외국 TV 프로그램',
                data: animeMovie.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: '신규 콘텐츠',
                data: animeMovie.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: '코미디',
                data: animeMovie.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: '한국 영화',
                data: animeMovie.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'SF & 판타지',
                data: animeMovie.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'TV 만화',
                data: animeMovie.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: '중국 영화',
                data: animeMovie.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: '애니메이션 TV 프로그램',
                data: animeMovie.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: '영화제에서 상을 받은 영화',
                data: animeMovie.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
          
        ],
        search: [
            {
               title: "검색",
               fetchUrl: `search/movie?api_key=${API_KEY}&query=${searchTerm}&region=ko&language=ko`,
               isLargeRow: true
            }
        ],
  }
}