<template>
  <section
    class="relative bg-gradient-to-br from-white/50 via-pink-25 to-green-50 py-20 overflow-hidden min-h-[50vh] flex items-center">
    <!-- Cercles décoratifs -->
    <div
      class="absolute top-16 left-20 w-20 h-20 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full opacity-60 animate-float">
    </div>
    <div
      class="absolute top-1/3 right-16 w-16 h-16 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full opacity-50 animate-float-delay-1">
    </div>
    <div
      class="absolute bottom-24 left-1/4 w-12 h-12 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-40 animate-float-delay-2">
    </div>
    <div
      class="absolute top-1/2 right-1/3 w-8 h-8 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-30 animate-pulse-gentle">
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div class="animate-slide-up">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Contactez Ondes Actives
        </h1>
      </div>

      <div class="animate-slide-up-delay">
        <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre projet entrepreneurial.
        </p>
      </div>

      <!-- Contact rapide -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up-delay-2">
        <a v-for="(method, index) in contactMethods" :key="index" :href="method.link" :class="`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 
            hover:border-${method.color === 'green' ? 'green' : method.color === 'blue' ? 'blue' : 'pink'}-200 
            transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg flex flex-col items-center`">
          <div :class="`w-12 h-12 bg-gradient-to-r 
              ${method.color === 'green'
              ? 'from-green-400 to-emerald-500'
              : method.color === 'blue'
                ? 'from-blue-400 to-cyan-500'
                : 'from-pink-400 to-rose-500'} 
              rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="method.icon === 'phone'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              <path v-else-if="method.icon === 'mail'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              <path v-else-if="method.icon === 'share'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </div>
          <h3 class="font-bold text-gray-800 mb-1">{{ method.title }}</h3>
          <p class="text-sm text-gray-600 mb-2">{{ method.description }}</p>
          <p :class="`text-sm font-medium ${method.color === 'green'
              ? 'text-green-600'
              : method.color === 'blue'
                ? 'text-blue-600'
                : 'text-pink-600'
            }`">
            {{ method.value }}
          </p>
        </a>
      </div>
    </div>
  </section>

  <!-- Section principale Contact -->
  <section class="py-20 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Formulaire de contact -->
        <div class="animate-fade-in-left">
          <div class="bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded-3xl border border-gray-100 shadow-lg">
            <div class="mb-8">
              <div
                class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 mb-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                  </path>
                </svg>
                <span class="font-medium">Envoyez-nous un message</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-800 mb-4">
                Parlons de votre projet
              </h2>
              <p class="text-gray-600">
                Remplissez ce formulaire et nous vous répondrons dans les plus
                brefs délais.
              </p>
            </div>

            <!-- Message de confirmation -->
            <div v-if="showSuccessMessage" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-green-800 font-medium">Message envoyé avec succès !</p>
              </div>
              <p class="text-green-700 text-sm mt-2">Nous vous répondrons dans les plus brefs délais.</p>
            </div>

            <!-- Message d'erreur -->
            <div v-if="errorMessage" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-red-800 font-medium">Erreur lors de l'envoi</p>
              </div>
              <p class="text-red-700 text-sm mt-2">{{ errorMessage }}</p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="group">
                  <label for="first-name"
                    class="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-green-600 transition-colors">
                    Prénom *
                  </label>
                  <input 
                    type="text" 
                    v-model="formData.first_name" 
                    id="first-name" 
                    required
                    :disabled="submitting"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white disabled:bg-gray-100" 
                  />
                </div>

                <div class="group">
                  <label for="last-name"
                    class="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-green-600 transition-colors">
                    Nom *
                  </label>
                  <input 
                    type="text" 
                    v-model="formData.last_name" 
                    id="last-name" 
                    required
                    :disabled="submitting"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white disabled:bg-gray-100" 
                  />
                </div>
              </div>

              <div class="group">
                <label for="email"
                  class="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-green-600 transition-colors">
                  Email *
                </label>
                <input 
                  type="email" 
                  v-model="formData.email" 
                  id="email" 
                  required
                  :disabled="submitting"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white disabled:bg-gray-100" 
                />
              </div>

              <div class="group">
                <label for="company"
                  class="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-green-600 transition-colors">
                  Entreprise
                </label>
                <input 
                  type="text" 
                  v-model="formData.company" 
                  id="company"
                  :disabled="submitting"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white disabled:bg-gray-100" 
                />
              </div>

              <div class="group">
                <label for="subject"
                  class="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-green-600 transition-colors">
                  Sujet *
                </label>
                <select 
                  v-model="formData.subject" 
                  id="subject" 
                  required
                  :disabled="submitting"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white disabled:bg-gray-100">
                  <option value="">Sélectionnez un sujet</option>
                  <option value="administration">Assistance Administrative</option>
                  <option value="assistance-urgente">Organisation & Suivi d'Activité</option>
                  <option value="conseil-formation">Formations sur Mesure</option>
                  <option value="presence-digitale">Présence Digitale</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div class="group">
                <label for="message"
                  class="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-green-600 transition-colors">
                  Message *
                </label>
                <textarea 
                  v-model="formData.message" 
                  id="message" 
                  rows="5" 
                  required
                  :disabled="submitting"
                  placeholder="Décrivez-nous votre projet ou vos besoins..."
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none disabled:bg-gray-100"></textarea>
              </div>

              <button 
                type="submit"
                :disabled="submitting"
                class="group w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-4 rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span v-if="!submitting">Envoyer le message</span>
                <span v-else>Envoi en cours...</span>
                
                <svg v-if="!submitting" class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                
                <svg v-else class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <!-- Informations de contact -->
        <div class="space-y-8 animate-fade-in-right">
          <!-- Coordonnées -->
          <div
            class="bg-gradient-to-br from-rose-50 to-pink-50 p-6 md:p-10 rounded-3xl border border-rose-100 relative overflow-hidden">
            <div class="absolute top-4 right-4 w-20 h-20 bg-white/30 rounded-full animate-pulse-gentle">
            </div>
            <div class="absolute bottom-8 left-4 w-16 h-16 bg-white/20 rounded-full animate-pulse-gentle"
              style="animation-delay: 1s;">
            </div>

            <div class="relative z-10">
              <div
                class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 mb-6">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span class="font-medium">Nos Coordonnées</span>
              </div>

              <h3 class="text-2xl font-bold text-gray-800 mb-8">
                Retrouvez-nous
              </h3>

              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p class="text-gray-600 leading-relaxed">
                      5 avenue Vital Biraben <br />64100 Bayonne, France
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Téléphone</h4>
                    <a href="tel:+330647126851" class="text-green-600 hover:text-pink-700 font-medium">+33  06 47 12 68 51</a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:contact@ondesactives.com"
                      class="text-green-600 hover:text-pink-700 font-medium">contact@ondesactives.com</a>
                  </div>
                </div>
              </div>

              <!-- Réseaux sociaux -->
              <div class="mt-8 pt-8 border-t border-pink-200" id="social">
                <h4 class="font-semibold text-gray-900 mb-4">Suivez-nous</h4>
                <div class="flex justify-center space-x-4">
                  <a href="#"
                    class="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                      </path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/laurie-le-s%C3%A9han-884ab756"
                    class="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                      </path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/ondes_actives?igsh=MXE1c3F4OW1vbzZu"
                    class="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <svg class="w-5 h-5" fill="currentColor" width="24px" height="24px" viewBox="0 0 0.72 0.72"
                      xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                      <path
                        d="M0.52 0.164a0.036 0.036 0 1 0 0.036 0.036 0.036 0.036 0 0 0 -0.036 -0.036m0.138 0.073a0.228 0.228 0 0 0 -0.014 -0.073 0.147 0.147 0 0 0 -0.035 -0.053 0.141 0.141 0 0 0 -0.053 -0.034 0.219 0.219 0 0 0 -0.073 -0.014C0.452 0.06 0.442 0.06 0.36 0.06s-0.092 0 -0.124 0.002a0.219 0.219 0 0 0 -0.073 0.014 0.144 0.144 0 0 0 -0.053 0.034 0.141 0.141 0 0 0 -0.034 0.053 0.219 0.219 0 0 0 -0.014 0.073C0.06 0.268 0.06 0.278 0.06 0.36s0 0.092 0.002 0.124a0.219 0.219 0 0 0 0.014 0.073 0.141 0.141 0 0 0 0.034 0.053 0.144 0.144 0 0 0 0.053 0.034 0.219 0.219 0 0 0 0.073 0.014C0.268 0.66 0.278 0.66 0.36 0.66s0.092 0 0.124 -0.002a0.219 0.219 0 0 0 0.073 -0.014 0.141 0.141 0 0 0 0.053 -0.034 0.145 0.145 0 0 0 0.035 -0.053 0.228 0.228 0 0 0 0.014 -0.073c0 -0.032 0.002 -0.042 0.002 -0.124s0 -0.092 -0.002 -0.124M0.604 0.48a0.168 0.168 0 0 1 -0.01 0.056 0.092 0.092 0 0 1 -0.022 0.034 0.096 0.096 0 0 1 -0.034 0.022 0.168 0.168 0 0 1 -0.056 0.01c-0.03 0.002 -0.041 0.002 -0.12 0.002s-0.09 0 -0.12 -0.002a0.171 0.171 0 0 1 -0.058 -0.009 0.099 0.099 0 0 1 -0.033 -0.022 0.09 0.09 0 0 1 -0.022 -0.034 0.165 0.165 0 0 1 -0.012 -0.057c0 -0.03 -0.002 -0.041 -0.002 -0.12s0 -0.09 0.002 -0.12a0.165 0.165 0 0 1 0.01 -0.057A0.09 0.09 0 0 1 0.15 0.15a0.093 0.093 0 0 1 0.033 -0.024A0.171 0.171 0 0 1 0.24 0.116c0.03 0 0.041 -0.002 0.12 -0.002s0.09 0 0.12 0.002a0.168 0.168 0 0 1 0.056 0.01 0.092 0.092 0 0 1 0.036 0.024 0.093 0.093 0 0 1 0.022 0.033 0.168 0.168 0 0 1 0.01 0.057c0.002 0.03 0.002 0.041 0.002 0.12s0 0.09 -0.002 0.12M0.36 0.206A0.154 0.154 0 1 0 0.514 0.36 0.154 0.154 0 0 0 0.36 0.206m0 0.254A0.1 0.1 0 1 1 0.46 0.36 0.1 0.1 0 0 1 0.36 0.46">
                      </path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="md:bg-white/50 p-0 md:p-8 rounded-2xl border border-gray-100 mt-8">
              <h2 class="text-2xl font-semibold text-gray-900 mb-6">
                Horaires d'Ouverture
              </h2>

              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600">Lundi - Vendredi</span>
                  <span class="text-gray-900 font-medium">9h00 - 18h00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Samedi</span>
                  <span class="text-gray-900 font-medium">9h00 - 12h00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Dimanche</span>
                  <span class="text-gray-900 font-medium">Fermé</span>
                </div>
              </div>

              <div class="mt-6 bg-ondes-light-red rounded-lg">
                <p class="text-sm text-gray-700">
                  <span class="font-semibold">Urgences :</span> Pour les demandes
                  urgentes, contactez-nous par email. Nous répondons sous 2h en moyenne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useContactStore } from '@/stores/contact'

const contactStore = useContactStore()

// État du formulaire
const formData = ref({
  first_name: '',
  last_name: '',
  email: '',
  company: '',
  subject: '',
  message: ''
})

const submitting = ref(false)
const showSuccessMessage = ref(false)
const errorMessage = ref('')

const contactMethods = [
  {
    title: "Téléphone",
    value: "+33 06 47 12 68 51",
    description: "Appelez-nous directement",
    icon: "phone",
    color: "green",
    link: "tel:+330647126851",
  },
  {
    title: "Email",
    value: "contact@ondesactives.com",
    description: "Écrivez-nous un email",
    icon: "mail",
    color: "green",
    link: "mailto:contact@ondesactives.com",
  },
  {
    title: "Réseaux Sociaux",
    value: "Suivez-nous",
    description: "Restez connectés",
    icon: "share",
    color: "green",
    link: "#social",
  },
]

// Gestion de la soumission du formulaire
const handleSubmit = async () => {
  // Reset des messages
  showSuccessMessage.value = false
  errorMessage.value = ''
  
  // Validation basique
  if (!formData.value.first_name || !formData.value.last_name || !formData.value.email || !formData.value.subject || !formData.value.message) {
    errorMessage.value = 'Veuillez remplir tous les champs obligatoires'
    return
  }

  submitting.value = true

  try {
    const result = await contactStore.createContact(formData.value)
    
    if (result.success) {
      showSuccessMessage.value = true
      
      // Reset du formulaire
      formData.value = {
        first_name: '',
        last_name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      }
      
      // Cacher le message en 5 sec
      // setTimeout(() => {
      //   showSuccessMessage.value = false
      // }, 5000)
      
    } else {
      errorMessage.value = result.error || 'Une erreur est survenue lors de l\'envoi du message'
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    errorMessage.value = 'Une erreur technique est survenue. Veuillez réessayer.'
  } finally {
    submitting.value = false
  }
}

let observer = null

const setupIntersectionObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )
}

onMounted(() => {
  setupIntersectionObserver()

  const animatedElements = document.querySelectorAll(
    '.animate-fade-in-up, .animate-fade-in-down, .animate-fade-in-left, .animate-fade-in-right, .animate-slide-up, .animate-slide-up-delay, .animate-slide-up-delay-2'
  )

  animatedElements.forEach((el) => observer.observe(el))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>