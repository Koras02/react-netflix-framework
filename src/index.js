import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
// 기본 스타일 유지할 css 
import 'normalize.css';
import App  from "./app";
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod'
import { FirebaseContext } from './context/firebase';
import { Provider } from 'react-redux';
import store from './reducers/store';


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
