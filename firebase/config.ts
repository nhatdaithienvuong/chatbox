// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCx3ZiUJLlwCGPCIXv2wVbxQkOepWdScNM",
  authDomain: "chatbox-4d7b5.firebaseapp.com",
  projectId: "chatbox-4d7b5",
  storageBucket: "chatbox-4d7b5.appspot.com",
  messagingSenderId: "837175609789",
  appId: "1:837175609789:web:14b97397d9b209e664aad4",
  measurementId: "G-F8FEX8BCXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app);

export { auth, db, storage };


