import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9ga04Mhe9n2F12vpOtp1Ijek5HS5L3cc",
  authDomain: "olx-clone2-a785b.firebaseapp.com",
  projectId: "olx-clone2-a785b",
  storageBucket: "olx-clone2-a785b.appspot.com",
  messagingSenderId: "913485731391",
  appId: "1:913485731391:web:87dd3c25092e9c8b16ca8a",
  measurementId: "G-YH6805DF5H"
};
export default firebase.initializeApp(firebaseConfig)
