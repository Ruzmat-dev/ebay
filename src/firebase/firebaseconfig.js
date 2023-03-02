import firebase from "firebase/app"
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAdDb_c_5G4pO9AI0uQREOcXn1xMb3nNe0",
    authDomain: "ebay-113bc.firebaseapp.com",
    projectId: "ebay-113bc",
    storageBucket: "ebay-113bc.appspot.com",
    messagingSenderId: "49285138282",
    appId: "1:49285138282:web:c294bbb20199bb6f64c713",
    measurementId: "G-1T65PG5CND"
};

const server = firebase.initializeApp(firebaseConfig);
const auth = server.auth()
const provider = new firebase.auth.GoogleAuthProvider();



export {auth , provider}