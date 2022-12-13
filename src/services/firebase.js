// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);