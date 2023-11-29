import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import {getStorage, uploadBytes, ref} from 'firebase/storage';

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
const storage = getStorage(appFireBase)

export function uploadFile(file, ruta){
  const storageRef = ref(storage, ruta)
  uploadBytes (storageRef, file).then(snapshot=>{
    console.log(snapshot)
  })
}

export { appFireBase, db, storage}; // Exporta appFireBase y db por separado