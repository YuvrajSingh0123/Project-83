import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9DZlpvKgf2KJ5Y8kZlzJ-D1ko1Se4kd0",
  authDomain: "wireless-ride.firebaseapp.com",
  projectId: "wireless-ride",
  storageBucket: "wireless-ride.appspot.com",
  messagingSenderId: "510992132554",
  appId: "1:510992132554:web:f98573b6ba82ace79d8733"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
