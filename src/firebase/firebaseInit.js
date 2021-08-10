import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_API_AUTHDOMAIN,
  projectId: process.env.FIREBASE_API_PROJECTID,
  storageBucket: process.env.FIREBASE_API_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_API_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_API_APPID
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
