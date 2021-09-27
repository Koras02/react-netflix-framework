// 9.0.0 최신버전부터는 compat에서 불러오셔야 합니다. 
// this 9.0.0 version latest == src is compat
import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// firbase 데이터 베이스 시드 
// import { seedDatabase } from '../seed';




// config firebase 데이터 정보 id 는 본인 프로젝트의 api_key들을 복사해서 사용하시길 바랍니다.
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTHDOMAIN_API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

const firebase = Firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebase.firestore();

 
export { firebase, auth,db };



/* ------------------------------------------------------ 앱 초기화 부분 끝 ----------------------------------------------------*/

 