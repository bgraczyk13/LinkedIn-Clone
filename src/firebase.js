import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDifAbPEXRxGWyHW-uvOAjUzwjJ1qEyPkE",
  authDomain: "linkedin-clone-a5453.firebaseapp.com",
  projectId: "linkedin-clone-a5453",
  storageBucket: "linkedin-clone-a5453.appspot.com",
  messagingSenderId: "997197661302",
  appId: "1:997197661302:web:c13451cf889283873d0b57",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
