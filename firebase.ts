import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABBkos6eLKR3dSlzTyvYZG4mry7-jq6jw",
  authDomain: "chatgpt-messenger-2dc60.firebaseapp.com",
  projectId: "chatgpt-messenger-2dc60",
  storageBucket: "chatgpt-messenger-2dc60.appspot.com",
  messagingSenderId: "831540037848",
  appId: "1:831540037848:web:61207ec27269cb960b2fad",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
