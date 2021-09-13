// // 장르 네비게이션
// export default function selectionFilter({ 
//   series, films,
//   trending,
//   netflixOriginals,
//   netflixPopular,


// } = []) {
//   return {
//     trending: [
//       { 
//         title: '한국이 만든 콘텐츠', 
//         // data: series?.filter((item) => item.genre === 'korea Top10'),
//         data: trending.slice(1,10)
//       },
//       { title: '미국 TV드라마', 
//           //  data: series?.filter((item) => item.genre === 'now Playing')
           
//       },
//       { title: '인기 로맨스 영화', data: series?.filter((item) => item.genre === 'comidy')},
//       { title: '아시아 액션 영화', data: series?.filter((item) => item.genre === 'asia action') },
//       { title: 'SF & 판타지', data: series?.filter((item) => item.genre === 'sf') },
//       { title: '범죄', data: series?.filter((item) => item.genre === 'crime') },
//       { title: '스포츠', data: series?.filter((item) => item.genre === 'sport')},
//       { title: '10대 드라마', data: series?.filter((item) => item.genre === 'hitin')},
//       { title: '인기 애니메이션', data: series?.filter((item) => item.genre === 'popular-anime')},
//       { title: '인디 영화', data: series?.filter((item) => item.genre === 'Independent Movies')},



//     ], 
//     series: [
//       { title: 'Tv드라마', data: series?.filter((item) => item.genre === 'documentaries') },
//       { title: '한국 드라마', data: series?.filter((item) => item.genre === 'kdrama') },
//       { title: '드라마 장르 영화 TOP10', data: series?.filter((item) => item.genre === 'children') },
//       { title: '범죄', data: series?.filter((item) => item.genre === 'crime') },
//       { title: '기분 좋은날', data: series?.filter((item) => item.genre === 'feel-good') },
      
//     ],
//     tv: [
//       { title: '넷플릭스 오리지널 드라마 TOP10', data: series?.filter((item) => item.genre === 'drama') },
//       { title: '코미디', data: series?.filter((item) => item.genre === 'comedies') },
//       { title: '어린이', data: series?.filter((item) => item.genre === 'children') },
//       { title: '범죄', data: series?.filter((item) => item.genre === 'crime') },
//       { title: '기분 좋은날', data: series?.filter((item) => item.genre === 'feel-good') },
//     ],
//     movie: [
//       { title: 'Netflix인기 콘텐츠', data: films?.filter((item) => item.genre === 'drama') },
//       { title: '블록버스터 영화', data: films?.filter((item) => item.genre === 'thriller') },
//       { title: '영화.어린이 & 가족', data: films?.filter((item) => item.genre === 'children') },
//       { title: '한국 영화', data: films?.filter((item) => item.genre === 'suspense') },
//       { title: '외국 영화', data: films?.filter((item) => item.genre === 'romance') },
//       { title: '발리우드 영화', data: films?.filter((item) => item.genre === 'romance') },
//       { title: '액션 & 어드벤처', data: films?.filter((item) => item.genre === 'romance') },
//       { title: '영화.폭력', data: films?.filter((item) => item.genre === 'romance') },
//       { title: '외국 드라마 장르 영화', data: films?.filter((item) => item.genre === 'romance') },
//       { title: '가족이 함께 보기 좋은 영화', data: films?.filter((item) => item.genre === 'romance') },
//       { title: '영화.흥미진진', data: films?.filter((item) => item.genre === 'romance') },
//       { title: '아시아 영화', data: films?.filter((item) => item.genre === 'romance') },
//       { title: '범죄 영화', data: films?.filter((item) => item.genre === 'romance') },
//       { title: '한국 영화.드라마. 장르', data: films?.filter((item) => item.genre === 'romance') },



//     ],
//     new: [
//       { title: '드라마', data: films?.filter((item) => item.genre === 'drama') },
//       { title: '트레일러', data: films?.filter((item) => item.genre === 'thriller') },
//       { title: '어린이', data: films?.filter((item) => item.genre === 'children') },
//       { title: '서스펜스', data: films?.filter((item) => item.genre === 'suspense') },
//       { title: '로맨스', data: films?.filter((item) => item.genre === 'romance') },
//     ],
    
//   };
// }


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
  westernMovies
}) {
  return {
      series: [
          {
              title: '넷플릭시 인기 콘텐츠 TOP20',
              data: trending.slice(3,10)
          },
          {
              title: '님이 좋아하실만한 컨텐츠',
              data: netflixOriginals.slice(1, 10)
          },
          {
            title: '오직 넷플릭스에서',
            data: netflixOriginals.slice(1, 10)
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
  }
}