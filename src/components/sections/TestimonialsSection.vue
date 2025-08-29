<template>
  <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          Ce que disent nos <span class="bg-gradient-to-r from-ondes-red-400 to-rose-500 bg-clip-text text-transparent">clients</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez les témoignages de nos clients satisfaits qui nous font confiance pour leur réussite
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Testimonial 1 -->
        <div class="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 hover:border-ondes-green-200 transition-all duration-300 hover:shadow-xl animate-on-scroll relative overflow-hidden">
          <div class="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-ondes-green-100 to-emerald-100 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
          
          <div class="relative z-10">
            <div class="flex items-center mb-6">
              <img
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Sophie Princeton"
                class="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div class="ml-4">
                <h4 class="font-bold text-gray-900">Sophie Princeton</h4>
                <p class="text-gray-600">CEO, TechStart</p>
              </div>
            </div>
            
            <div class="flex items-center mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <blockquote class="text-gray-700 italic mb-6 leading-relaxed">
              "Service exceptionnel ! Ondes Actives a transformé notre gestion administrative. 
              Nous pouvons enfin nous concentrer sur notre cœur de métier en toute sérénité."
            </blockquote>
            
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ondes-green-100 text-ondes-green-700 text-sm font-medium">
              <span class="w-2 h-2 bg-ondes-green-500 rounded-full"></span>
              Administration
            </div>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 hover:border-ondes-red-200 transition-all duration-300 hover:shadow-xl animate-on-scroll relative overflow-hidden">
          <div class="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-ondes-red-100 to-rose-100 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
          
          <div class="relative z-10">
            <div class="flex items-center mb-6">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Marc Dubois"
                class="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div class="ml-4">
                <h4 class="font-bold text-gray-900">Marc Dubois</h4>
                <p class="text-gray-600">Artisan, Boulangerie Dubois</p>
              </div>
            </div>
            
            <div class="flex items-center mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <blockquote class="text-gray-700 italic mb-6 leading-relaxed">
              "Réactivité impressionnante ! Quand j'ai eu une urgence administrative, 
              l'équipe a réagi en moins de 2h. Un vrai partenaire de confiance."
            </blockquote>
            
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ondes-red-100 text-ondes-red-700 text-sm font-medium">
              <span class="w-2 h-2 bg-ondes-red-500 rounded-full animate-pulse"></span>
              Urgence
            </div>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl animate-on-scroll relative overflow-hidden">
          <div class="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-purple-100 to-ondes-red-100 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
          
          <div class="relative z-10">
            <div class="flex items-center mb-6">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Tamara Jules"
                class="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div class="ml-4">
                <h4 class="font-bold text-gray-900">Tamara Jules</h4>
                <p class="text-gray-600">Consultante, Jules Conseil</p>
              </div>
            </div>
            
            <div class="flex items-center mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <blockquote class="text-gray-700 italic mb-6 leading-relaxed">
              "Les formations proposées m'ont permis d'optimiser considérablement 
              ma gestion. Approche pédagogique et conseils personnalisés au top !"
            </blockquote>
            
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
              <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
              Formation
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mt-20 animate-fade-in-up">
        <div class="bg-gradient-to-r from-ondes-green-400 via-emerald-400 to-ondes-green-500 p-12 rounded-3xl text-center relative overflow-hidden">
          <!-- Decorative elements -->
          <div class="absolute top-4 left-4 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
          <div class="absolute bottom-4 right-4 w-32 h-32 bg-white/10 rounded-full animate-float-delay-1"></div>
          
          <div class="relative z-10">
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-12">
              Ils nous font confiance
            </h3>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div class="text-center">
                <div class="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
                <div class="text-ondes-green-100 font-medium">Clients satisfaits</div>
              </div>
              <div class="text-center">
                <div class="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
                <div class="text-ondes-green-100 font-medium">Taux de satisfaction</div>
              </div>
              <div class="text-center">
                <div class="text-4xl md:text-5xl font-bold text-white mb-2">2h</div>
                <div class="text-ondes-green-100 font-medium">Temps de réponse</div>
              </div>
              <div class="text-center">
                <div class="text-4xl md:text-5xl font-bold text-white mb-2">5+</div>
                <div class="text-ondes-green-100 font-medium">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here if needed
</script>