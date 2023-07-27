// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBMPeYgU7T0JjTNarf5y8DbEnMnP2Ow6KE",
  authDomain: "ng-exersice.firebaseapp.com",
  projectId: "ng-exersice",
  storageBucket: "ng-exersice.appspot.com",
  messagingSenderId: "62835525841",
  appId: "1:62835525841:web:886997908fbdbf194e9df0",
  measurementId: "G-ELV3G27394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
