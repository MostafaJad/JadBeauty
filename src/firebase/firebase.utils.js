import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    
        apiKey: "AIzaSyAkDmE3sP_L1eK0cxMIUZB7EiK4f7pLWzc",
        authDomain: "jadbeauty-10828.firebaseapp.com",
        databaseURL: "https://jadbeauty-10828.firebaseio.com",
        projectId: "jadbeauty-10828",
        storageBucket: "jadbeauty-10828.appspot.com",
        messagingSenderId: "229366279609",
        appId: "1:229366279609:web:ba29aee341791e016e5a68",
        measurementId: "G-D6WXTXC56V"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;