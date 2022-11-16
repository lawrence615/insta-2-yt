// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration  
const firebaseConfig = {
  apiKey: "AIzaSyAaqFoSeP_1cALnybj64VjdOR9HrR_-7Js",
  authDomain: "insta-2-yt-50747.firebaseapp.com",
  projectId: "insta-2-yt-50747",
  storageBucket: "insta-2-yt-50747.appspot.com",
  messagingSenderId: "523764792682",
  appId: "1:523764792682:web:4da5d9b1ccd213bc08b913",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
