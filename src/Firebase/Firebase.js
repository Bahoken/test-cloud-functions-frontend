// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/functions";

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
// const functions = getFunctions(app);
const registerUser = firebase.functions().httpsCallable('registerUser');

const registerUserFunc = (data) => {
  
  registerUser({ 
    email: data.mail, 
    password: data.pass, 
    firstname: data.firstname, 
    name: data.name, 
    country: data.country, 
    city: data.city ,
    phone: data.phone
  })
  .then((res) => {
    const userId = res.data.userId;
    console.log('User created with ID:', userId);
  })

}

export { registerUserFunc };
// export default app;