import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDhrsizG7MI7UgAmAlhSrv6e2u9L3EZ3M8",
  authDomain: "edu-direct.firebaseapp.com",
  databaseURL: "https://edu-direct.firebaseio.com",
  projectId: "edu-direct",
  storageBucket: "edu-direct.appspot.com",
  messagingSenderId: "693836349936",
  appId: "1:693836349936:web:6bbc50e617009ab89e9d35",
  measurementId: "G-3LETM4Q8QV",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
export { firebase, db, auth, storage };
