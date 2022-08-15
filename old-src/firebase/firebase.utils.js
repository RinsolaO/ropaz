import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBFnSHxrh4GqFcvOZChfsvqYNMgZ16qloQ",
  authDomain: "ropaz-ecommerce.firebaseapp.com",
  projectId: "ropaz-ecommerce",
  storageBucket: "ropaz-ecommerce.appspot.com",
  messagingSenderId: "18417844718",
  appId: "1:18417844718:web:9fbcce5e55d9c3b13bceff",
  measurementId: "G-6KYFH95TNV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
