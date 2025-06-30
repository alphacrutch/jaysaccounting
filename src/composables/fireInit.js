import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { ref } from 'vue';

const firebaseConfig = {

    apiKey: "AIzaSyAFBUdnYrQEeoqMzwwth5LsTdWzyNpVwEc",

    authDomain: "jays-business-solutions.firebaseapp.com",

    projectId: "jays-business-solutions",

    storageBucket: "jays-business-solutions.firebasestorage.app",

    messagingSenderId: "31777637782",

    appId: "1:31777637782:web:5bcd365f010c54a87f89b7",

    measurementId: "G-WV2J9LJN3L"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);

const auth = getAuth(app);

const basicInfoCollection = ref('applicants');

function LogInAPI(email, password) {

    signInWithEmailAndPassword(auth, email, password).then(credential => {
        console.log(credential.user);
    }).catch(e => console.log(e.message));
}

export { auth, db, basicInfoCollection, LogInAPI }