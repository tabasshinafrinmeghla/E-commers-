// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQAV68jsHvH2LGtDIa9SuVGATLxZTTuoc",
  authDomain: "e-commers-d67db.firebaseapp.com",
  projectId: "e-commers-d67db",
  storageBucket: "e-commers-d67db.appspot.com",
  messagingSenderId: "741823551352",
  appId: "1:741823551352:web:92a0f954183dd923901a8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;