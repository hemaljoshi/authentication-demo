import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBYR5yTw39WtnFHfeIQkQspp-EmBDIECkA',
  authDomain: 'auth-dev-dynamic.firebaseapp.com',
  projectId: 'auth-dev-dynamic',
  storageBucket: 'auth-dev-dynamic.appspot.com',
  messagingSenderId: '582059054575',
  appId: '1:582059054575:web:5dcf217cfb2b708e03521a',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;
