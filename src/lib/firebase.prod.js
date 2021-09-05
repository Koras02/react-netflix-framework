// 9.0.0 최신버전부터는 compat에서 불러오셔야 합니다. 
// this 9.0.0 version latest == src is compat
import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBdEaVMOU0fAjgb_Gb1jd85OGtXrJFkf8w',
  authDomain: 'netflix-firebase-88bd4.firebaseapp.com',
  projectId: 'netflix-firebase-88bd4',
  storageBucket: 'netflix-firebase-88bd4.appspot.com',
  messagingSenderId: '386999532203',
  appId: '1:386999532203:web:37c7f7c58a34c6160b15ee',
  measurementId: 'G-5NWRR0FCNK',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
