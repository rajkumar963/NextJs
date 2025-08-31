// firebase/client.ts

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzD_rMfDiHCTPnsUN8SCpijgPnXWLefV4",
  authDomain: "ai-interviewer-85fa0.firebaseapp.com",
  projectId: "ai-interviewer-85fa0",
  storageBucket: "ai-interviewer-85fa0.appspot.com", // ✅ corrected
  messagingSenderId: "622759701956",
  appId: "1:622759701956:web:7241b8eb8787fcd1314891",
  measurementId: "G-T9RF10TTRC",
};

// ✅ Always initialize once, even in Next.js
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// ✅ Capitalize & correct export
export const googleProvider = new GoogleAuthProvider();
