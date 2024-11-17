import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBKye5wsc6cQs7R_G0H2RhMhTvzLnKkexk',
  authDomain: 'ejaseventappmanager.firebaseapp.com',
  projectId: 'ejaseventappmanager',
  storageBucket: 'ejaseventappmanager.firebasestorage.app',
  messagingSenderId: '325178674319',
  appId: '1:325178674319:android:45998aae7fd70d5ec634fa',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)

export { auth, firestore }
