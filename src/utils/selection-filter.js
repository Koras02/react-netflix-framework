export default function selectionFilter({ series, films } = []) {
  return {
    series: [
      { title: '다큐멘터리', data: series?.filter((item) => item.genre === 'documentaries') },
      { title: '코미디', data: series?.filter((item) => item.genre === 'comedies') },
      { title: '어린이', data: series?.filter((item) => item.genre === 'children') },
      { title: '범죄', data: series?.filter((item) => item.genre === 'crime') },
      { title: '기분 좋은날', data: series?.filter((item) => item.genre === 'feel-good') },
    ],
    films: [
      { title: '드라마', data: films?.filter((item) => item.genre === 'drama') },
      { title: '트레일러', data: films?.filter((item) => item.genre === 'thriller') },
      { title: '어린이', data: films?.filter((item) => item.genre === 'children') },
      { title: '서스펜스', data: films?.filter((item) => item.genre === 'suspense') },
      { title: '로맨스', data: films?.filter((item) => item.genre === 'romance') },
    ],
  };
}