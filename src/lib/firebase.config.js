// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByOWel-x_2R4JKCIE-iyahr2u5X_rIDeI",
  authDomain: "exhibitopia.firebaseapp.com",
  projectId: "exhibitopia",
  storageBucket: "exhibitopia.appspot.com",
  messagingSenderId: "936767493561",
  appId: "1:936767493561:web:be1a1ed06eea323905d268"
};

// Initialize Firebase
const app = ()=>{
    if(!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("no firebase configuration object provided."+"\n"+"add your web app");

    }else{
        console.log('firebase initialized');
    }
    return initializeApp(firebaseConfig);
}

export default app