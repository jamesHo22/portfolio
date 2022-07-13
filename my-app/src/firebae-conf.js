// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLVXhFAfsk-7DRyPVeT2GGMqCy85V9UHA",
  authDomain: "portfolio-53a83.firebaseapp.com",
  projectId: "portfolio-53a83",
  storageBucket: "portfolio-53a83.appspot.com",
  messagingSenderId: "220096042152",
  appId: "1:220096042152:web:f0d73569bf60eaa2241e9d",
  measurementId: "G-ENLQ2LDV4H",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);
