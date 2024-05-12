// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtpJK6YjetCpC_Jc4xS9ES1nDYA95qGMw",
  authDomain: "expense-tracker-63225.firebaseapp.com",
  projectId: "expense-tracker-63225",
  storageBucket: "expense-tracker-63225.appspot.com",
  messagingSenderId: "462135047142",
  appId: "1:462135047142:web:5b99f32b204c327dd2dc27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export  const db = getFirestore(app)