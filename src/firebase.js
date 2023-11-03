import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAG53AHCTIgJKi09-whBbDHoSQJJlBbtNU",
    authDomain: "bbnshop-2bbe0.firebaseapp.com",
    projectId: "bbnshop-2bbe0",
    storageBucket: "bbnshop-2bbe0.appspot.com",
    messagingSenderId: "395211581556",
    appId: "1:395211581556:web:55aa3a486948a6fbc14921",
    measurementId: "G-7LKW92R5S1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};