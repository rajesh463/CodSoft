import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCzqQAcGWDMmugaxua72Ci8RCpwccOC1aE",
    authDomain: "react-firebase-auth-f990a.firebaseapp.com",
    projectId: "react-firebase-auth-f990a",
    storageBucket: "react-firebase-auth-f990a.appspot.com",
    messagingSenderId: "157910851370",
    appId: "1:157910851370:web:36dd75aa21026056c1c853"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export  {auth,googleAuthProvider};