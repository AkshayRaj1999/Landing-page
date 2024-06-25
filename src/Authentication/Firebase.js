import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUnDHR-G_zLTV8EmbpHe3TOF-zzLXTvfU",
  authDomain: "landing-page-e2424.firebaseapp.com",
  projectId: "landing-page-e2424",
  storageBucket: "landing-page-e2424.appspot.com",
  messagingSenderId: "695824455191",
  appId: "1:695824455191:web:c83db03591e12469ca2e52",
  measurementId: "G-D43WJHKYJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth.auth();

export {analytics,auth};