import React from 'react';
import { render } from 'react-dom';
// 기본 스타일 유지할 css 
import 'normalize.css';
import App  from "./app";
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod'
import { FirebaseContext } from './context/firebase';
 

// 현재 어디서 랜더링할줄 모르기 때문에 
render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
