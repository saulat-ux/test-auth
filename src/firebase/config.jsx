
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB65AJmhTu9xK3_3r4r41JXePEYKqYLQJ0",
    authDomain: "user-auth-a765f.firebaseapp.com",
    projectId: "user-auth-a765f",
    storageBucket: "user-auth-a765f.appspot.com",
    messagingSenderId: "799955583350",
    appId: "1:799955583350:web:d780674614b9464857fa57"
  };

  initializeApp(firebaseConfig)

  const auth = getAuth()

  export {auth}