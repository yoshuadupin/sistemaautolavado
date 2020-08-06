import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpZuy6mdaR5VG2Unh8zxeKA7bwKvAQtA4",
    authDomain: "carwash-system-8b85c.firebaseapp.com",
    databaseURL: "https://carwash-system-8b85c.firebaseio.com",
    projectId: "carwash-system-8b85c",
    storageBucket: "carwash-system-8b85c.appspot.com",
    messagingSenderId: "78288873853",
    appId: "1:78288873853:web:63897027c72b0bc2a60414",
    measurementId: "G-JF50S7358S"
}

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;