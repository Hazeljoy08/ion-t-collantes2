// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBG0nx1UmQST3DS-xRjKSzoyr_JPG6nEsw",
  authDomain: "it35-collantes.firebaseapp.com",
  projectId: "it35-collantes",
  storageBucket: "it35-collantes.appspot.com",
  messagingSenderId: "566903279656",
  appId: "1:566903279656:web:03c67cf0a3eb5551e7a51d",
  measurementId: "G-78EM569LS5"
};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}