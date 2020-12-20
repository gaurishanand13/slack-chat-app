import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9eG0Ey4FgYX_ifwrIIe0OiCHXimWQRbc",
  authDomain: "fir-slack-app-79fd7.firebaseapp.com",
  projectId: "fir-slack-app-79fd7",
  storageBucket: "fir-slack-app-79fd7.appspot.com",
  messagingSenderId: "517860045664",
  appId: "1:517860045664:web:18e089ff78d895f97b6405",
  measurementId: "G-DFWLN45S3Y",
};

// Initializing firebaze
firebase.initializeApp(firebaseConfig);

// Initializing auth and firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};

const signOut = () => {
  auth.signOut();
};

async function getUserDocument(uid) {
  if (uid != null) {
    try {
      const userDocument = await firestore.doc(`users/${uid}`);
      return userDocument;
    } catch (error) {
      console.log("error in fetching Document", error.message);
    }
  } else {
    return null;
  }
}

async function createOrGetUserProfileDocument(user) {
  if (user == null) {
    return null;
  }

  const uid = user.uid;
  const userRef = await firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get(); //Getting the snapshot of required doc where we have information of the current user.
  if (snapshot.exists == false) {
    //create a document of this user , as this user is logging in for the first time
    const { displayName, email, photoURL } = user;
    try {
      const user = {
        display_name: displayName,
        email: email,
        photo_url: photoURL,
        created_at: new Date(),
      };
      await userRef.set(user);
    } catch (error) {
      console.log("Error in creating user docs", error.message);
    }
  }

  return getUserDocument(user.uid);
}

export { signInWithGoogle, signOut, createOrGetUserProfileDocument };
