import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_EWACz2OSuM9-FqrEzucHikGawV-BMng",
  authDomain: "portfolio-e8c58.firebaseapp.com",
  projectId: "portfolio-e8c58",
  storageBucket: "portfolio-e8c58.firebasestorage.app",
  messagingSenderId: "709738877292",
  appId: "1:709738877292:web:428ae8b72dbefb935fe349",
  measurementId: "G-J228VQ5JY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
