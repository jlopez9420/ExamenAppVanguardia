import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA9Us0EuiV5Mo-fzKMsKYpsgLm4GWfcpMQ",
    authDomain: "lunch-app-34bf1.firebaseapp.com",
    databaseURL: "https://lunch-app-34bf1.firebaseio.com",
    projectId: "lunch-app-34bf1",
    storageBucket: "lunch-app-34bf1.appspot.com",
    messagingSenderId: "921725943444"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase
  .auth
  .GoogleAuthProvider();
