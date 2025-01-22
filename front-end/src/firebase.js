import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDAQH12LduSMpbLX7IasefcFPmgwb8blE4",
    authDomain: "crude-3c6e9.firebaseapp.com",
    databaseURL: "https://crude-3c6e9-default-rtdb.firebaseio.com",
    projectId: "crude-3c6e9",
    storageBucket: "crude-3c6e9.firebasestorage.app",
    messagingSenderId: "784083781840",
    appId: "1:784083781840:web:2bbb46a02074e11a16f6d5",
    measurementId: "G-S6L8N8X248"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;
