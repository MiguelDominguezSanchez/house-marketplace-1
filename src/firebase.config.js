import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAiGzXCsTI0p9LsAbXAh-zBYkPVfrt6T0A',
	authDomain: 'house-marketplace-app-1.firebaseapp.com',
	projectId: 'house-marketplace-app-1',
	storageBucket: 'house-marketplace-app-1.appspot.com',
	messagingSenderId: '634133184611',
	appId: '1:634133184611:web:cbea0d4d3a8870499d7856',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
