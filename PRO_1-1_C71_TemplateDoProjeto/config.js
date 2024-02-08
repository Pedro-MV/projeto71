import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDIev0zonLNHGzB9XE3zSYLIInSRR6_ZOI",
  authDomain: "pro70-37586.firebaseapp.com",
  projectId: "pro70-37586",
  storageBucket: "pro70-37586.appspot.com",
  messagingSenderId: "757251790062",
  appId: "1:757251790062:web:294a33a3859ec4779e8fff"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
