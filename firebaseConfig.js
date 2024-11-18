import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { Platform } from 'react-native'

// Firebase credentials for Android
const androidCredentials = {
  authDomain: 'ejaseventappmanager.firebaseapp.com',
  clientId:
    '325178674319-sogkkk1ep6n9tl3iavn501tvmj1a8l6k.apps.googleusercontent.com',
  appId: '1:325178674319:android:45998aae7fd70d5ec634fa',
  apiKey: 'AIzaSyBKye5wsc6cQs7R_G0H2RhMhTvzLnKkexk',
  databaseURL: '', // Optional
  storageBucket: 'ejaseventappmanager.firebasestorage.app',
  messagingSenderId: '325178674319',
  projectId: 'ejaseventappmanager',
}

// Firebase credentials for iOS
const iosCredentials = {
  authDomain: 'ejaseventappmanager.firebaseapp.com',
  clientId:
    '325178674319-utj83aiemf1t4vfg79s96h1858a2gqi7.apps.googleusercontent.com',
  appId: '1:325178674319:ios:b0b04c9948057aa8c634fa',
  apiKey: 'AIzaSyDjKZB4KXtZgGjsmsYFaBORf9Nx9JUgSm8',
  databaseURL: '', // Optional
  storageBucket: 'ejaseventappmanager.firebasestorage.app',
  messagingSenderId: '325178674319',
  projectId: 'ejaseventappmanager',
}

// Select the relevant credentials based on platform
const credentials = Platform.select({
  android: androidCredentials,
  ios: iosCredentials,
})

const app = initializeApp(credentials)
const auth = getAuth(app)
const firestore = getFirestore(app)

export { auth, firestore }
