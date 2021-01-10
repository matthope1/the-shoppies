// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
// *** USE YOUR CONFIG OBJECT ***
const config = {
  apiKey: "AIzaSyDcmErYVL4B8Ez4pLIaX1JY5w_dh2I8XgQ",
  authDomain: "the-shoppies-a6032.firebaseapp.com",
  databaseURL: "https://the-shoppies-a6032-default-rtdb.firebaseio.com",
  projectId: "the-shoppies-a6032",
  storageBucket: "the-shoppies-a6032.appspot.com",
  messagingSenderId: "1026405451711",
  appId: "1:1026405451711:web:e34d7b5c6baf7168f4830a"
};
firebase.initializeApp(config);

// this exports the CONFIGURED version of firebase
export default firebase;