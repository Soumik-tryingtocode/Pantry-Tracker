
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, getfirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrxgSdcwQq-at7hnm-FSDhJzuuvPosISA",
  authDomain: "pantry-tracker-5f0f3.firebaseapp.com",
  projectId: "pantry-tracker-5f0f3",
  storageBucket: "pantry-tracker-5f0f3.appspot.com",
  messagingSenderId: "608712026920",
  appId: "1:608712026920:web:4d8afe7090b0ec0ca5be1d",
  measurementId: "G-82GR2GDXVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.error(error);
    });
};

const signOutUser = () => {
  signOut(auth)
    .then(() => {
      console.log('User signed out');
    })
    .catch((error) => {
      console.error(error);
    });
};

export { auth, firestore, signInWithGoogle, signOutUser, onAuthStateChanged, storage };
