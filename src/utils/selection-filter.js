// 장르 네비게이션
export default function selectionFilter({ series, films } = []) {
  return {
    trending: [
      { title: '오늘의 한국 TOP10 콘텐츠', data: series?.filter((item) => item.genre === 'korea Top10') },
      { title: '지금 뜨는 콘텐츠', data: series?.filter((item) => item.genre === 'comedies') },
      { title: '넷플릭스의 새로운 콘텐츠', data: series?.filter((item) => item.genre === 'children') },
      { title: '범죄', data: series?.filter((item) => item.genre === 'crime') },
      { title: '기분 좋은날', data: series?.filter((item) => item.genre === 'feel-good') },
    ], 
    series: [
      { title: '다큐멘터리', data: series?.filter((item) => item.genre === 'documentaries') },
      { title: '코미디', data: series?.filter((item) => item.genre === 'comedies') },
      { title: '어린이', data: series?.filter((item) => item.genre === 'children') },
      { title: '범죄', data: series?.filter((item) => item.genre === 'crime') },
      { title: '기분 좋은날', data: series?.filter((item) => item.genre === 'feel-good') },
    ],
    tv: [
      { title: '다큐멘터리', data: series?.filter((item) => item.genre === 'documentaries') },
      { title: '코미디', data: series?.filter((item) => item.genre === 'comedies') },
      { title: '어린이', data: series?.filter((item) => item.genre === 'children') },
      { title: '범죄', data: series?.filter((item) => item.genre === 'crime') },
      { title: '기분 좋은날', data: series?.filter((item) => item.genre === 'feel-good') },
    ],
    movie: [
      { title: '드라마', data: films?.filter((item) => item.genre === 'drama') },
      { title: '트레일러', data: films?.filter((item) => item.genre === 'thriller') },
      { title: '어린이', data: films?.filter((item) => item.genre === 'children') },
      { title: '서스펜스', data: films?.filter((item) => item.genre === 'suspense') },
      { title: '로맨스', data: films?.filter((item) => item.genre === 'romance') },
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
