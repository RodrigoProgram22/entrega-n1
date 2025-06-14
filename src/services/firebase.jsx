import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMr3TcP6TsPd5KzqTyDCD23yhH1augM3Q",
  authDomain: "coderhause-rodrigoromano.firebaseapp.com",
  projectId: "coderhause-rodrigoromano",
  storageBucket: "coderhause-rodrigoromano.firebasestorage.app",
  messagingSenderId: "396217270445",
  appId: "1:396217270445:web:9260b73ac7f9ba02058624"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();