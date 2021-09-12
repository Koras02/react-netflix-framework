import React from 'react';
 
import ReactDOM from 'react-dom';
// 기본 스타일 유지할 css 
import 'normalize.css';
import App  from "./app";
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod'
import { FirebaseContext } from './context/firebase';
import { Provider } from 'react-redux';
import store from './reducers/store';

// 센트리 모듈 import 부분 
import { Integrations } from "@sentry/tracing";
import * as Sentry from "@sentry/react";


// setry 에러 모니터링 적용 
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],

  // tracesSampleRate를 1.0으로 설정해서 프로젝트 오류 사항을 100% 캡쳐할수있게 구현
  // 성능 모니터링을 하기 위한 트랜젝션 코드이다.
  // 프로덕션에서 이 값을 직접 조정하는 것을 추천.
  tracesSampleRate: 1.0,


  
})



// 현재 어디서 랜더링할줄 모르기 때문에 
ReactDOM.render(
  <>
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <Provider store={store}>
         <App />
       </Provider>
    </FirebaseContext.Provider>
    </React.StrictMode>
  </>,
  document.getElementById('root')
);
