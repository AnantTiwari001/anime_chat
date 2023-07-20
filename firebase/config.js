import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDgHrPQLoMMrQ6zRX5LAkMjAOvEGhfvb4Q",
  authDomain: "chatbot-42da.firebaseapp.com",
  databaseURL: "https://chatbot-42da-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatbot-42da",
  storageBucket: "chatbot-42da.appspot.com",
  messagingSenderId: "169511687154",
  appId: "1:169511687154:web:fd54ee32652bccd595516b",
  measurementId: "G-YXM16G7TNY"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;