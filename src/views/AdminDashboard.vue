<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="flex items-center space-x-2">
              <img :src="logo" alt="">
            </router-link>
          </div>

          <div class="flex items-center gap-4">
            <router-link to="/" target="_blank" class="text-gray-600 hover:text-green-600 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </router-link>

            <div class="flex items-center gap-2">
              <span class="text-sm text-gray-600">{{ authStore.user?.email }}</span>
              <button @click="handleLogout" class="text-gray-600 hover:text-red-600 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3H10a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Contenu principal -->
    <main class="max-w-7xl mx-auto py-8">
      <!-- Vue Liste -->
      <div v-if="currentView === 'list'">
        <!-- Actions principales -->
        <div class="mb-8">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-gray-900">Gestion du blog</h2>
              <p class="text-gray-600">Créez et gérez vos articles de blog</p>
            </div>
            
            <button
              @click="createNewPost"
              class="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:from-green-500 hover:to-emerald-600 transition-all transform hover:scale-105"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Nouvel article
            </button>
          </div>
        </div>

        <!-- Liste des articles -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200">
          <div class="px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-medium text-gray-900">Articles</h3>
          </div>
          
          <div v-if="blogStore.loading == true" class="p-8 text-center">
            <div class="inline-flex items-center gap-2 text-gray-600">
              <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Chargement...
            </div>
          </div>

          <div v-if="blogStore.posts.length === 0" class="p-8 text-center">
            <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p class="text-gray-500">Aucun article pour le moment</p>
            <button
              @click="createNewPost"
              class="mt-4 text-green-600 hover:text-green-700 font-medium"
            >
              Créer votre premier article
            </button>
          </div>

          <div v-else class="divide-y divide-gray-200">
            <div
              v-for="post in blogStore.posts"
              :key="post.id"
              class="p-6 hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-2">
                    <h4 class="text-lg font-medium text-gray-900">{{ post.title }}</h4>
                    <span
                      :class="post.draft ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'"
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                    >
                      {{ post.draft ? 'Brouillon' : 'Publié' }}
                    </span>
                  </div>
                  
                  <p class="text-gray-600 mb-3 line-clamp-2">{{ post.description }}</p>
                  
                  <div class="flex items-center gap-4 text-sm text-gray-500">
                    <span>{{ post.author }}</span>
                    <span>•</span>
                    <span>{{ formatDate(post.created_at) }}</span>
                    <span v-if="post.tags?.length" class="flex items-center gap-1">
                      •
                      <span class="flex gap-1">
                        <span
                          v-for="tag in post.tags.slice(0, 2)"
                          :key="tag"
                          class="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700"
                        >
                          {{ tag }}
                        </span>
                      </span>
                    </span>
                  </div>
                </div>

                <div class="flex items-center gap-2 ml-4">
                  <button
                    @click="editPost(post)"
                    class="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  
                  <button
                    @click="confirmDelete(post)"
                    class="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Vue Édition avec BlogEditor intégré -->
      <div v-else-if="currentView === 'editor'">
        <BlogEditor
          :post="editingPost"
          @close="closeEditor"
          @save="handleSavePost"
        />
      </div>
    </main>

    <!-- Modal de confirmation de suppression -->
    <div v-if="postToDelete" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900">Supprimer l'article</h3>
        </div>
        
        <p class="text-gray-600 mb-6">
          Êtes-vous sûr de vouloir supprimer l'article "{{ postToDelete.title }}" ? 
          Cette action est irréversible.
        </p>
        
        <div class="flex gap-3">
          <button
            @click="postToDelete = null"
            class="flex-1 px-4 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button
            @click="handleDeletePost"
            class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useBlogStore } from '@/stores/blog'
import BlogEditor from '@/components/BlogEditor.vue'
import logo from "@/assets/logo.svg"

const router = useRouter()
const authStore = useAuthStore()
const blogStore = useBlogStore()

// État de la vue
const currentView = ref('list')
const editingPost = ref(null)
const postToDelete = ref(null)

// Vérifier l'authentification au montage
onMounted(async () => {
  if (!authStore.isAdminUser) {
    router.push('/admin/login')
    return
  }
  
  // Charger tous les posts (incluant les brouillons)
  await blogStore.loadAllPosts()
})

// Actions
const createNewPost = () => {
  editingPost.value = null
  currentView.value = 'editor'
}

const editPost = (post) => {
  editingPost.value = { ...post }
  currentView.value = 'editor'
}

const closeEditor = () => {
  editingPost.value = null
  currentView.value = 'list'
}

const handleSavePost = async (postData) => {
  console.log('handleSavePost called with:', postData)
  
  try {
    let result
    
    if (editingPost.value) {
      // Mise à jour
      console.log('Updating post with ID:', editingPost.value.id)
      result = await blogStore.updatePost(editingPost.value.id, postData)
    } else {
      // Création
      console.log('Creating new post')
      result = await blogStore.createPost(postData)
    }
    
    console.log('Save result:', result)
    
    if (result.success) {
      closeEditor()
      // Recharger la liste
      await blogStore.loadAllPosts()
    } else {
      console.error('Save failed:', result.error)
      alert('Erreur lors de la sauvegarde : ' + result.error)
    }
  } catch (error) {
    console.error('Error in handleSavePost:', error)
    alert('Erreur lors de la sauvegarde : ' + error.message)
  }
}

const confirmDelete = (post) => {
  postToDelete.value = post
}

const handleDeletePost = async () => {
  if (!postToDelete.value) return
  
  const result = await blogStore.deletePost(postToDelete.value.id)
  
  if (result.success) {
    postToDelete.value = null
  } else {
    alert('Erreur lors de la suppression : ' + result.error)
  }
}

const handleLogout = async () => {
  const result = await authStore.signOut()
  if (result.success) {
    router.push('/admin/login')
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>