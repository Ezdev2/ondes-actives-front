<template>
  <section id="faq" class="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          Questions <span
            class="bg-gradient-to-r from-purple-400 to-ondes-red-500 bg-clip-text text-transparent">Fréquentes</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Toutes les réponses à vos questions sur nos services d'accompagnement
        </p>
      </div>

      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="faq.id"
          class="group bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl overflow-hidden hover:border-ondes-red-200 transition-all duration-300 animate-on-scroll"
          :style="{ animationDelay: `${index * 100}ms` }">
          <button
            class="faq-button w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-rose-50 hover:to-ondes-red-50 focus:outline-none transition-all duration-300 group"
            @click="toggleFAQ(index)">
            <h3 class="text-lg font-semibold text-gray-800 pr-8 group-hover:text-ondes-red-600 transition-colors">
              {{ faq.question }}
            </h3>
            <div
              class="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-ondes-red-100 to-rose-100 rounded-full flex items-center justify-center group-hover:from-ondes-red-200 group-hover:to-rose-200 transition-all duration-300">
              <ChevronDownIcon
                class="faq-icon w-5 h-5 text-ondes-red-500 transform transition-transform duration-300" />
            </div>
          </button>
          <div class="faq-answer hidden">
            <div class="px-8 py-6">
              <div class="bg-gradient-to-r from-rose-50 to-ondes-red-50 p-6 rounded-xl">
                <p class="text-gray-700 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div class="mt-16 animate-fade-in-up">
        <div
          class="bg-gradient-to-r from-ondes-green-400 via-emerald-400 to-ondes-green-500 p-12 rounded-3xl text-center relative overflow-hidden">
          <!-- Decorative elements -->
          <div class="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div class="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full animate-float-delay-1"></div>

          <div class="relative z-10">
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
              Une question spécifique ?
            </h3>
            <p class="text-ondes-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Notre équipe d'experts est là pour vous accompagner et répondre à tous vos besoins
            </p>
            <router-link to="/contact"
              class="inline-flex items-center gap-2 bg-white text-ondes-green-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 font-bold transform hover:scale-105 hover:shadow-lg">
              <ChatBubbleLeftRightIcon class="w-5 h-5" />
              Nous Contacter
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronDownIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'
import { useFAQAccordion } from '@/composables/useAnimations'

const { toggleFAQ } = useFAQAccordion()

const faqs = [
  {
    id: '1',
    question: 'Quels services proposez-vous ?',
    answer: 'Nous offrons une gamme complète de services incluant l\'administration d\'entreprise, l\'assistance urgente, et le conseil & formation. Cela comprend la comptabilité, les déclarations, le suivi administratif, le support 24/7, et l\'accompagnement stratégique.'
  },
  {
    id: '2',
    question: 'Comment puis-je commencer à travailler avec vous ?',
    answer: 'Il vous suffit de nous contacter via notre formulaire de contact ou par téléphone. Nous organiserons une consultation gratuite pour comprendre vos besoins spécifiques et vous proposer une solution adaptée.'
  },
  {
    id: '3',
    question: 'Quels sont vos tarifs ?',
    answer: 'Nos tarifs varient selon les services demandés et la complexité de votre dossier. Nous proposons des forfaits mensuels ainsi que des prestations ponctuelles. Contactez-nous pour un devis personnalisé.'
  },
  {
    id: '4',
    question: 'Combien de temps prend le traitement d\'une demande ?',
    answer: 'Pour les demandes urgentes, nous répondons sous 2h en moyenne. Pour les tâches administratives courantes, le délai est généralement de 24 à 48h. Les projets plus complexes font l\'objet d\'un planning détaillé.'
  },
  {
    id: '5',
    question: 'Travaillez-vous avec tous types d\'entreprises ?',
    answer: 'Oui, nous accompagnons aussi bien les auto-entrepreneurs, les PME, que les startups et entreprises en croissance. Nos solutions s\'adaptent à la taille et au secteur de votre activité.'
  },
  {
    id: '6',
    question: 'Puis-je avoir un suivi de l\'avancement de mes dossiers ?',
    answer: 'Absolument ! Nous fournissons un suivi régulier de tous vos dossiers avec des rapports détaillés et sommes toujours disponibles pour répondre à vos questions sur l\'avancement.'
  }
]
</script>

<style scoped>
.faq-icon {
  transition: transform 0.2s ease-in-out;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>