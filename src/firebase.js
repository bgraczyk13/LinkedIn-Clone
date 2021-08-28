import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_KxtoRgv5zXnrbgJpCPgb6pdvZBKMMjw",
  authDomain: "linkedin-clone-ca7c1.firebaseapp.com",
  projectId: "linkedin-clone-ca7c1",
  storageBucket: "linkedin-clone-ca7c1.appspot.com",
  messagingSenderId: "72979554611",
  appId: "1:72979554611:web:2756d689c5b3f2ec799e46",
  measurementId: "G-B3LNN2BEML",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
