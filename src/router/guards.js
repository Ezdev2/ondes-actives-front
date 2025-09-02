import { useAuthStore } from '@/stores/auth'

export const requireAdmin = async (to, from, next) => {
  const authStore = useAuthStore()
  
  // Attendre que l'authentification soit initialisée
  while (authStore.loading) {
    await new Promise(resolve => setTimeout(resolve, 100))
  }
  
  if (!authStore.user || !authStore.isAdminUser) {
    next('/admin/login')
  } else {
    next()
  }
}

export const redirectIfAuthenticated = async (to, from, next) => {
  const authStore = useAuthStore()
  
  // Attendre que l'authentification soit initialisée
  while (authStore.loading) {
    await new Promise(resolve => setTimeout(resolve, 100))
  }
  
  if (authStore.user && authStore.isAdminUser) {
    next('/admin')
  } else {
    next()
  }
}