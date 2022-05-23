// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_l-jhDKmqhVtnDZlWnHuZSIMV6sWwZtQ",
  authDomain: "computer-hardware-parts.firebaseapp.com",
  projectId: "computer-hardware-parts",
  storageBucket: "computer-hardware-parts.appspot.com",
  messagingSenderId: "485571321092",
  appId: "1:485571321092:web:2f079bc90c59026d04c451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;



