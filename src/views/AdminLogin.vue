<template>
  <div
    class="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4">
    <div class="max-w-md w-full">
      <div v-if="!showResetPassword" class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-green-100">
        <!-- Logo et titre -->
        <div class="text-center mb-8">
          <div
            class="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-gray-800 mb-2">Administration</h1>
          <p class="text-gray-600">Connectez-vous pour accéder au panneau d'administration</p>
        </div>

        <!-- Formulaire de connexion -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email administrateur
            </label>
            <input id="email" v-model="form.email" type="email" required
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              :class="{ 'border-red-300 focus:ring-red-500': error }" placeholder="admin@example.com" />
          </div>

          <!-- Mot de passe -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <div class="relative">
              <input id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'" required
                class="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                :class="{ 'border-red-300 focus:ring-red-500': error }" placeholder="••••••••" />
              <button type="button" @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Message d'erreur -->
          <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4">
            <div class="flex">
              <svg class="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p class="text-sm text-red-700">{{ error }}</p>
            </div>
          </div>

          <!-- Bouton de connexion -->
          <button type="submit" :disabled="loading"
            class="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white py-3 px-4 rounded-lg font-medium hover:from-green-500 hover:to-emerald-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
            <span v-if="loading" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              Connexion...
            </span>
            <span v-else>Se connecter</span>
          </button>
          <!-- Lien mot de passe oublié et inscription -->
          <div class="mt-6 text-center space-y-2">
            <button @click="showResetPassword = true"
              class="block text-sm text-green-600 hover:text-green-700 font-medium mx-auto">
              Mot de passe oublié ?
            </button>
          </div>
        </form>
        <!-- Lien retour -->
        <div class="text-center mt-6">
          <router-link to="/"
            class="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 font-medium transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Retour au site
          </router-link>
        </div>

        <!-- Modal signup -->
        <div v-if="showSignup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 class="text-lg font-medium text-gray-900 mb-4">Créer un compte administrateur</h3>
            <form @submit.prevent="handleSignup">
              <div class="space-y-4">
                <input v-model="signupForm.email" type="email" required placeholder="Votre email"
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                <input v-model="signupForm.password" type="password" required
                  placeholder="Mot de passe (min. 6 caractères)"
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                <input v-model="signupForm.confirmPassword" type="password" required
                  placeholder="Confirmer le mot de passe"
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div v-else class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-green-100">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Réinitialiser le mot de passe</h3>
          <form @submit.prevent="handleResetPassword">
            <input v-model="resetEmail" type="email" required placeholder="Votre email administrateur"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4" />
            <div class="flex gap-3">
              <button type="button" @click="showResetPassword = false"
                class="flex-1 px-4 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
                Annuler
              </button>
              <button type="submit" class="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Envoyer
              </button>
            </div>
          </form>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const form = ref({
  email: '',
  password: ''
})

const loading = ref(false)
const error = ref('')
const showPassword = ref(false)
const showResetPassword = ref(false)
const resetEmail = ref('')
const showSignup = ref(false)
const signupForm = ref({
  email: '',
  password: '',
  confirmPassword: ''
})
// const signupLoading = ref(false)
// const signupError = ref('')

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  const result = await authStore.signIn(form.value.email, form.value.password)

  if (result.success) {
    router.push('/admin')
  } else {
    error.value = result.error
  }

  loading.value = false
}

const handleResetPassword = async () => {
  const result = await authStore.resetPassword(resetEmail.value)

  if (result.success) {
    alert('Email de réinitialisation envoyé !')
    showResetPassword.value = false
    resetEmail.value = ''
  } else {
    alert('Erreur lors de l\'envoi : ' + result.error)
  }
}

// const handleSignup = async () => {
//   signupError.value = ''

//   if (signupForm.value.password !== signupForm.value.confirmPassword) {
//     signupError.value = 'Les mots de passe ne correspondent pas'
//     return
//   }

//   if (signupForm.value.password.length < 6) {
//     signupError.value = 'Le mot de passe doit contenir au moins 6 caractères'
//     return
//   }

//   signupLoading.value = true

//   const result = await authStore.signUp(signupForm.value.email, signupForm.value.password)

//   if (result.success) {
//     alert(result.message || 'Compte créé avec succès ! Vous pouvez maintenant vous connecter.')
//     closeSignup()
//   } else {
//     signupError.value = result.error
//   }

//   signupLoading.value = false
// }

// const closeSignup = () => {
//   showSignup.value = false
//   signupForm.value = {
//     email: '',
//     password: '',
//     confirmPassword: ''
//   }
//   signupError.value = ''
// }
</script>