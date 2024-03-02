// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.APIKEY,
  // authDomain: process.env.AUTHDOMAIN,
  // projectId: process.env.PROJECTID,
  // storageBucket: process.env.STORAGEBUCKET,
  // messagingSenderId: process.env.MESSAGINGSENDERID,
  // appId: process.env.APPID,
  apiKey: "AIzaSyCOIvpIeDDt32EuwQ5DMqSoG0e7PCXBnZg",
  authDomain: "socialhub-rahaman.firebaseapp.com",
  projectId: "socialhub-rahaman",
  storageBucket: "socialhub-rahaman.appspot.com",
  messagingSenderId: "458006600521",
  appId: "1:458006600521:web:0992cc7dae0f711954d898",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
