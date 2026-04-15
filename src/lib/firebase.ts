import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent, setUserProperties } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBF3KXBJahovsguEAmdgyLKEX4w_viBrVI",
  authDomain: "maissa-mansano.firebaseapp.com",
  projectId: "maissa-mansano",
  storageBucket: "maissa-mansano.firebasestorage.app",
  messagingSenderId: "869677921506",
  appId: "1:869677921506:web:e72d1095dd1cbda4e19abb",
  measurementId: "G-DMBTQQ1E1N",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics, logEvent, setUserProperties };
