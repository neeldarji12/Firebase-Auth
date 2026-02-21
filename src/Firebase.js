

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "shreya-e2366.firebaseapp.com",
  projectId: "shreya-e2366",
  storageBucket: "shreya-e2366.firebasestorage.app",
  messagingSenderId: "453305684635",
  appId: "1:453305684635:web:8132198d50a0fdd315ac3e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
