import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getMessaging } from 'firebase/messaging'

// Use a unified configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBKye5wsc6cQs7R_G0H2RhMhTvzLnKkexk',
  authDomain: 'ejaseventappmanager.firebaseapp.com',
  projectId: 'ejaseventappmanager',
  storageBucket: 'ejaseventappmanager.firebasestorage.app',
  messagingSenderId: '325178674319',
  appId: '1:325178674319:android:45998aae7fd70d5ec634fa',
}

let app

// Ensure Firebase is initialized only once
if (!app) {
  app = initializeApp(firebaseConfig)
}

// Initialize services
const auth = getAuth(app)
const firestore = getFirestore(app)
// If you're not using messaging yet, you can omit it
// const messaging = getMessaging(app);

export { auth, firestore } // Export initialized services
