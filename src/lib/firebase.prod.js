// 9.0.0 최신버전부터는 compat에서 불러오셔야 합니다. 
// this 9.0.0 version latest == src is compat
import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDiF_ypOknM6m1sniLiAgeBcgB1FdtUcXk",
  authDomain: "netflix-react-api.firebaseapp.com",
  projectId: "netflix-react-api",
  storageBucket: "netflix-react-api.appspot.com",
  messagingSenderId: "587294626140",
  appId: "1:587294626140:web:03c8db3b130d9612707199",
  measurementId: "G-51W5KGF7NQ"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
