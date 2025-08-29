<template>
  <div class="space-y-8 animate-fade-in-right">
    <!-- Contact Details -->
    <div
      class="bg-gradient-to-br from-rose-50 to-ondes-red-50 p-10 rounded-3xl border border-rose-100 relative overflow-hidden">
      <div class="absolute top-4 right-4 w-20 h-20 bg-white/30 rounded-full animate-pulse-gentle"></div>
      <div class="absolute bottom-8 left-4 w-16 h-16 bg-white/20 rounded-full animate-pulse-gentle"
        style="animation-delay: 1s;"></div>

      <div class="relative z-10">
        <div
          class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-ondes-red-100 to-rose-100 text-ondes-red-700 mb-6">
          <MapPinIcon class="w-5 h-5" />
          <span class="font-medium">Nos Coordonnées</span>
        </div>

        <h3 class="text-2xl font-bold text-gray-800 mb-8">
          Retrouvez-nous
        </h3>

        <div class="space-y-6">
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 bg-gradient-to-r from-ondes-green-400 to-ondes-green-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPinIcon class="w-6 h-6" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-1">Adresse</h4>
              <p class="text-gray-600 leading-relaxed">
                {{ contactInfo.address }}
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
              <PhoneIcon class="w-6 h-6" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-1">Téléphone</h4>
              <a :href="`tel:${contactInfo.phone}`" class="text-blue-600 hover:text-blue-700 font-medium">
                {{ contactInfo.phone }}
              </a>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 bg-gradient-to-r from-purple-400 to-ondes-red-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
              <EnvelopeIcon class="w-6 h-6" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-1">Email</h4>
              <a :href="`mailto:${contactInfo.email}`" class="text-purple-600 hover:text-purple-700 font-medium">
                {{ contactInfo.email }}
              </a>
            </div>
          </div>
        </div>

        <!-- Social Media -->
        <div class="mt-8 pt-8 border-t border-ondes-red-200" id="social">
          <h4 class="font-semibold text-gray-900 mb-4">Suivez-nous</h4>
          <div class="flex justify-center space-x-4">
            <a href="#"
              class="w-10 h-10 bg-gradient-to-r from-ondes-red-400 to-rose-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a :href="contactInfo.social.linkedin"
              class="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a :href="contactInfo.social.instagram"
              class="w-10 h-10 bg-gradient-to-r from-red-400 to-emerald-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-4.262 1.781c-1.297 0-2.345 1.048-2.345 2.345s1.048 2.345 2.345 2.345 2.345-1.048 2.345-2.345-1.048-2.345-2.345-2.345z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Business Hours -->
    <div class="bg-white/50 p-8 rounded-2xl border border-gray-100">
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

      <div class="mt-6 p-4 bg-ondes-light-red-50 rounded-lg">
        <p class="text-sm text-gray-700">
          <span class="font-semibold">Urgences :</span> Pour les demandes urgentes, contactez-nous par email. Nous
          répondons sous 2h en moyenne.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

const contactInfo = {
  email: 'contact@ondesactives.com',
  phone: '+33 1 23 45 67 89',
  address: '123 Avenue des Entrepreneurs, 75001 Paris, France',
  social: {
    linkedin: 'https://www.linkedin.com/in/laurie-le-s%C3%A9han-884ab756',
    instagram: 'https://www.instagram.com/ondes_actives?igsh=MXE1c3F4OW1vbzZu',
    twitter: '#'
  }
}
</script>