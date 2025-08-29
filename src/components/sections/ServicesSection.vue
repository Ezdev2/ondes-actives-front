<template>
  <section id="services" class="py-20 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          Nos <span class="bg-gradient-to-r from-ondes-green-400 to-ondes-green-600 bg-clip-text text-transparent">Services</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Une gamme complète de services pour accompagner votre entreprise à chaque étape de son développement
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Administration d'entreprise -->
        <div class="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 hover:border-ondes-green-200 transition-all duration-300 hover:shadow-xl animate-on-scroll">
          <div class="w-16 h-16 bg-gradient-to-r from-ondes-green-400 to-ondes-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ondes-green-100 text-ondes-green-700 text-sm font-medium mb-4">
            <span class="w-2 h-2 bg-ondes-green-500 rounded-full"></span>
            Administration
          </div>
          
          <h3 class="text-2xl font-bold text-gray-800 mb-4 group-hover:text-ondes-green-600 transition-colors">
            Administration d'entreprise
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Gestion complète de vos obligations administratives, comptables et fiscales pour vous permettre de vous concentrer sur votre cœur de métier.
          </p>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-center text-gray-700">
              <svg class="w-5 h-5 text-ondes-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Comptabilité et déclarations
            </li>
            <li class="flex items-center text-gray-700">
              <svg class="w-5 h-5 text-ondes-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Suivi des échéances
            </li>
            <li class="flex items-center text-gray-700">
              <svg class="w-5 h-5 text-ondes-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Gestion documentaire
            </li>
          </ul>
          
          <router-link to="/contact" class="inline-flex items-center text-ondes-green-600 hover:text-ondes-green-700 font-medium group-hover:translate-x-2 transition-all duration-300">
            En savoir plus
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>

        <!-- Assistance Urgente -->
        <div class="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 hover:border-ondes-red-200 transition-all duration-300 hover:shadow-xl animate-on-scroll">
          <div class="w-16 h-16 bg-gradient-to-r from-ondes-red-400 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ondes-red-100 text-ondes-red-700 text-sm font-medium mb-4">
            <span class="w-2 h-2 bg-ondes-red-500 rounded-full animate-pulse"></span>
            Urgence
          </div>
          
          <h3 class="text-2xl font-bold text-gray-800 mb-4 group-hover:text-ondes-red-600 transition-colors">
            Assistance Urgente
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Support réactif 24/7 pour toutes vos urgences administratives et situations critiques nécessitant une intervention rapide.
          </p>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-center text-gray-700">
              <svg class="w-5 h-5 text-ondes-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Réponse sous 2h
            </li>
            <li class="flex items-center text-gray-700">
              <svg class="w-5 h-5 text-ondes-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Support 24/7
            </li>
            <li class="flex items-center text-gray-700">
              <svg class="w-5 h-5 text-ondes-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Gestion de crise
            </li>
          </ul>
          
          <router-link to="/contact" class="inline-flex items-center text-ondes-red-600 hover:text-ondes-red-700 font-medium group-hover:translate-x-2 transition-all duration-300">
            Contactez-nous
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>

        <!-- Conseil & Formation -->
        <div class="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl animate-on-scroll">
          <div class="w-16 h-16 bg-gradient-to-r from-purple-400 to-ondes-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
            Formation
          </div>
          
          <h3 class="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
            Conseil & Formation
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Accompagnement stratégique et formation personnalisée pour développer vos compétences et optimiser votre organisation.
          </p>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-center text-gray-700">
              <svg class="w-5 h-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Audit et diagnostic
            </li>
            <li class="flex items-center text-gray-700">
              <svg class="w-5 h-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Formation sur mesure
            </li>
            <li class="flex items-center text-gray-700">
              <svg class="w-5 h-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Suivi personnalisé
            </li>
          </ul>
          
          <router-link to="/contact" class="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:translate-x-2 transition-all duration-300">
            Découvrir
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center animate-fade-in-up">
        <div class="bg-gradient-to-r from-ondes-green-50 to-emerald-50 p-12 rounded-3xl border border-ondes-green-100">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Prêt à simplifier votre gestion d'entreprise ?
          </h3>
          <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons vous accompagner
          </p>
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 bg-gradient-to-r from-ondes-green-400 to-ondes-green-600 text-white px-8 py-4 rounded-full hover:from-ondes-green-500 hover:to-ondes-green-700 transition-all duration-300 font-bold transform hover:scale-105 hover:shadow-lg"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Consultation Gratuite
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here if needed
</script>