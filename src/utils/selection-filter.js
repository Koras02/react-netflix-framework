// 장르 네비게이션
export default function selectionFilter({ series, films } = []) {
  return {
    trending: [
      { title: '한국이 만든 콘텐츠', data: series?.filter((item) => item.genre === 'korea Top10') },
      { title: '미국 TV드라마', data: series?.filter((item) => item.genre === 'now Playing') },
      { title: '인기 로맨스 영화', data: series?.filter((item) => item.genre === 'comidy')},
      { title: '아시아 액션 영화', data: series?.filter((item) => item.genre === 'asia action') },
      { title: 'SF & 판타지', data: series?.filter((item) => item.genre === 'sf') },
      { title: '범죄', data: series?.filter((item) => item.genre === 'crime') },
      { title: '스포츠', data: series?.filter((item) => item.genre === 'sport')},
      { title: '10대 드라마', data: series?.filter((item) => item.genre === 'hitin')},
      { title: '인기 애니메이션', data: series?.filter((item) => item.genre === 'popular-anime')},
      { title: '인디 영화', data: series?.filter((item) => item.genre === 'Independent Movies')},



    ], 
    series: [
      { title: 'Tv드라마', data: series?.filter((item) => item.genre === 'documentaries') },
      { title: '한국 드라마', data: series?.filter((item) => item.genre === 'kdrama') },
      { title: '드라마 장르 영화 TOP10', data: series?.filter((item) => item.genre === 'children') },
      { title: '범죄', data: series?.filter((item) => item.genre === 'crime') },
      { title: '기분 좋은날', data: series?.filter((item) => item.genre === 'feel-good') },
      
    ],
    tv: [
      { title: '넷플릭스 오리지널 드라마 TOP10', data: series?.filter((item) => item.genre === 'drama') },
      { title: '코미디', data: series?.filter((item) => item.genre === 'comedies') },
      { title: '어린이', data: series?.filter((item) => item.genre === 'children') },
      { title: '범죄', data: series?.filter((item) => item.genre === 'crime') },
      { title: '기분 좋은날', data: series?.filter((item) => item.genre === 'feel-good') },
    ],
    movie: [
      { title: 'Netflix인기 콘텐츠', data: films?.filter((item) => item.genre === 'drama') },
      { title: '블록버스터 영화', data: films?.filter((item) => item.genre === 'thriller') },
      { title: '영화.어린이 & 가족', data: films?.filter((item) => item.genre === 'children') },
      { title: '한국 영화', data: films?.filter((item) => item.genre === 'suspense') },
      { title: '외국 영화', data: films?.filter((item) => item.genre === 'romance') },
      { title: '발리우드 영화', data: films?.filter((item) => item.genre === 'romance') },
      { title: '액션 & 어드벤처', data: films?.filter((item) => item.genre === 'romance') },
      { title: '영화.폭력', data: films?.filter((item) => item.genre === 'romance') },
      { title: '외국 드라마 장르 영화', data: films?.filter((item) => item.genre === 'romance') },
      { title: '가족이 함께 보기 좋은 영화', data: films?.filter((item) => item.genre === 'romance') },
      { title: '영화.흥미진진', data: films?.filter((item) => item.genre === 'romance') },
      { title: '아시아 영화', data: films?.filter((item) => item.genre === 'romance') },
      { title: '범죄 영화', data: films?.filter((item) => item.genre === 'romance') },
      { title: '한국 영화.드라마. 장르', data: films?.filter((item) => item.genre === 'romance') },



    ],
    new: [
      { title: '드라마', data: films?.filter((item) => item.genre === 'drama') },
      { title: '트레일러', data: films?.filter((item) => item.genre === 'thriller') },
      { title: '어린이', data: films?.filter((item) => item.genre === 'children') },
      { title: '서스펜스', data: films?.filter((item) => item.genre === 'suspense') },
      { title: '로맨스', data: films?.filter((item) => item.genre === 'romance') },
    ],
    
  };
}
