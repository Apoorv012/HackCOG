import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

const LoginButton = document.getElementById("submit_btn");
const nameText = document.getElementById("nameTextField");
const emailText = document.getElementById("typeEmailX");
const passwdText = document.getElementById("typePasswordX");
const addressText = document.getElementById("addressTextField");
const SignUpWithGoogleButton = document.getElementById("googlebtn");

const firebaseConfig = {
    apiKey: "AIzaSyC1brUIhjSaqiREif6IvBLfeYrqJMwIcnk",
    authDomain: "enovate-7c07a.firebaseapp.com",
    projectId: "enovate-7c07a",
    storageBucket: "enovate-7c07a.appspot.com",
    messagingSenderId: "76574137043",
    appId: "1:76574137043:web:7e5ff492b2dbb35a2b5226",
    measurementId: "G-WD7ZEV8T6Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const userSignUp = async() => {
    const signUpEmail = emailText.value;
    const signUpPassword = passwdText.value;
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredentials) => {
        const user = userCredentials.user;
        alert("Your account have been made!");
    })
    .catch((error) => {
        const errCode = error.code;
        const errMsg = error.message;
        console.log(errCode + errMsg);
    })
}

SignUpWithGoogleButton.addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            alert("Successfully signed up using google!");
        })
        .catch((error) => {
            const errCode = error.code;
            const errMsg = error.message;
            
            console.log(errCode + errMsg);
        });
})

LoginButton.addEventListener("click", () => {
    if (!isFormValid()) return;
    userSignUp();
});

function isFormValid() {
    if (!emailText.value) return false;
    if (!passwdText.value) return false;

    return true;
}