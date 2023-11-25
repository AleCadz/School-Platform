// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVcOaOT3y-PJaaTOm6IXa9GaA0nfGvPIo",
  authDomain: "tecacademymante.firebaseapp.com",
  projectId: "tecacademymante",
  storageBucket: "tecacademymante.appspot.com",
  messagingSenderId: "625122249835",
  appId: "1:625122249835:web:0a6875db0bf396d7cff52e",
  measurementId: "G-2MHE1V209Q"
};

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);
const db = getFirestore(appFireBase);
const analytics = getAnalytics(appFireBase);

export { appFireBase, db }; // Exporta appFireBase y db por separado