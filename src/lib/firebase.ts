import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyACFnPyc8709TA1TOMz8qFOZLrChvEZJKc",
  authDomain: "pred-tools-dir.firebaseapp.com",
  projectId: "pred-tools-dir",
  storageBucket: "pred-tools-dir.firebasestorage.app",
  messagingSenderId: "492631882780",
  appId: "1:492631882780:web:7a7df920805b55402b33d9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { app, db };
