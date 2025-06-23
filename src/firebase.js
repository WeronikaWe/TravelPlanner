// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArfJ3Nd21pHlADO1pc05YtLYM1Y-rGQnY",
  authDomain: "travel-planner-a4eb4.firebaseapp.com",
  projectId: "travel-planner-a4eb4",
  storageBucket: "travel-planner-a4eb4.firebasestorage.app",
  messagingSenderId: "355686092289",
  appId: "1:355686092289:web:ea0db823c9a18a854c7a00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Export the database
const db = getFirestore(app);
export { db };