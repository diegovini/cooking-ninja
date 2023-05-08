import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCfOup1pvy3j-oUUEmpFAlM4CdlT8Th4Os",
    authDomain: "cooking-ninja-d.firebaseapp.com",
    projectId: "cooking-ninja-d",
    storageBucket: "cooking-ninja-d.appspot.com",
    messagingSenderId: "777232501935",
    appId: "1:777232501935:web:3d771a1a865ba11d91185a"
  };


  //init firebase

  firebase.initializeApp(firebaseConfig);

  //init services

  const projectFireStore = firebase.firestore();

  export { projectFireStore };