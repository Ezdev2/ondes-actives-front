<template>
  <article v-if="post" class="py-20">
    <!-- Hero Section -->
    <section class="relative">
      <div v-if="post.heroImage" class="relative h-96 overflow-hidden animate-fade-in-up">
        <img
          :src="post.heroImage"
          :alt="post.title"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      <div
        class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        :class="{ '-mt-32 relative z-10': post.heroImage }"
      >
        <div
          class="bg-white rounded-3xl p-8 md:p-12 shadow-xl animate-fade-in-up"
          v-if="post.heroImage"
        >
          <div class="flex flex-wrap gap-2 mb-6 animate-fade-in-up">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium"
              :class="getTagClass(tag)"
            >
              <span class="w-2 h-2 rounded-full" :class="getTagDotClass(tag)"></span>
              {{ tag }}
            </span>
          </div>
          
          <h1 class="text-3xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            {{ post.title }}
          </h1>
          
          <div class="flex items-center gap-4 text-gray-600 mb-8 animate-fade-in-up">
            <div class="flex items-center gap-2">
              <img
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=50"
                alt="Auteur"
                class="w-8 h-8 rounded-full object-cover"
              />
              <span>{{ post.author }}</span>
            </div>
            <span>•</span>
            <time :datetime="post.publishDate">
              {{ formatDate(post.publishDate) }}
            </time>
          </div>
          
          <p class="text-xl text-gray-600 leading-relaxed animate-fade-in-up">
            {{ post.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-12 animate-fade-in-up">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg max-w-none">
          <div v-html="renderedContent" class="blog-content"></div>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <section class="py-12 border-t border-gray-100 animate-fade-in-up">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <router-link
            to="/blog"
            class="inline-flex items-center gap-2 text-ondes-green-600 hover:text-ondes-green-700 font-medium transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Retour au blog
          </router-link>
          
          <div class="flex gap-4">
            <button
              @click="sharePost"
              class="inline-flex items-center gap-2 text-gray-600 hover:text-ondes-green-600 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              Partager
            </button>
          </div>
        </div>
      </div>
    </section>
  </article>

  <!-- 404 State -->
  <div v-else class="py-20 text-center animate-fade-in-up">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="w-24 h-24 bg-gradient-to-r from-ondes-red-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg class="w-12 h-12 text-ondes-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Article non trouvé</h1>
      <p class="text-gray-600 mb-8">L'article que vous recherchez n'existe pas ou a été supprimé.</p>
      <router-link
        to="/blog"
        class="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium group-hover:gap-3 transition-all duration-300 font-medium"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Retour au blog
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogStore } from '@/stores/blog'

const route = useRoute()
const blogStore = useBlogStore()

// Get post by slug
const post = computed(() => {
  const slug = route.params.slug
  return blogStore.getPostBySlug(slug)
})

// Charger les posts si pas encore fait
onMounted(async () => {
  if (blogStore.posts.length === 0) {
    await blogStore.loadPublishedPosts()
  }
  
  setupIntersectionObserver()
  const animatedElements = document.querySelectorAll(
    '.animate-fade-in-up, .animate-fade-in-down, .animate-fade-in-left, .animate-fade-in-right'
  )
  animatedElements.forEach((el) => observer.observe(el))
})

// Recharger si le slug change
watch(() => route.params.slug, async (newSlug) => {
  if (newSlug && !post.value) {
    await blogStore.loadPublishedPosts()
  }
})

// IntersectionObserver animations
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

// Render markdown content (simplified)
const renderedContent = computed(() => {
  if (!post.value) return ''
  let html = post.value.content
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold text-gray-800 mt-10 mb-6">$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-gray-800 mt-12 mb-8">$1</h1>')
  html = html.replace(/\*\*(.*)\*\*/gim, '<strong class="font-semibold text-gray-900">$1</strong>')
  html = html.replace(/\*(.*)\*/gim, '<em class="italic">$1</em>')
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-ondes-green-600 hover:text-ondes-green-700 underline">$1</a>')
  html = html.replace(/^- (.*$)/gim, '<li class="mb-2">$1</li>')
  html = html.replace(/(<li.*<\/li>)/gims, '<ul class="list-disc list-inside mb-6 space-y-2 text-gray-700">$1</ul>')
  html = html.replace(/^(?!<[hul]|---|<\/)(.*$)/gim, '<p class="mb-6 text-gray-700 leading-relaxed">$1</p>')
  html = html.replace(/^---$/gim, '<hr class="my-8 border-gray-200">')
  return html
})

// Utils
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
    'administration': 'bg-pink-100 text-pink-700',
    'gestion': 'bg-green-100 text-green-700',
    'conseils': 'bg-red-100 text-red-700',
    'entrepreneuriat': 'bg-purple-100 text-purple-700',
    'bienvenue': 'bg-blue-100 text-blue-700'
  }
  return tagClasses[tag] || 'bg-gray-100 text-gray-700'
}

const getTagDotClass = (tag) => {
  const dotClasses = {
    'administration': 'bg-pink-500',
    'gestion': 'bg-green-500',
    'conseils': 'bg-red-500',
    'entrepreneuriat': 'bg-purple-500',
    'bienvenue': 'bg-blue-500'
  }
  return dotClasses[tag] || 'bg-gray-500'
}

const sharePost = () => {
  if (navigator.share && post.value) {
    navigator.share({
      title: post.value.title,
      text: post.value.description,
      url: window.location.href
    })
  } else {
    navigator.clipboard.writeText(window.location.href)
    alert('Lien copié dans le presse-papiers !')
  }
}
</script>
