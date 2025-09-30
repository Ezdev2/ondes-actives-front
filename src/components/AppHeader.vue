<template>
  <header class="bg-white/95 sticky top-0 z-50">
    <nav class="max-w-[90rem] mx-auto px-4 py-2 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <!-- <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <img :src="logo" alt="">
          </router-link>
        </div> -->
        <div class="flex items-center">
          <router-link to="/" class="flex flex-col items-center leading-none">

            <span class="text-[2.2rem] text-[#f69392] tracking-tight font-logo-ondes">
              Ondes
            </span>

            <span class="text-lg text-[#18aa4e] tracking-wider -mt-1 transform scale-y-90 font-logo-actives">
              ACTIVES
            </span>

          </router-link>
        </div>


        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link v-for="item in navigation" :key="item.name" :to="item.href"
            class="text-gray-700 hover:text-green-600 px-3 py-2 text-md font-medium transition-colors duration-200"
            :class="{ 'text-green-600 font-semibold': item.current }">
            {{ item.name }}
          </router-link>
          <router-link to="/contact"
            class="bg-gradient-to-r from-ondes-green-400 to-ondes-green-600 text-white px-6 py-2 rounded-full hover:from-ondes-green-500 hover:to-ondes-green-700 transition-all duration-300 font-medium transform hover:scale-105">
            Contact
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-700 hover:text-ondes-green-600 focus:outline-none focus:text-ondes-green-600">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-show="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
          <router-link v-for="item in navigation" :key="item.name" :to="item.href" @click="mobileMenuOpen = false"
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-ondes-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            :class="{ 'text-ondes-green-600 bg-ondes-green-50': item.current }">
            {{ item.name }}
          </router-link>
          <router-link to="/contact" @click="mobileMenuOpen = false"
            class="block w-full text-center bg-gradient-to-r from-ondes-green-400 to-ondes-green-600 text-white px-6 py-3 rounded-full hover:from-ondes-green-500 hover:to-ondes-green-700 transition-all duration-300 font-medium mt-4">
            Contact
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useSiteStore } from '@/stores/site'
import { storeToRefs } from 'pinia'
import logo from "@/assets/logo.svg"

const route = useRoute()
const siteStore = useSiteStore()
const { navigation } = storeToRefs(siteStore)

const mobileMenuOpen = ref(false)

watch(() => route.path, (newPath) => {
  siteStore.updateCurrentNavigation(newPath)
  mobileMenuOpen.value = false
}, { immediate: true })
</script>