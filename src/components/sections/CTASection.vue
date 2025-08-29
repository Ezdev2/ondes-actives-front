<template>
  <section class="py-20 bg-gradient-to-r from-ondes-red-400 via-rose-400 to-ondes-red-500 relative overflow-hidden">
    <!-- Decorative shapes -->
    <div
      class="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32 animate-spin-slow">
    </div>
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48 animate-spin-slow-reverse">
    </div>
    <div
      class="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16 animate-pulse-gentle">
    </div>

    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="animate-fade-in-up">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
          Prête à transformer votre <span class="text-yellow-200">entreprise</span> ?
        </h2>
        <p class="text-xl text-ondes-red-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Rejoignez les entrepreneurs qui ont choisi l'excellence.
          Contactez-nous aujourd'hui pour une consultation gratuite et personnalisée.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <router-link to="/contact"
            class="group bg-white text-ondes-red-600 px-10 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 font-bold text-lg transform hover:scale-105 hover:shadow-xl flex items-center gap-2">
            <BoltIcon class="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Démarrer maintenant
          </router-link>
          <a href="tel:+33123456789"
            class="group text-white border-2 border-white/30 px-8 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 font-medium flex items-center gap-2">
            <PhoneIcon class="w-5 h-5 group-hover:animate-bounce" />
            Appelez-nous
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { BoltIcon, PhoneIcon } from '@heroicons/vue/24/outline'
</script>