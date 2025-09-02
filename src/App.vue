<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

const route = useRoute()
const authStore = useAuthStore()

const isAdminRoute = computed(() => {
  return route.path.startsWith('/admin')
})

onMounted(async () => {
  await authStore.initAuth()
})
</script>

<template>
  <div id="app">
    <!-- Écran de chargement initial -->
    <div v-if="authStore.loading" class="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div class="text-center">
        <div
          class="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <p class="text-gray-600">Chargement...</p>
      </div>
    </div>

    <div v-else>
      <AppHeader v-if="!isAdminRoute" />
      <router-view />
      <AppFooter v-if="!isAdminRoute" />
    </div>
  </div>
</template>

<style scoped></style>
