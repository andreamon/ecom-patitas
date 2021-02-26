import firebase from "firebase";
import 'firebase/auth';
import "firebase/storage";

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
// Inicializar Firebase
const fire = firebase.initializeApp(config);

const storage = firebase.storage();
const db = firebase.firestore();
const auth = fire.auth();

export { storage, db, auth, firebase as default };
