import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCX2U1EUqJ6ZuaRqH5g2amP4LI74MM4M9Q",
    authDomain: "lelouch-manager.firebaseapp.com",
    projectId: "lelouch-manager",
    storageBucket: "lelouch-manager.appspot.com",
    messagingSenderId: "770931516263",
    appId: "1:770931516263:web:5ee862457c52d05f2d05c2",
    measurementId: "G-657Y0TQLNN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const firestore = getFirestore()
const auth = getAuth()

export {firestore, auth}


