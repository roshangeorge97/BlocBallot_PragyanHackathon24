import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcYIM9rDvyxfhpwKYDhXsk3XzcrEwQ19w",
  authDomain: "testy-78a7d.firebaseapp.com",
  projectId: "testy-78a7d",
  storageBucket: "testy-78a7d.appspot.com",
  messagingSenderId: "760059816685",
  appId: "1:760059816685:web:76537a3d189cb7e3233ae4",
  measurementId: "G-P896M3NVKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
