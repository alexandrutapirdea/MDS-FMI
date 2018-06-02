import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
    apiKey: "AIzaSyBW9_T85JsMKa8oC3Jz_mMDjB4sLq6yme0",
    authDomain: "test-firebase-dal.firebaseapp.com",
    databaseURL: "https://test-firebase-dal.firebaseio.com",
    projectId: "test-firebase-dal",
    storageBucket: "test-firebase-dal.appspot.com",
    messagingSenderId: "97562333850"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
};