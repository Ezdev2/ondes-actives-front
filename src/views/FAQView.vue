<template>
  <BaseLayout>
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-white/50 via-ondes-very-light-red-50 to-ondes-light-red-200 relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-ondes-red-200 to-rose-200 rounded-full opacity-60 animate-float"></div>
      <div class="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-ondes-green-200 to-emerald-200 rounded-full opacity-50 animate-float-delay-1"></div>
      <div class="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-200 to-ondes-red-200 rounded-full opacity-40 animate-float-delay-2"></div>
      
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="animate-fade-in-up">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Questions <span class="bg-gradient-to-r from-purple-400 to-ondes-red-500 bg-clip-text text-transparent">Fréquentes</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Trouvez rapidement les réponses à vos questions sur nos services d'accompagnement entrepreneurial.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.id"
            class="group bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl overflow-hidden hover:border-ondes-red-200 transition-all duration-300 animate-on-scroll"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <button 
              class="faq-button w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-rose-50 hover:to-ondes-red-50 focus:outline-none transition-all duration-300 group"
              @click="toggleFAQ(index)"
            >
              <h3 class="text-lg font-semibold text-gray-800 pr-8 group-hover:text-ondes-red-600 transition-colors">
                {{ faq.question }}
              </h3>
              <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-ondes-red-100 to-rose-100 rounded-full flex items-center justify-center group-hover:from-ondes-red-200 group-hover:to-rose-200 transition-all duration-300">
                <svg 
                  class="faq-icon w-5 h-5 text-ondes-red-500 transform transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
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
          <div class="bg-gradient-to-r from-ondes-green-400 via-emerald-400 to-ondes-green-500 p-12 rounded-3xl text-center relative overflow-hidden">
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
              <router-link 
                to="/contact" 
                class="inline-flex items-center gap-2 bg-white text-ondes-green-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 font-bold transform hover:scale-105 hover:shadow-lg"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Nous Contacter
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/components/BaseLayout.vue'
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
  },
  {
    id: '7',
    question: 'Proposez-vous des formations ?',
    answer: 'Oui, nous proposons des formations sur mesure pour vous aider à mieux comprendre et gérer certains aspects de votre entreprise. Ces formations peuvent être individuelles ou en groupe selon vos besoins.'
  },
  {
    id: '8',
    question: 'Comment garantissez-vous la confidentialité de mes données ?',
    answer: 'La confidentialité est notre priorité absolue. Nous respectons strictement le secret professionnel et utilisons des systèmes sécurisés pour le traitement et le stockage de vos données. Tous nos collaborateurs sont tenus par des accords de confidentialité.'
  },
  {
    id: '9',
    question: 'Que se passe-t-il en cas d\'urgence administrative ?',
    answer: 'Notre service d\'assistance urgente est disponible 24/7. En cas d\'urgence, contactez-nous immédiatement par téléphone ou email. Nous nous engageons à traiter votre demande dans les 2 heures suivant votre appel.'
  },
  {
    id: '10',
    question: 'Puis-je résilier votre service à tout moment ?',
    answer: 'Oui, nos contrats sont flexibles. Vous pouvez résilier nos services avec un préavis d\'un mois. Nous nous engageons à assurer une transition en douceur et à vous remettre tous vos documents.'
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