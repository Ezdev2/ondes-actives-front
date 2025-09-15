import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

// Validation des variables d'environnement
const requiredKeys = ['VITE_FIREBASE_API_KEY', 'VITE_FIREBASE_AUTH_DOMAIN', 'VITE_FIREBASE_PROJECT_ID']
for (const key of requiredKeys) {
  if (!import.meta.env[key]) {
    throw new Error(`Missing Firebase environment variable: ${key}`)
  }
}

// Initialiser Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app);

// Initialiser les services
export const auth = getAuth(app)
export const db = getFirestore(app)

// Connecter aux émulateurs en développement (optionnel)
// if (import.meta.env.DEV && import.meta.env.VITE_USE_FIREBASE_EMULATORS === 'true') {
//   try {
//     connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
//     connectFirestoreEmulator(db, 'localhost', 8080)
//   } catch (error) {
//     console.warn('Firebase emulators already connected or not available')
//   }
// }

// Helper pour vérifier si l'utilisateur est admin (authentifié)
export const isAdmin = () => {
  return !!auth.currentUser
}

export default app