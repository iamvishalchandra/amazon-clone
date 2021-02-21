// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";

import firebase from "firebase/app";
import "firebase/auth"; // for authentication
// import "firebase/storage"; // for storage
// import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
import "firebase/messaging"; // for cloud messaging
// import "firebase/functions"; // for cloud functions

const firebaseConfig = {
  apiKey: "AIzaSyDyn9u1RzgVrLjQxuF_dyEt0KmMTYxuorE",
  authDomain: "clone-by-vishal-chandra.firebaseapp.com",
  projectId: "clone-by-vishal-chandra",
  storageBucket: "clone-by-vishal-chandra.appspot.com",
  messagingSenderId: "131624057112",
  appId: "1:131624057112:web:23d658513f95cd2df2866d",
  measurementId: "G-0E8GTYCG5J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
