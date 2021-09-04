import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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
