import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCjuI6c5gi2hnlU52PIUqm5vRtGjM8q8Ww",
  authDomain: "botin-b2228.firebaseapp.com",
  databaseURL: "https://botin-b2228-default-rtdb.firebaseio.com",
  projectId: "botin-b2228",
  storageBucket: "botin-b2228.appspot.com",
  messagingSenderId: "678703834452",
  appId: "1:678703834452:web:b8c087de93e00eba8094c1",
  measurementId: "G-C1ZZ3L7FHJ"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
