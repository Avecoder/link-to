import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyD3ENqWFmf6BUfpiOelc80-Pt9SRzR1mIA",
    authDomain: "lnk-to-9a63f.firebaseapp.com",
    databaseURL: "https://lnk-to-9a63f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lnk-to-9a63f",
    storageBucket: "lnk-to-9a63f.appspot.com",
    messagingSenderId: "1076410125898",
    appId: "1:1076410125898:web:cafa8eb5e50e3809b820b3",
    measurementId: "G-BLBRD4WD0Z"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);