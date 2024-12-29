// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJXwlde4VXVL_Le8_yfTGioyH07IsFw1E",
  authDomain: "next-notion-4f17e.firebaseapp.com",
  projectId: "next-notion-4f17e",
  storageBucket: "next-notion-4f17e.firebasestorage.app",
  messagingSenderId: "265553018711",
  appId: "1:265553018711:web:9c9cca5d99b57c7d318812"
};

// Initialize Firebase
const app = getApps().length===0 ? initializeApp(firebaseConfig) : getApp();
const db=getFirestore(app)

export {db};