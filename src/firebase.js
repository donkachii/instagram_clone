import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDse2KcN7zyu5krWgV5ekF7ehEaDjMJF60",
  authDomain: "instagram-clone-ea6da.firebaseapp.com",
  databaseURL: "https://instagram-clone-ea6da-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-ea6da",
  storageBucket: "instagram-clone-ea6da.appspot.com",
  messagingSenderId: "764408828986",
  appId: "1:764408828986:web:d3e30ec770d7b1303a5103",
  measurementId: "G-VKE6H2ZX78",
});

const db = firebaseApp.fireStore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
