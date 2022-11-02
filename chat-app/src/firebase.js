import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDCurTxn037j_-PMR9G-Hk5_mKejD1YSmQ",
  authDomain: "chat-563b4.firebaseapp.com",
  projectId: "chat-563b4",
  storageBucket: "chat-563b4.appspot.com",
  messagingSenderId: "293958740445",
  appId: "1:293958740445:web:4e9b05115c30377563ae34"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()