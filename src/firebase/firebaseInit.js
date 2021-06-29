import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAOd0tz9Ybj_T4Ve6dhngJ2pHYggGxMjr0',
  authDomain: 'invoice-app-ff149.firebaseapp.com',
  projectId: 'invoice-app-ff149',
  storageBucket: 'invoice-app-ff149.appspot.com',
  messagingSenderId: '961399776915',
  appId: '1:961399776915:web:d077f0ec145259e7f80f66'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
