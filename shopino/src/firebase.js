//import firebase from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxWK8n1oGindHn6CMXmugyuIGXdwkmhQY",
    authDomain: "shapino-fb458.firebaseapp.com",
    projectId: "shapino-fb458",
    storageBucket: "shapino-fb458.appspot.com",
    messagingSenderId: "860318779518",
    appId: "1:860318779518:web:63851c25d5eb7aa314b02f",
    measurementId: "G-M0L99N2GD5"
  };

  const firebseApp = firebase.initializeApp(firebaseConfig);

  const db = firebseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};
