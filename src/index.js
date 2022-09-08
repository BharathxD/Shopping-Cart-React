import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './components/App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

console.log(process.env)

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_MY_FIREBASE_API_KEY}`,
  authDomain: "cart-app-b9a34.firebaseapp.com",
  projectId: "cart-app-b9a34",
  storageBucket: "cart-app-b9a34.appspot.com",
  messagingSenderId: `${process.env.REACT_APP_MY_FIREBASE_SENDER_ID}`,
  appId: `${process.env.REACT_APP_MY_FIREBASE_APP_ID}`
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

