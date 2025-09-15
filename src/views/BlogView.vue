<template>
  <!-- Hero Section -->
  <section
    class="py-20 bg-gradient-to-br from-white/50 via-ondes-very-light-red-50 to-ondes-light-red-200 relative overflow-hidden">
    <!-- Decorative elements -->
    <div
      class="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-ondes-red-200 to-rose-200 rounded-full opacity-60 animate-float">
    </div>
    <div
      class="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-ondes-green-200 to-emerald-200 rounded-full opacity-50 animate-float-delay-1">
    </div>
    <div
      class="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-200 to-ondes-red-200 rounded-full opacity-40 animate-float-delay-2">
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div>
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Notre Blog
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Découvrez nos conseils d'experts, actualités et guides pratiques pour optimiser votre gestion d'entreprise.
        </p>

        <div class="flex flex-wrap justify-center gap-3">
          <span
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
            <span class="w-2 h-2 bg-green-500 rounded-full"></span>
            Administration
          </span>
          <span
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium">
            <span class="w-2 h-2 bg-red-500 rounded-full"></span>
            Conseils
          </span>
          <span
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
            Entrepreneuriat
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- Blog Posts Section -->
  <section class="pb-8 md:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="loading" class="flex flex-col md:flex-row gap-8 w-full">
        <div v-for="i in 3" :key="i"
          class="w-full bg-white rounded-lg border border-gray-100 overflow-hidden">
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

      <!-- Articles Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <article v-for="(post, index) in paginatedPosts" :key="post.id"
          class="group bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 overflow-hidden hover:transform hover:scale-105 transition-all duration-300  hover:shadow-xl"
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

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex flex-col items-center space-y-4">
        <!-- Info pagination -->
        <div class="text-sm text-gray-600">
          Affichage {{ ((currentPage - 1) * postsPerPage) + 1 }} à {{ Math.min(currentPage * postsPerPage, totalPosts) }} sur {{ totalPosts }} articles
        </div>
        
        <!-- Boutons pagination -->
        <div class="flex items-center justify-center space-x-2">
          <!-- Bouton Précédent -->
          <button
            @click="goToPage(currentPage - 1)"
            :disabled="currentPage === 1"
            class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2"
            :class="{ 'hover:border-green-400 hover:text-green-600': currentPage !== 1 }">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Précédent
          </button>

          <!-- Numéros de page -->
          <div class="flex space-x-1">
            <!-- Première page -->
            <button
              v-if="startPage > 1"
              @click="goToPage(1)"
              class="w-10 h-10 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-green-400 hover:text-green-600 transition-all duration-200">
              1
            </button>
            
            <!-- Points de suspension si nécessaire -->
            <span v-if="startPage > 2" class="flex items-center px-2 text-gray-500">...</span>
            
            <!-- Pages visibles -->
            <button
              v-for="page in visiblePages"
              :key="page"
              @click="goToPage(page)"
              class="w-10 h-10 rounded-lg border transition-all duration-200"
              :class="page === currentPage 
                ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white border-green-500 shadow-md' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-green-400 hover:text-green-600'">
              {{ page }}
            </button>
            
            <!-- Points de suspension si nécessaire -->
            <span v-if="endPage < totalPages - 1" class="flex items-center px-2 text-gray-500">...</span>
            
            <!-- Dernière page -->
            <button
              v-if="endPage < totalPages"
              @click="goToPage(totalPages)"
              class="w-10 h-10 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-green-400 hover:text-green-600 transition-all duration-200">
              {{ totalPages }}
            </button>
          </div>

          <!-- Bouton Suivant -->
          <button
            @click="goToPage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2"
            :class="{ 'hover:border-green-400 hover:text-green-600': currentPage !== totalPages }">
            Suivant
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="publishedPosts.length === 0 && !loading" class="text-center">
        <div
          class="w-24 h-24 bg-gradient-to-r from-ondes-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-12 h-12 text-ondes-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-800 mb-4">Aucun article pour le moment</h3>
        <p class="text-gray-600 mb-8">Nos premiers articles arrivent bientôt ! Revenez nous voir.</p>
        <router-link to="/contact"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-ondes-green-400 to-ondes-green-600 text-white px-6 py-3 rounded-full hover:from-ondes-green-500 hover:to-ondes-green-700 transition-all duration-300 font-medium">
          Nous contacter
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
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

</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useBlogStore } from '@/stores/blog'

// Blog store
const blogStore = useBlogStore()
const loading = ref(true)
const publishedPosts = computed(() => blogStore.getPublishedPosts())

// Pagination
const currentPage = ref(1)
const postsPerPage = 9

// Computed pour la pagination
const totalPosts = computed(() => publishedPosts.value.length)
const totalPages = computed(() => Math.ceil(totalPosts.value / postsPerPage))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return publishedPosts.value.slice(start, end)
})

// Calcul des pages visibles dans la pagination
const startPage = computed(() => {
  if (currentPage.value <= 3) return 1
  if (currentPage.value >= totalPages.value - 2) return Math.max(totalPages.value - 4, 1)
  return currentPage.value - 2
})

const endPage = computed(() => {
  if (currentPage.value <= 3) return Math.min(5, totalPages.value)
  if (currentPage.value >= totalPages.value - 2) return totalPages.value
  return currentPage.value + 2
})

const visiblePages = computed(() => {
  const pages = []
  for (let i = startPage.value; i <= endPage.value; i++) {
    pages.push(i)
  }
  return pages
})

// Méthode pour changer de page
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    // Scroll vers le haut de la section des articles
    document.querySelector('.grid.md\\:grid-cols-2').scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    })
  }
}

// Charger les posts au montage
onMounted(async () => {
  await blogStore.loadPublishedPosts()
  loading.value = false
  // Setup intersection observer après le chargement
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

// Scroll reveal animation
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

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>