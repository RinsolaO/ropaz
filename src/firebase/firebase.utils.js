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

// STORE USER GOTTEN FROM GOOGLE AUTH IN OUR DB

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log(firestore.doc(`users/${userAuth.uid}`));

  const snapShot = await userRef.get();
  console.log(firestore.doc(`users/OOsTG3qWCIWVD8Iwfij8GXVoA7X2`).get());

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
