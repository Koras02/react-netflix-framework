// 9.0.0 최신버전부터는 compat에서 불러오셔야 합니다. 
// this 9.0.0 version latest == src is compat
import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// firbase 데이터 베이스 시드 
// import { seedDatabase } from '../seed';



// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

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

// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data


// firebase 로 영화 DataBase 
// seedDatabase(firebase);

export { firebase, auth };



/* ------------------------------------------------------ 앱 초기화 부분 끝 ----------------------------------------------------*/

 