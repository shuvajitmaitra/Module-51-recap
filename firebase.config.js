// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmBL50xB0D64QKRp-Pc6gO9BGHqAcGouk",
    authDomain: "module-51-recap.firebaseapp.com",
    projectId: "module-51-recap",
    storageBucket: "module-51-recap.appspot.com",
    messagingSenderId: "516416218538",
    appId: "1:516416218538:web:c17ee21e854c5e908b37d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth