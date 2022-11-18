import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDkxMJeRP6MhUWbk9aoal_4wWAllSfXI40",
    authDomain: "coder-react-app-7ae0a.firebaseapp.com",
    projectId: "coder-react-app-7ae0a",
    storageBucket: "coder-react-app-7ae0a.appspot.com",
    messagingSenderId: "171694564786",
    appId: "1:171694564786:web:e22fdf1fc1c54e811f70ab"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)