<template>
  <section 
    ref="newsletterSection"
    class="py-20 bg-gradient-to-r from-ondes-red-400 via-rose-400 to-ondes-red-500 relative overflow-hidden"
  >
    <!-- Decorative shapes -->
    <div
      class="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32 animate-spin-slow">
    </div>
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48 animate-spin-slow-reverse">
    </div>

    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
      <div :class="['transition-all duration-1000', isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0']">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Ne ratez aucun <span class="text-yellow-200">conseil</span>
        </h2>
        <p class="text-xl text-ondes-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et conseils d'experts directement dans
          votre boîte mail.
        </p>

        <div class="bg-white/20 backdrop-blur-sm p-8 rounded-3xl mx-auto">
          <form @submit.prevent="submitNewsletter" class="flex flex-col sm:flex-row gap-4">
            <input 
              v-model="email" 
              type="email" 
              placeholder="Votre adresse email" 
              required
              class="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-white/50 focus:outline-none" 
            />
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="bg-white text-ondes-red-600 px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 font-bold transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Inscription...' : 'S\'inscrire' }}
            </button>
          </form>
          <p class="text-ondes-red-100 text-sm mt-4 opacity-80">
            Pas de spam, désinscription facile à tout moment.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const email = ref('')
const isSubmitting = ref(false)
const isVisible = ref(false)
const newsletterSection = ref(null)

const submitNewsletter = async () => {
  isSubmitting.value = true

  try {
    // Simule une inscription newsletter
    await new Promise(resolve => setTimeout(resolve, 1500))

    alert('Inscription réussie ! Merci de votre confiance.')
    email.value = ''
  } catch (error) {
    alert('Erreur lors de l\'inscription. Veuillez réessayer.')
  } finally {
    isSubmitting.value = false
  }
}

// Animation au scroll
let observer
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target) // animation une seule fois
        }
      })
    },
    { threshold: 0.2 }
  )

  if (newsletterSection.value) {
    observer.observe(newsletterSection.value)
  }
})

onUnmounted(() => {
  if (observer && newsletterSection.value) {
    observer.unobserve(newsletterSection.value)
  }
})
</script>
