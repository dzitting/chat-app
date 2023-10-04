// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBykGQBcSX1y-VumggtDWKPSe5-o8XUduM",
  authDomain: "chatapp-dhz.firebaseapp.com",
  projectId: "chatapp-dhz",
  storageBucket: "chatapp-dhz.appspot.com",
  messagingSenderId: "778040592514",
  appId: "1:778040592514:web:9e2ee575ef201bcfa6cc9b",
  measurementId: "G-5HKFL2CFXN"
};

// Initialize Firebase
const  app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

const usersCollectionRef = await collection(db, 'users');
export const users = await getDocs(usersCollectionRef);
