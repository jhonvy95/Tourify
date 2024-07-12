// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMtzEhfp6S6gOYLh0uraaERjQzuvfLf-E",
  authDomain: "tourify-9a0ab.firebaseapp.com",
  projectId: "tourify-9a0ab",
  storageBucket: "tourify-9a0ab.appspot.com",
  messagingSenderId: "201597334954",
  appId: "1:201597334954:web:7a8ae91c8fb7f37873e7d3",
  measurementId: "G-R1LEN5GHPH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
