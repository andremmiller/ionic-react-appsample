import firebase from 'firebase'
import { toast } from './toast'

const firebaseConfig = {
    apiKey: "AIzaSyDWG7cB649TmDkiEpNrkB63rMwLmr8le_Q",
    authDomain: "ionic-react-app-d7106.firebaseapp.com",
    databaseURL: "https://ionic-react-app-d7106.firebaseio.com",
    projectId: "ionic-react-app-d7106",
    storageBucket: "ionic-react-app-d7106.appspot.com",
    messagingSenderId: "278599595993",
    appId: "1:278599595993:web:ac18fa983a368be8b68bc8",
    measurementId: "G-1W9GCJMVGL"
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

export async function loginUser(username: string, password: string) {
    try {
        const res = await auth.signInWithEmailAndPassword(username, password) 
        console.log(res)
        return true
    } catch(e) {
        toast(e.message)
        return false
    }
}

export async function registerUser(username: string, password: string) {
    try {
        const res = await auth.createUserWithEmailAndPassword(username, password)
        console.log(res)
        return true
    } catch(e) {
        toast(e.message)
        return false
    }
}