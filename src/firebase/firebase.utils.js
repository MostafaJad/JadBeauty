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


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }

    return userRef;

};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;