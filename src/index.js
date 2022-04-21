import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC7ma9ZH8liAG6XVAskj4wQJWZ7Cem_GtE",
  authDomain: "juan-estore-clave.firebaseapp.com",
  projectId: "juan-estore-clave",
  storageBucket: "juan-estore-clave.appspot.com",
  messagingSenderId: "1084549996187",
  appId: "1:1084549996187:web:525fa07ca0d8bfaeac303e",
  measurementId: "G-ZB5QD77ZZ0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
