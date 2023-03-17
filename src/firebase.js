import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD7ngEY8d-eOeR3P0PCCvoOpZzEJ8QD1EE",
  authDomain: "video-share-app-3ec21.firebaseapp.com",
  projectId: "video-share-app-3ec21",
  storageBucket: "video-share-app-3ec21.appspot.com",
  messagingSenderId: "14530487850",
  appId: "1:14530487850:web:45126814e648b843694553"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;