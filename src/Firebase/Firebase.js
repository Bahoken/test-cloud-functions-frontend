// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/functions";
import "firebase/compat/auth";


// import { initializeApp } from "firebase-admin";
// import { getFunctions, httpsCallable } from "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-uS_yWiUWBC46gDeDzaLcDYvj_qThUvw",
  authDomain: "fir-app-2a212.firebaseapp.com",
  projectId: "fir-app-2a212",
  storageBucket: "fir-app-2a212.appspot.com",
  messagingSenderId: "728771883904",
  appId: "1:728771883904:web:22656482849fdcfd180765"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//invoke authentication 
const auth = app.auth();

// const functions = getFunctions(app);
const manageUser = firebase.functions().httpsCallable('manage_user');

const manageUserFunc = (data) => {
  return manageUser(data);
  // manageUser(data)
  // .then((res) => {
  //   const response = res;
  //   // const userId = res.data.userId;
  //   console.log('User created with ID:', res);
  //   return response;
  // })
}

export { manageUserFunc,auth };
// export default app;