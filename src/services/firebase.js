// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import { getFirestore, collection, addDoc, where, query, getDocs } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6pGpCINPSYAipchJ7tnKMwhkD5TOmkYs",
    authDomain: "edsu-uber.firebaseapp.com",
    projectId: "edsu-uber",
    storageBucket: "edsu-uber.appspot.com",
    messagingSenderId: "951452948463",
    appId: "1:951452948463:web:e4e4a5185061695acc081a",
    measurementId: "G-CVCEDJ9E9L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = getFirestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promt: 'select_account' });

export const auth = firebase.auth();
// export firebase
export default firebase;

//signINWithGoogle
export const signInWithGoogle = async () => {
    try {
        const res = await auth.signInWithPopup(provider);
        const user = res.user;
        const userRef = collection(db, "users");
        const result = await getDocs(query(userRef, where("uid", "==", user.uid)));
        if (result.empty) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (error) {
        alert(error.message)
    }
}
//RegisterWIthEmailAndPassword
export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        alert(err.message);
    }
};




//signInWithGoogle
export const signInWithEmailAndPassword = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
        alert(err.message);
    }
};
