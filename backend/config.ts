import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}


const appFirebase = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

// Veriável responsável por acessar o storage
export const storageFirebase = appFirebase.storage()

// Variável responsável por acessar o cloudy
export const dbFirebase = appFirebase.firestore().collection('comments')


