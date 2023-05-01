import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqd6FMnJlvyDnl9VI_Zlh7oQm0wQcZMIM",
  authDomain: "spendtrack-c1cb8.firebaseapp.com",
  projectId: "spendtrack-c1cb8",
  storageBucket: "spendtrack-c1cb8.appspot.com",
  messagingSenderId: "865627139195",
  appId: "1:865627139195:web:9f3504cdf25424e0db86de",
  measurementId: "G-BRBTN96THF"
};

const app = initializeApp(firebaseConfig);
const webDB = getFirestore(app);

export default webDB;