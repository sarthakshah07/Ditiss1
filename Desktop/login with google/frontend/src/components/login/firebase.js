import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    //paste ur config files
    apiKey: "AIzaSyBbqXkS8m4QGSamaU_aBk013VLmE5NxF_4",
    authDomain: "g-auth-6f1df.firebaseapp.com",
    projectId: "g-auth-6f1df",
    storageBucket: "g-auth-6f1df.appspot.com",
    messagingSenderId: "243815510258",
    appId: "1:243815510258:web:bd86e78b9d319dd948206b"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const gProvider = new GoogleAuthProvider();
export const store = getStorage();
export const db = getFirestore();