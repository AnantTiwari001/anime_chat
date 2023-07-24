import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyArSFCOyFJ43eF0GA4shAJrpL9R4EPPGtc",
  authDomain: "chatbot-8742e.firebaseapp.com",
  projectId: "chatbot-8742e",
  storageBucket: "chatbot-8742e.appspot.com",
  messagingSenderId: "607056698936",
  appId: "1:607056698936:web:b218b2b63ed5269e3f10cd",
  measurementId: "G-VXH53CCQZZ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;