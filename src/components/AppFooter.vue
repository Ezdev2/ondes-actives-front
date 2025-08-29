<template>
  <footer class="py-20 bg-pink-100 text-ondes-green-900 relative overflow-hidden">
    <!-- Formes décoratives -->
    <div
      class="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32 animate-spin-slow">
    </div>
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48 animate-spin-slow-reverse">
    </div>
    <div
      class="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16 animate-pulse-gentle">
    </div>
    <div class="max-w-[90rem] mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div class="space-y-4">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <router-link to="/" class="flex items-center space-x-2">
              <img :src="logo" alt="">
            </router-link>
          </div>
          <p class="">
            Administration et assistance aux entrepreneurs pour vous accompagner dans votre réussite.
          </p>
          <div class="flex space-x-6">
            <a href="#"
              class="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                </path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/laurie-le-s%C3%A9han-884ab756"
              class="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                </path>
              </svg>
            </a>
            <a href="https://www.instagram.com/ondes_actives?igsh=MXE1c3F4OW1vbzZu"
              class="w-10 h-10 bg-gradient-to-r from-red-400 to-emerald-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <svg class="w-5 h-5" fill="currentColor" width="24px" height="24px" viewBox="0 0 0.72 0.72"
                xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                <path
                  d="M0.52 0.164a0.036 0.036 0 1 0 0.036 0.036 0.036 0.036 0 0 0 -0.036 -0.036m0.138 0.073a0.228 0.228 0 0 0 -0.014 -0.073 0.147 0.147 0 0 0 -0.035 -0.053 0.141 0.141 0 0 0 -0.053 -0.034 0.219 0.219 0 0 0 -0.073 -0.014C0.452 0.06 0.442 0.06 0.36 0.06s-0.092 0 -0.124 0.002a0.219 0.219 0 0 0 -0.073 0.014 0.144 0.144 0 0 0 -0.053 0.034 0.141 0.141 0 0 0 -0.034 0.053 0.219 0.219 0 0 0 -0.014 0.073C0.06 0.268 0.06 0.278 0.06 0.36s0 0.092 0.002 0.124a0.219 0.219 0 0 0 0.014 0.073 0.141 0.141 0 0 0 0.034 0.053 0.144 0.144 0 0 0 0.053 0.034 0.219 0.219 0 0 0 0.073 0.014C0.268 0.66 0.278 0.66 0.36 0.66s0.092 0 0.124 -0.002a0.219 0.219 0 0 0 0.073 -0.014 0.141 0.141 0 0 0 0.053 -0.034 0.145 0.145 0 0 0 0.035 -0.053 0.228 0.228 0 0 0 0.014 -0.073c0 -0.032 0.002 -0.042 0.002 -0.124s0 -0.092 -0.002 -0.124M0.604 0.48a0.168 0.168 0 0 1 -0.01 0.056 0.092 0.092 0 0 1 -0.022 0.034 0.096 0.096 0 0 1 -0.034 0.022 0.168 0.168 0 0 1 -0.056 0.01c-0.03 0.002 -0.041 0.002 -0.12 0.002s-0.09 0 -0.12 -0.002a0.171 0.171 0 0 1 -0.058 -0.009 0.099 0.099 0 0 1 -0.033 -0.022 0.09 0.09 0 0 1 -0.022 -0.034 0.165 0.165 0 0 1 -0.012 -0.057c0 -0.03 -0.002 -0.041 -0.002 -0.12s0 -0.09 0.002 -0.12a0.165 0.165 0 0 1 0.01 -0.057A0.09 0.09 0 0 1 0.15 0.15a0.093 0.093 0 0 1 0.033 -0.024A0.171 0.171 0 0 1 0.24 0.116c0.03 0 0.041 -0.002 0.12 -0.002s0.09 0 0.12 0.002a0.168 0.168 0 0 1 0.056 0.01 0.092 0.092 0 0 1 0.036 0.024 0.093 0.093 0 0 1 0.022 0.033 0.168 0.168 0 0 1 0.01 0.057c0.002 0.03 0.002 0.041 0.002 0.12s0 0.09 -0.002 0.12M0.36 0.206A0.154 0.154 0 1 0 0.514 0.36 0.154 0.154 0 0 0 0.36 0.206m0 0.254A0.1 0.1 0 1 1 0.46 0.36 0.1 0.1 0 0 1 0.36 0.46">
                </path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h3
            class="text-lg font-semibold text-green-700">
            Liens Rapides</h3>
          <ul class="space-y-2">
            <li>
              <RouterLink to="/#services" class="hover:text-pink-500 transition-colors">
                Soolutions
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="hover:text-pink-500 transition-colors">
                À Propos
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/blog" class="hover:text-pink-500 transition-colors">
                Blog
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="hover:text-pink-500 transition-colors">
                Contact
              </RouterLink>
            </li>
            <li>
              <!-- Pour une ancre interne (#faq), RouterLink ne gère pas bien -->
              <a href="/#faq" class="hover:text-pink-500 transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div class="space-y-4">
          <h3
            class="text-lg font-semibold text-green-700">
            Contactez-nous</h3>
          <ul class="space-y-2">
            <li>
              <h4 class="font-semibold text-gray-900 mb-1">Téléphone</h4>
              <a href="tel:+33123456789" class="text-green-600 hover:text-blue-700 font-medium">+33 1 23 45 67
                89</a>
            </li>
            <li>
              <h4 class="font-semibold text-gray-900 mb-1">Email</h4>
              <a href="mailto:contact@ondesactives.com"
                class="text-pink-600 hover:text-purple-700 font-medium">contact@ondesactives.com</a>
            </li>
            <li>
              <h4 class="font-semibold text-gray-900 mb-1">Adresse</h4>
              <p class="text-gray-600 leading-relaxed">
                5 avenue Vital Biraben 64100 Bayonne, France
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-ondes-light-red-200 flex justify-between">
        <p class="text-center text-sm">
          &copy; Ondes Actives - tous droits réservés
        </p>
        <RouterLink to="/legal" class="hover:text-pink-500 transition-colors">
          Mentions Légales
        </RouterLink>
        <RouterLink to="/privacy" class="hover:text-pink-500 transition-colors">
          Politique de Confidentialité
        </RouterLink>
        <RouterLink to="/privacy" class="hover:text-pink-500 transition-colors">
          Politique de cookies
        </RouterLink>
      </div>
    </div>
  </footer>
</template>
<script setup>
import logo from "@/assets/logo.svg"
</script>