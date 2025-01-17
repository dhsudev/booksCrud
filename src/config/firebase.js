import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaKV76XQ0u0KcXEFMGY1zugL5lOehOB3E",
  authDomain: "miniproject-19564.firebaseapp.com",
  projectId: "miniproject-19564",
  storageBucket: "miniproject-19564.firebasestorage.app",
  messagingSenderId: "243644570471",
  appId: "1:243644570471:web:748e7d23dc4d8dc8ed6dc2",
  measurementId: "G-LDGCSWZRZP"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const bookCollectionRef = collection(db, "books");

export { db, auth, googleProvider, bookCollectionRef };