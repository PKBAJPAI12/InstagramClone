// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMimrisIzA66oqaBO3_5StNPWRodeLqv4",
  authDomain: "instagramclone-852f7.firebaseapp.com",
  projectId: "instagramclone-852f7",
  storageBucket: "instagramclone-852f7.appspot.com",
  messagingSenderId: "429099305364",
  appId: "1:429099305364:web:f0c87ad10232e9cfbd2781",
  measurementId: "G-DF59S1RQ7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);