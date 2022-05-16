import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7ma9ZH8liAG6XVAskj4wQJWZ7Cem_GtE",
  authDomain: "juan-estore-clave.firebaseapp.com",
  projectId: "juan-estore-clave",
  storageBucket: "juan-estore-clave.appspot.com",
  messagingSenderId: "1084549996187",
  appId: "1:1084549996187:web:525fa07ca0d8bfaeac303e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;