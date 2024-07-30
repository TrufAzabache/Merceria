// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBL_zTu9qvzE8Rw7NABww4w1TzpECK2d5k",
  authDomain: "tiendaelenanie.firebaseapp.com",
  projectId: "tiendaelenanie",
  storageBucket: "tiendaelenanie.appspot.com",
  messagingSenderId: "62254575669",
  appId: "1:62254575669:web:0483391d2303dce540c17c"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(appFirebase)
export const db = getFirestore(appFirebase)
export const storage = getStorage(appFirebase)
export default appFirebase;