// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGA83kpBq-tgQMt8FNjCKjjVr8RLVnzI0",
    authDomain: "firestore-crud-d9edd.firebaseapp.com",
    projectId: "firestore-crud-d9edd",
    storageBucket: "firestore-crud-d9edd.appspot.com",
    messagingSenderId: "837172975850",
    appId: "1:837172975850:web:bb9612f8dc7e1935f9df93",
    measurementId: "G-MJW62JHN01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);