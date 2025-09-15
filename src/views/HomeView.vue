<template>
  <div class="min-h-screen bg-white">
    <!-- Section hero -->
    <section
      class="relative min-h-[80vh] bg-gradient-to-br from-white/50 via-ondes-light-red-50 to-ondes-green-50 py-20 overflow-hidden flex items-center">
      <div
        class="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full opacity-60 animate-float">
      </div>
      <div
        class="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-ondes-green-200 to-emerald-200 rounded-full opacity-50 animate-float-delay-1">
      </div>
      <div
        class="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-40 animate-float-delay-2">
      </div>
      <div
        class="absolute top-1/2 left-1/3 w-8 h-8 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full opacity-30 animate-pulse-gentle">
      </div>

      <div class="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-4 relative z-10">
        <!-- Left Column -->
        <div class="text-center md:text-left space-y-8">
          <p class="lg:text-2xl text-xl text-gray-600 mb-8 mx-auto md:mx-0 leading-relaxed">
            Solutions opérationnelles pour petites structures
          </p>
          <div class="animate-slide-up" :class="{ active: isInView.hero }">
            <h1 class="text-4xl lg:text-[54px] font-bold text-gray-800 mb-6 leading-tight">
              Ici on prend en <br> charge vos tâches <br> chronophages.

            </h1>
          </div>

          <div class="animate-slide-up-delay" :class="{ active: isInView.hero }">
            <p class="lg:text-2xl text-xl text-gray-600 mb-8 mx-auto md:mx-0 leading-relaxed">
              Ondes actives vous aide à reprendre le contrôle sur votre quotidien professionel
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex flex-col sm:flex-row gap-2 justify-center md:justify-start animate-slide-up-delay-2"
              :class="{ active: isInView.hero }">

              <router-link to="/#services"
                class="group flex items-center justify-center text-md bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full hover:from-green-500 hover:to-emerald-600 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg">
                <span class="flex items-center justify-center gap-1">
                  Découvrir les Solutions
                  <ArrowRightIcon class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </router-link>
              <router-link to="/contact"
                class="group flex items-center text-md flex items-center justify-center gap-1 text-gray-700 px-4 py-2 rounded-full border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-300 font-medium">
                <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clip-rule="evenodd"></path>
                </svg>
                Prendre contact
              </router-link>
            </div>
            <router-link to="/about"
              class="md:w-[fit-content] flex items-center text-xs flex bg-green-500/20 items-center justify-center gap-1 text-gray-700 px-4 py-2 rounded-full font-light w-full">
              Entreprenariat solidaire et responsable
            </router-link>
          </div>
        </div>

        <!-- Right Column -->
        <div class="hidden relative md:flex items-center justify-center animate-fade-in-right"
          :class="{ active: isInView.hero }">
          <img src="/images/Image-Accueil.png" class="w-full scale-150" alt="">
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="md:py-20">
      <div class="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Titre -->
        <div class="text-center mb-16 animate-fade-in-up" :class="{ active: isInView.services }">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Trouvez le service qu'il vous faut
          </h2>
          <p class="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Chaque structure est unique et fait face à ses propres défis : manque de temps, surcharge administrative,
            besoin d'organisation ou de visibilité. L'essentiel, c'est de trouver des solutions simples et adaptées pour
            avancer plus sereinement.
          </p>
        </div>

        <!-- Cartes -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-8">
          <div v-for="(card, index) in serviceCards" :key="index"
            class="relative rounded-2xl shadow-lg flex flex-col items-center text-center p-6 pt-12" :class="card.bg">
            <!-- Icône onglet -->
            <div class="absolute -top-6 flex justify-center w-full">
              <div :class="card.bg" class="rounded-xl p-4">
                <component :is="card.icon" class="h-8 w-8 text-white" />
              </div>
            </div>

            <h3 class="text-xl font-bold mb-4" v-html="card.title" :class="card.textColor"></h3>
            <p class="text-sm leading-relaxed mb-6" :class="card.textColor">
              {{ card.description }}
            </p>
            <router-link to="/contact"
              class="bg-white text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Découvrir
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Domains section -->
    <section class="md:py-20 py-12 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-fade-in-up" :class="{ active: isInView.services }">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos domaines d'intervention
          </h2>
          <p class="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions complètes et sur mesure pour accompagner votre entreprise
            vers le succès, avec expertise et bienveillance.
          </p>
        </div>

        <div class="space-y-20 md:space-y-[112px]">
          <div v-for="(service, index) in services" :key="index"
            :class="`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 animate-on-scroll`"
            :style="{ animationDelay: `${index * 200}ms` }" ref="serviceRefs">
            <div class="flex-1 space-y-6">
              <div
                :class="`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${getServiceColorClasses(service.color, 'badge')}`">
                <component :is="getServiceIcon(service.icon)" class="w-5 h-5" />
                <span class="font-medium">{{ service.title }}</span>
              </div>

              <h3 class="text-2xl md:text-3xl font-bold text-gray-800">
                {{ service.description }}
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div v-for="feature in service.features" :key="feature" class="flex items-center gap-2 text-gray-600">
                  <div :class="`w-2 h-2 rounded-full bg-gradient-to-r ${getServiceColorClasses(service.color, 'dot')}`">
                  </div>
                  <span>{{ feature }}</span>
                </div>
              </div>

              <router-link to="/contact"
                :class="`inline-flex items-center gap-2 px-6 py-3 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${getServiceColorClasses(service.color, 'button')}`">
                En savoir plus
                <ArrowRightIcon class="w-4 h-4" />
              </router-link>
            </div>

            <div class="flex-1 justify-center hidden md:flex">
              <div
                :class="`relative w-80 h-80 rounded-3xl bg-gradient-to-br ${getServiceColorClasses(service.color, 'illustration')} flex items-center justify-center overflow-hidden animate-gentle-bounce`">
                <img class="p-10" :src="service.image" alt="">
                <div class="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full animate-pulse"></div>
                <div class="absolute bottom-8 left-4 w-6 h-6 bg-white/20 rounded-full animate-pulse"
                  style="animation-delay: 1s;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gradient-to-r from-rose-50 to-pink-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Et si on faisait connaissance ?
          </h2>
        </div>

        <div class="bg-white/60 rounded-3xl overflow-hidden border border-gray-100 animate-fade-in-up">
          <div class="grid lg:grid-cols-3 gap-8">

            <div class="lg:col-span-2 p-8 md:p-12 flex flex-col gap-6">
              <div>
                <h3 class="text-4xl font-bold text-gray-800 mb-4">Ondes Actives c'est ?</h3>
                <div class="flex items-start">
                  <span class="text-green-500 mt-1 mr-3">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span class="text-gray-600"><strong class="font-semibold text-gray-700">Des valeurs :</strong> Vous
                    Avec Ondes Actives, j'ai à cœur de vous accompagner avec écoute, bienveillance, et simplicité. Mon
                    objectif : vous offrir un soutien fiable, humain, et sans prise de tête, pour alléger votre
                    quotidien
                    et vous permettre de vous concentrer sur l'essentiel. Je crois en une collaboration de confiance,
                    claire et efficace, toujours adaptée à vos besoins. </span>
                </div>
              </div>

              <div>
                <h4 class="text-xl font-semibold text-gray-800 mb-4">Mes engagements</h4>

                <ul class="space-y-4 mb-8">
                  <li class="flex items-start">
                    <span class="text-green-500 mt-1 mr-3">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span class="text-gray-600"><strong class="font-semibold text-gray-700">Une mission :</strong> Celle
                      de vous aider à retrouver du temps, de la clarté et de la sérénité dans la gestion de votre
                      activité.
                      J'apporte un soutien concret, personnalisé et humain aux entrepreneur.e.s qui souhaitent sur leur
                      cœur de métier, tout en restant bien organisé.e.s.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 mt-1 mr-3">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span class="text-gray-600"><strong class="font-semibold text-gray-700">Vision :</strong>Je crois en
                      un entrepreneuriat plus humain, plus responsable et plus solidaire. Un entreprenariat où l'on peut
                      développer son activité sans s'épuiser, en s'entourant des bonnes personnes et en faisant des
                      choix
                      alignés avec ses valeurs.<br />

                      Confier certaines tâches c'est une manière de créer du lien entre les acteurs, de s'entraider et à
                      mon échelle je souhaite contribuer à cet écosystème en apportant un soutien concret, fiable et
                      bienveillant à celles et ceux qui font vivre leurs projets au quotidien.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="lg:col-span-1 relative flex flex-col items-center justify-center">
              <div class="w-50 mx-auto mb-6 relative">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-ondes-green-400 to-emerald-500 rounded-full animate-pulse-gentle opacity-20">
                </div>
                <img src="/images/team.jpeg" alt="Sophie Dubois - Fondatrice"
                  class="w-full h-full rounded-full object-cover border-4 border-white relative z-10" />
              </div>

              <h3 class="text-4xl font-bold text-gray-800">Laurie Le Séhan</h3>
              <p class="text-lg text-green-600 font-medium mt-1 mb-6">Fondatrice & CEO</p>
              <div class="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/laurie-le-s%C3%A9han-884ab756"
                  class="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <!-- LinkedIn Icon -->
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/ondes_actives?igsh=MXE1c3F4OW1vbzZu"
                  class="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <!-- Instagram Icon -->
                  <svg class="w-5 h-5" fill="currentColor" width="24px" height="24px" viewBox="0 0 0.72 0.72"
                    xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                    <path
                      d="M0.52 0.164a0.036 0.036 0 1 0 0.036 0.036 0.036 0.036 0 0 0 -0.036 -0.036m0.138 0.073a0.228 0.228 0 0 0 -0.014 -0.073 0.147 0.147 0 0 0 -0.035 -0.053 0.141 0.141 0 0 0 -0.053 -0.034 0.219 0.219 0 0 0 -0.073 -0.014C0.452 0.06 0.442 0.06 0.36 0.06s-0.092 0 -0.124 0.002a0.219 0.219 0 0 0 -0.073 0.014 0.144 0.144 0 0 0 -0.053 0.034 0.141 0.141 0 0 0 -0.034 0.053 0.219 0.219 0 0 0 -0.014 0.073C0.06 0.268 0.06 0.278 0.06 0.36s0 0.092 0.002 0.124a0.219 0.219 0 0 0 0.014 0.073 0.141 0.141 0 0 0 0.034 0.053 0.144 0.144 0 0 0 0.053 0.034 0.219 0.219 0 0 0 0.073 0.014C0.268 0.66 0.278 0.66 0.36 0.66s0.092 0 0.124 -0.002a0.219 0.219 0 0 0 0.073 -0.014 0.141 0.141 0 0 0 0.053 -0.034 0.145 0.145 0 0 0 0.035 -0.053 0.228 0.228 0 0 0 0.014 -0.073c0 -0.032 0.002 -0.042 0.002 -0.124s0 -0.092 -0.002 -0.124M0.604 0.48a0.168 0.168 0 0 1 -0.01 0.056 0.092 0.092 0 0 1 -0.022 0.034 0.096 0.096 0 0 1 -0.034 0.022 0.168 0.168 0 0 1 -0.056 0.01c-0.03 0.002 -0.041 0.002 -0.12 0.002s-0.09 0 -0.12 -0.002a0.171 0.171 0 0 1 -0.058 -0.009 0.099 0.099 0 0 1 -0.033 -0.022 0.09 0.09 0 0 1 -0.022 -0.034 0.165 0.165 0 0 1 -0.012 -0.057c0 -0.03 -0.002 -0.041 -0.002 -0.12s0 -0.09 0.002 -0.12a0.165 0.165 0 0 1 0.01 -0.057A0.09 0.09 0 0 1 0.15 0.15a0.093 0.093 0 0 1 0.033 -0.024A0.171 0.171 0 0 1 0.24 0.116c0.03 0 0.041 -0.002 0.12 -0.002s0.09 0 0.12 0.002a0.168 0.168 0 0 1 0.056 0.01 0.092 0.092 0 0 1 0.036 0.024 0.093 0.093 0 0 1 0.022 0.033 0.168 0.168 0 0 1 0.01 0.057c0.002 0.03 0.002 0.041 0.002 0.12s0 0.09 -0.002 0.12M0.36 0.206A0.154 0.154 0 1 0 0.514 0.36 0.154 0.154 0 0 0 0.36 0.206m0 0.254A0.1 0.1 0 1 1 0.46 0.36 0.1 0.1 0 0 1 0.36 0.46" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-fade-in-up" :class="{ active: isInView.faq }">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Questions Fréquentes
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Toutes les réponses à vos questions sur nos services d'accompagnement
          </p>
        </div>

        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index"
            class="group bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl overflow-hidden hover:border-pink-200 transition-all duration-300 animate-on-scroll"
            :style="{ animationDelay: `${index * 100}ms` }">
            <button @click="toggleFaq(index)"
              class="faq-button w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 focus:outline-none transition-all duration-300 group">
              <h3 class="text-lg font-semibold text-gray-800 pr-8 group-hover:text-pink-600 transition-colors">{{
                faq.question }}</h3>
              <div
                class="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center group-hover:from-pink-200 group-hover:to-rose-200 transition-all duration-300">
                <ChevronDownIcon
                  :class="`w-5 h-5 text-pink-500 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`" />
              </div>
            </button>
            <div v-show="openFaq === index" class="faq-answer">
              <div class="px-8 py-6">
                <div class="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl">
                  <p class="text-gray-700 leading-relaxed">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="mt-16 animate-fade-in-up">
          <div
            class="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 p-12 rounded-3xl text-center relative overflow-hidden">
            <!-- Éléments décoration -->
            <div class="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            <div class="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full animate-float-delay-1"></div>

            <div class="relative z-10">
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
                Une question spécifique ?
              </h3>
              <p class="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                Vous avez une question en particulier concernant votre besoin, n'hésitez pas à contacter Ondes Actives
              </p>
              <router-link to="/contact"
                class="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 font-bold transform hover:scale-105 hover:shadow-lg">
                <ChatBubbleLeftRightIcon class="w-5 h-5" />
                Nous Contacter
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="pb-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-fade-in-up" :class="{ active: isInView.expertise }">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Prenez connaissance du blog de Ondes Actives ?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Gestion, administration, délégation, découvrez les different articles en ligne.
          </p>
        </div>
        <div v-if="loading && !publishedPosts.length" class="flex flex-col md:flex-row gap-8 w-full">
          <div v-for="i in 3" :key="i"
            class="animate-pulse w-full bg-white rounded-lg border border-gray-100 overflow-hidden">
            <div class="h-48 bg-gray-200"></div>
            <div class="p-8 space-y-4">
              <div class="flex gap-2">
                <span class="h-5 w-16 bg-gray-200 rounded-full"></span>
                <span class="h-5 w-12 bg-gray-200 rounded-full"></span>
              </div>
              <div class="h-6 bg-gray-200 rounded w-3/4"></div>
              <div class="h-4 bg-gray-200 rounded w-full"></div>
              <div class="h-4 bg-gray-200 rounded w-5/6"></div>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <span class="h-4 w-16 bg-gray-200 rounded"></span>
                </div>
                <span class="h-4 w-12 bg-gray-200 rounded"></span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="publishedPosts.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="(post, index) in publishedPosts.slice(0, 3)" :key="post.id"
            class="group bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 animate-on-scroll hover:shadow-xl"
            :style="{ animationDelay: `${index * 100}ms` }">
            <!-- Featured Image -->
            <div class="relative overflow-hidden">
              <img :src="post.heroImage" :alt="post.title"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>

            <!-- Content -->
            <div class="p-8">
              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in post.tags.slice(0, 2)" :key="tag"
                  class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium"
                  :class="getTagClass(tag)">
                  <span class="w-1.5 h-1.5 rounded-full" :class="getTagDotClass(tag)"></span>
                  {{ tag }}
                </span>
              </div>

              <!-- Title -->
              <h2
                class="text-xl font-bold text-gray-800 mb-3 group-hover:text-ondes-green-600 transition-colors line-clamp-2">
                {{ post.title }}
              </h2>

              <!-- Description -->
              <p class="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                {{ post.description }}
              </p>

              <!-- Meta -->
              <div class="flex items-center justify-between border-t pt-4 border-gray-100 text-sm text-gray-500 mb-6">
                <div class="flex items-center gap-2">
                  <img
                    src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=50"
                    alt="Auteur" class="w-6 h-6 rounded-full object-cover" />
                  <span>{{ post.author }}</span>
                </div>
                <time :datetime="post.publishDate">
                  {{ formatDate(post.publishDate) }}
                </time>
              </div>

              <!-- Read More Button -->
              <router-link :to="`/blog/${post.slug}`"
                class="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium group-hover:gap-3 transition-all duration-300">
                Lire l'article
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
            </div>
          </article>
        </div>
        <!-- Load More Button -->
        <div class="text-center mt-16">
          <router-link to="/blog"
            class="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-4 rounded-full hover:from-green-500 hover:to-emerald-600 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg">
            Découvrir les articles
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 relative overflow-hidden">
      <div
        class="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32 animate-spin-slow">
      </div>
      <div
        class="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48 animate-spin-slow-reverse">
      </div>

      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin d'un coup de pouce dans la gestion de votre activité ?
          </h2>
          <p class="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Parlons-en simplement, sans engagement.
          </p>

          <router-link to="/contact"
            class="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 font-bold transform hover:scale-105">
            Me contacter
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, computed } from 'vue'
import { useBlogStore } from '@/stores/blog'
import {
  ArrowRightIcon,
  PlayIcon,
  StarIcon,
  CheckCircleIcon,
  MegaphoneIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  CheckIcon,
  ChevronDownIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  BoltIcon,
  PhoneIcon,
  GlobeAltIcon,
  SparklesIcon,
  DocumentTextIcon,
  UsersIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from '@heroicons/vue/24/outline'
import image1 from "@/assets/48.png"
import image2 from "@/assets/47.png"
import image3 from "@/assets/50.png"
import image4 from "@/assets/49.png"

// Data
const openFaq = ref(null)

const isInView = reactive({
  hero: false,
  services: false,
  testimonials: false,
  team: false,
  faq: false,
  expertise: false,
  cta: false
})

const blogStore = useBlogStore()
const loading = ref(true)
const publishedPosts = computed(() => blogStore.getPublishedPosts())

// Charger les posts
onMounted(async () => {
  await blogStore.loadPublishedPosts()
  loading.value = false
  setupIntersectionObserver()
  const animatedElements = document.querySelectorAll(
    '.animate-fade-in-up, .animate-fade-in-down, .animate-fade-in-left, .animate-fade-in-right, .animate-on-scroll'
  )
  animatedElements.forEach((el) => observer.observe(el))
})

// Utility functions
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getTagClass = (tag) => {
  const tagClasses = {
    'administration': 'bg-red-100 text-red-700',
    'gestion': 'bg-green-100 text-green-700',
    'conseils': 'bg-red-100 text-red-700',
    'entrepreneuriat': 'bg-purple-100 text-purple-700',
    'bienvenue': 'bg-blue-100 text-blue-700'
  }
  return tagClasses[tag] || 'bg-gray-100 text-gray-700'
}

const getTagDotClass = (tag) => {
  const dotClasses = {
    'administration': 'bg-red-500',
    'gestion': 'bg-green-500',
    'conseils': 'bg-pink-500',
    'entrepreneuriat': 'bg-purple-500',
    'bienvenue': 'bg-blue-500'
  }
  return dotClasses[tag] || 'bg-gray-500'
}

const serviceCards = ref([
  {
    bg: 'bg-green-500',
    textColor: 'text-green-100',
    icon: DocumentTextIcon,
    title: 'Assistance<br>administrative',
    description:
      "Vous souhaitez confier votre administratif à une personne de confiance, efficace et organisée? Je prends en charge vos tâches quotidiennes pour vous permettre de rester concentré sur l'essentiel.",
  },
  {
    bg: 'bg-red-300',
    textColor: 'text-red-100',
    icon: UsersIcon,
    title: 'Gestion des <br>ressources humaines ',
    description:
      "Vous avez besoin de structurer vos démarches RH? Je vous accompagne dans le suivi administratif des salariés, les recrutements, la gestion des plannings et des dossiers du personnel.",
  },
  {
    bg: 'bg-teal-500',
    textColor: 'text-teal-100',
    icon: BriefcaseIcon,
    title: 'Appui à la <br>gestion d\'entreprise',
    description:
      "Vous souhaitez gagner en clarté et mieux organiser votre quotidien? Je vous aide à structurer vos outils, suivre vos indicateurs et gérer vos priorités pour avancer de manière plus fluide et sereine.",
  },
  {
    bg: 'bg-gray-500',
    textColor: 'text-gray-300',
    icon: EnvelopeIcon,
    title: 'Création <br>de contenus',
    description:
      "Vous manquez de temps ou d’inspiration pour vos textes? Je vous accompagne dans la création de contenus pour vos réseaux, votre site ou vos supports professionnels à l’image de votre structure.",
  },
])

const services = ref([
  {
    title: "Assistance Administrative",
    description: "Assistance administrative souple et personnalisée pour vous permettre de rester concentré.e sur votre coeur de métier",
    features: [
      "Gestion de boites mails",
      "Relance clients",
      "Gestion agendas",
      "Suivi de l'administration des ventes",
      "Déclarations officielles",
      "Création de dossiers et d'archives",
      "Suivi des échéances",
      "Gestion comptable"
    ],
    icon: "check-circle",
    image: image1,
    color: "green"
  },
  {
    title: "Gestion des ressources humaines",
    description: "Un soutien sur mesure pour alléger votre charge RH et sécuriser votre gestion quotidienne",
    features: [
      "Recrutements",
      "Rédaction de contrats",
      "Déclaration d'embauche",
      "Création et suivi des dossiers du personnel",
      "Mise en place de procédures",
      "Mise à jour des documents internes",
      "Suivi des visites médicales",
      "Rédaction de notes internes"
    ],
    icon: "headphones",
    image: image2,
    color: "pink"
  },
  {
    title: "Appui à la gestion d'entreprise",
    description: "Accompagnement dans la structuration et le suivi de votre activité",
    features: [
      "Suivi de tableaux de bord",
      "Appui à la gestion de projet ",
      "Recherche de partenariat",
      "Suivi d'indicateurs",
      "Mise en place de formations"
    ],
    icon: "graduation-cap",
    image: image3,
    color: "green"
  },
  {
    title: "Création de contenus",
    description: "Des contenus clairs, utiles et alignés à votre activité",
    features: [
      "Publication sur les réseaux",
      "Création de documents internes",
      "Création de support de formation",
      "Rédaction de support de webinars",
      "Supports de communication",
      "Rédaction d'articles",
      "Rédaction de dossier",
      "Création de rapport d'activité"
    ],
    icon: "trending-up",
    image: image4,
    color: "pink"
  }
])

const faqs = ref([
  {
    question: "Quels services proposez-vous ?",
    answer: "Nous offrons une gamme complète de services incluant l'administration d'entreprise, l'assistance urgente, et le conseil & formation. Cela comprend la comptabilité, les déclarations, le suivi administratif, le support 24/7, et l'accompagnement stratégique."
  },
  {
    question: "Comment puis-je commencer à travailler avec vous ?",
    answer: "Il vous suffit de nous contacter via notre formulaire de contact ou par téléphone. Nous organiserons une consultation gratuite pour comprendre vos besoins spécifiques et vous proposer une solution adaptée."
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "Nos tarifs varient selon les services demandés et la complexité de votre dossier. Nous proposons des forfaits mensuels ainsi que des prestations ponctuelles. Contactez-nous pour un devis personnalisé."
  },
  {
    question: "Combien de temps prend le traitement d'une demande ?",
    answer: "Pour les demandes urgentes, nous répondons sous 2h en moyenne. Pour les tâches administratives courantes, le délai est généralement de 24 à 48h. Les projets plus complexes font l'objet d'un planning détaillé."
  },
  {
    question: "Travaillez-vous avec tous types d'entreprises ?",
    answer: "Oui, nous accompagnons aussi bien les auto-entrepreneurs, les PME, que les startups et entreprises en croissance. Nos solutions s'adaptent à la taille et au secteur de votre activité."
  },
  {
    question: "Puis-je avoir un suivi de l'avancement de mes dossiers ?",
    answer: "Absolument ! Nous fournissons un suivi régulier de tous vos dossiers avec des rapports détaillés et sommes toujours disponibles pour répondre à vos questions sur l'avancement."
  }
])

// Methods
const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

const getServiceIcon = (iconName) => {
  const iconMap = {
    'check-circle': CheckCircleIcon,
    'headphones': MegaphoneIcon,
    'graduation-cap': AcademicCapIcon,
    'trending-up': ArrowTrendingUpIcon
  }
  return iconMap[iconName] || CheckCircleIcon
}

const getServiceColorClasses = (color, type) => {
  const colorMap = {
    green: {
      badge: 'from-green-100 to-emerald-100 text-green-700',
      dot: 'from-green-400 to-emerald-400',
      button: 'from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600',
      illustration: 'from-green-100 via-emerald-50 to-green-100',
      iconBg: 'from-green-400 to-emerald-500'
    },
    pink: {
      badge: 'from-pink-100 to-rose-100 text-pink-700',
      dot: 'from-pink-400 to-rose-400',
      button: 'from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600',
      illustration: 'from-pink-100 via-rose-50 to-pink-100',
      iconBg: 'from-pink-400 to-rose-500'
    }
  }
  return colorMap[color]?.[type] || ''
}

let observer = null

const setupIntersectionObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section')
          if (sectionId && isInView[sectionId] !== undefined) {
            isInView[sectionId] = true
          }

          entry.target.classList.add('active')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )
}

