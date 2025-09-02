import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase, isAdmin } from '@/lib/supabase'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAdminUser = ref(false)
  const loading = ref(true)

  const initAuth = async () => {
    try {
      // Vérifier la session existante
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user) {
        user.value = session.user
        isAdminUser.value = await isAdmin()
      }

      // Écouter les changements d'authentification
      supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          user.value = session.user
          isAdminUser.value = await isAdmin()
        } else if (event === 'SIGNED_OUT') {
          user.value = null
          isAdminUser.value = false
        }
      })
    } catch (error) {
      console.error('Error initializing auth:', error)
    } finally {
      loading.value = false
    }
  }

  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error

      // Tous les utilisateurs authentifiés sont considérés comme admin
      if (data.user) {
        isAdminUser.value = true
      }

      return { success: true }
    } catch (error) {
      console.error('Sign in error:', error)
      return { success: false, error: error.message }
    }
  }

  // const signUp = async (email, password) => {
  //   try {
  //     const { data, error } = await supabase.auth.signUp({
  //       email,
  //       password
  //     })

  //     if (error) throw error
      
  //     return { 
  //       success: true, 
  //       data,
  //       message: data.user && !data.user.email_confirmed_at ? 
  //         'Vérifiez votre email pour confirmer votre compte.' : 
  //         'Compte créé avec succès !'
  //     }
  //   } catch (error) {
  //     console.error('Sign up error:', error)
  //     return { success: false, error: error.message }
  //   }
  // }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      
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
      const { error } = await supabase.auth.resetPasswordForEmail(email)
      if (error) throw error
      return { success: true }
    } catch (error) {
      console.error('Reset password error:', error)
      return { success: false, error: error.message }
    }
  }

  return {
    user,
    isAdminUser,
    loading,
    initAuth,
    signIn,
    // signUp,
    signOut,
    resetPassword
  }
})