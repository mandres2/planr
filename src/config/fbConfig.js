// Initialize Firebase
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDHG6ypGqcWqthsf0Rwa-MxoQ1nJGPJOSk",
    authDomain: "planr-eade0.firebaseapp.com",
    databaseURL: "https://planr-eade0.firebaseio.com",
    projectId: "planr-eade0",
    storageBucket: "planr-eade0.appspot.com",
    messagingSenderId: "592519179806",
    appId: "1:592519179806:web:7c6e22ff049bc3a12cc80f",
    measurementId: "G-RHQB40EZDM"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase;