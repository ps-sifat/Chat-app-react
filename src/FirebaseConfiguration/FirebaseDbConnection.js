import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBqJpAqTKpFEOElXxV4T_EtgNWdsw1J2oE",
  authDomain: "cheatchat2307.firebaseapp.com",
  projectId: "cheatchat2307",
  storageBucket: "cheatchat2307.appspot.com",
  messagingSenderId: "5813162147",
  appId: "1:5813162147:web:5f8d10203394136496af16",
};

// Initialize Firebase
const dbapp = initializeApp(firebaseConfig);

export default dbapp;
