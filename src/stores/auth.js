import { defineStore } from 'pinia'
import { ref } from 'vue'
import { 
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  onAuthStateChanged
} from 'firebase/auth'
import { auth, isAdmin } from '@/lib/firebase'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAdminUser = ref(false)
  const loading = ref(true)

  const initAuth = async () => {
    try {
      // Écouter les changements d'authentification
      onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          user.value = {
            id: firebaseUser.uid,
            email: firebaseUser.email,
            emailVerified: firebaseUser.emailVerified
          }
          isAdminUser.value = isAdmin()
        } else {
          user.value = null
          isAdminUser.value = false
        }
        loading.value = false
      })
    } catch (error) {
      console.error('Error initializing auth:', error)
      loading.value = false
    }
  }

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      
      // Tous les utilisateurs authentifiés sont considérés comme admin
      if (userCredential.user) {
        isAdminUser.value = true
      }
      
      return { success: true }
    } catch (error) {
      console.error('Sign in error:', error)
      let errorMessage = 'Erreur de connexion'
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'Aucun compte trouvé avec cet email'
          break
        case 'auth/wrong-password':
          errorMessage = 'Mot de passe incorrect'
          break
        case 'auth/invalid-email':
          errorMessage = 'Email invalide'
          break
        case 'auth/too-many-requests':
          errorMessage = 'Trop de tentatives. Réessayez plus tard'
          break
        case 'auth/invalid-credential':
          errorMessage = 'Email ou mot de passe incorrect'
          break
        default:
          errorMessage = error.message
      }
      
      return { success: false, error: errorMessage }
    }
  }

  const signOut = async () => {
    try {
      await firebaseSignOut(auth)
      user.value = null
      isAdminUser.value = false
      return { success: true }
    } catch (error) {
      console.error('Sign out error:', error)
      return { success: false, error: error.message }
    }
  }

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email)
      return { success: true }
    } catch (error) {
      console.error('Reset password error:', error)
      let errorMessage = 'Erreur lors de l\'envoi'
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'Aucun compte trouvé avec cet email'
          break
        case 'auth/invalid-email':
          errorMessage = 'Email invalide'
          break
        default:
          errorMessage = error.message
      }
      
      return { success: false, error: errorMessage }
    }
  }

  return {
    user,
    isAdminUser,
    loading,
    initAuth,
    signIn,
    signOut,
    resetPassword
  }
})