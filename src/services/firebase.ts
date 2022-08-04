import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2YztQaQrarpHPEx36yuDpLAnuWENObY0",
  authDomain: "auth-ex-8d51f.firebaseapp.com",
  projectId: "auth-ex-8d51f",
  storageBucket: "auth-ex-8d51f.appspot.com",
  messagingSenderId: "973698187142",
  appId: "1:973698187142:web:6dd8e6b0c242de54f77607"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)