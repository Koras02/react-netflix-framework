import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBdEaVMOU0fAjgb_Gb1jd85OGtXrJFkf8w",
    authDomain: "netflix-firebase-88bd4.firebaseapp.com",
    projectId: "netflix-firebase-88bd4",
    storageBucket: "netflix-firebase-88bd4.appspot.com",
    messagingSenderId: "386999532203",
    appId: "1:386999532203:web:37c7f7c58a34c6160b15ee",
    measurementId: "G-5NWRR0FCNK"
}

const firebase = Firebase.initializeApp(config);



export { firebase };