onMounted(() => {
  setupIntersectionObserver()

  const sections = [
    { selector: 'section:first-child', key: 'hero' },
    { selector: '#services', key: 'services' },
    { selector: 'section:nth-child(3)', key: 'testimonials' },
    { selector: 'section:nth-child(4)', key: 'team' },
    { selector: '#faq', key: 'faq' },
    { selector: 'section:nth-child(6)', key: 'expertise' },
    { selector: 'section:last-child', key: 'cta' }
  ]

  sections.forEach(({ selector, key }) => {
    const element = document.querySelector(selector)
    if (element) {
      element.setAttribute('data-section', key)
      observer.observe(element)
    }
  })

  const animatedElements = document.querySelectorAll(
    '.animate-on-scroll, .animate-fade-in-up, .animate-fade-in-down, .animate-fade-in-left, .animate-fade-in-right, .animate-slide-up, .animate-slide-up-delay, .animate-slide-up-delay-2'
  )

  animatedElements.forEach((element) => {
    observer.observe(element)
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.card-shadow {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Animations */
.animate-on-scroll,
.animate-fade-in-up,
.animate-fade-in-down,
.animate-fade-in-left,
.animate-fade-in-right {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-slide-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-slide-up-delay {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-delay: 0.2s;
}

.animate-slide-up-delay-2 {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-delay: 0.4s;
}

.animate-fade-in-left {
  transform: translateX(-30px);
}

.animate-fade-in-right {
  transform: translateX(30px);
}

.animate-fade-in-down {
  transform: translateY(-30px);
}

/* États actifs */
.animate-on-scroll.active,
.animate-fade-in-up.active,
.animate-fade-in-down.active,
.animate-fade-in-left.active,
.animate-fade-in-right.active,
.animate-slide-up.active,
.animate-slide-up-delay.active,
.animate-slide-up-delay-2.active {
  opacity: 1;
  transform: translate(0, 0);
}

/* Animations flottantes */
@keyframes float-up {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-10px) rotate(2deg);
  }
}

@keyframes float-down {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(10px) rotate(-2deg);
  }
}

@keyframes gentle-bounce {

  0%,
  100% {
    transform: translateY(0px) scale(1);
  }

  50% {
    transform: translateY(-5px) scale(1.02);
  }
}

@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.1;
  }

  50% {
    opacity: 0.3;
  }
}

.animate-float-up {
  animation: float-up 6s ease-in-out infinite;
}

.animate-float-down {
  animation: float-down 7s ease-in-out infinite;
}

.animate-gentle-bounce {
  animation: gentle-bounce 3s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

/* Ombres */
.shadow-pink {
  box-shadow: 0 10px 30px rgba(251, 113, 133, 0.1);
}

.shadow-green {
  box-shadow: 0 10px 30px rgba(34, 197, 94, 0.1);
}
</style>