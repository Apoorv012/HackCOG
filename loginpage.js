import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";

const LoginButton = document.getElementById("submit_btn");
const emailText = document.getElementById("typeEmailX");
const passwdText = document.getElementById("typePasswordX");

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
const analytics = getAnalytics(app);
const auth = getAuth(app);

const userLogIn = async() => {
    const LogInEmail = emailText.value;
    const LogInPassword = passwdText.value;
    signInWithEmailAndPassword(auth, LogInEmail, LogInPassword)
    .then((userCredentials) => {
        const user = userCredentials.user;
        alert("You have been signed in!");
    })
    .catch((error) => {
        const errCode = error.code;
        const errMsg = error.message;
        console.log(errCode + errMsg);
    })
}

LoginButton.addEventListener("click", () => {
    if (!isFormValid()) return;
    userLogIn();
});

function isFormValid() {
    if (!emailText.value) return false;
    if (!passwdText.value) return false;

    return true;
}