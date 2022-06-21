
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuIgyjU8PrSMNlA70G7XuD6tjPUX_xnL4",
  authDomain: "miniblog-9078f.firebaseapp.com",
  projectId: "miniblog-9078f",
  storageBucket: "miniblog-9078f.appspot.com",
  messagingSenderId: "96180702338",
  appId: "1:96180702338:web:0fee5344155204ca10789b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};