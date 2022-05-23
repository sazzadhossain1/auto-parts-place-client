// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIihabU5s0NTmTje-RvK0PfnYnUucFGoI",
  authDomain: "auto-parts-place.firebaseapp.com",
  projectId: "auto-parts-place",
  storageBucket: "auto-parts-place.appspot.com",
  messagingSenderId: "667743730203",
  appId: "1:667743730203:web:1796151f57d848b43296be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
