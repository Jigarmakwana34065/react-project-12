// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbJKU7F2XiDhCnIFFQpISqGOt4on1-qLQ",
    authDomain: "firestore-crud-ea56f.firebaseapp.com",
    projectId: "firestore-crud-ea56f",
    storageBucket: "firestore-crud-ea56f.appspot.com",
    messagingSenderId: "966597723944",
    appId: "1:966597723944:web:3a890b9282cbf32eb5721d",
    measurementId: "G-6B1DWV1FD5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);