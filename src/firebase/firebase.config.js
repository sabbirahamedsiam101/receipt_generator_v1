// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE9H6JAX8Iu6IBp5CZSlKQRQAQc9FMMuI",
  authDomain: "receipt-generator-v1.firebaseapp.com",
  projectId: "receipt-generator-v1",
  storageBucket: "receipt-generator-v1.appspot.com",
  messagingSenderId: "32141288530",
  appId: "1:32141288530:web:182d1015472d0e7a17ab8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth