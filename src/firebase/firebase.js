// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7rZHq8Cy9x1RVm2f7ZncatP7nPbFsv4E",
  authDomain: "universitywebapp96.firebaseapp.com",
  projectId: "universitywebapp96",
  storageBucket: "universitywebapp96.appspot.com",
  messagingSenderId: "118813570371",
  appId: "1:118813570371:web:f669f698afc06ba9a8abf6",
  measurementId: "G-FJ7Q44266C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
