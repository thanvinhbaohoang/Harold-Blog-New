// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseAPI = import.meta.env.VITE_FIREBASE_API

const firebaseConfig = {
  apiKey: firebaseAPI ,
  authDomain: "harold-blog.firebaseapp.com",
  projectId: "harold-blog",
  storageBucket: "harold-blog.appspot.com",
  messagingSenderId: "693724752105",
  appId: "1:693724752105:web:cfba19ae868ea57d6e2878",
  measurementId: "G-52K1NS9WJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init Service
export const db = getFirestore(app);

