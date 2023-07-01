// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2ZzMcyDHQ5QOM3eyqA_6_12_xGUjgzQA",
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

// // Collection Ref
// const colRef = collection(db, "blogs");

// // Get Collection Data
// getDocs(colRef)
// .then ( (snapshot) => {
//   console.log(snapshot.docs)
// })