import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZsOUxDLOVYP0-xaFkrPD5CjdW3WMGMRE",
  authDomain: "e-commerce-b0996.firebaseapp.com",
  projectId: "e-commerce-b0996",
  storageBucket: "e-commerce-b0996.firebasestorage.app",
  messagingSenderId: "170852715564",
  appId: "1:170852715564:web:79f86b6d714d98b001d589",
  measurementId: "G-8HYMNZQWH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 const auth = getAuth(app);
 export default auth