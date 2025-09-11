<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Breadcrumb -->
    <div class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav class="flex items-center gap-2 justify-between">
          <div class="flex items-center gap-2 text-sm">
            <button @click="$emit('close')" class="text-gray-500 hover:text-green-600 transition-colors">
              Liste des articles
            </button>
            <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <span class="text-gray-900 font-medium">
              {{ isEditing ? 'Modifier l\'article' : 'Créer un article' }}
            </span>
          </div>
          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-3">
            <div class="bg-gray-50 rounded-lg p-4">
              <label class="flex items-center gap-2">
                <input v-model="form.draft" type="checkbox"
                  class="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                <span class="text-sm font-medium text-gray-700">Brouillon</span>
              </label>
            </div>
            <button @click="$emit('close')"
              class="flex-1 px-6 py-3 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Annuler
            </button>

            <!-- <button v-if="!form.draft" @click="saveDraft"
              class="flex-1 px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              Sauver brouillon
            </button> -->

            <button @click="handleSubmit" :disabled="loading || !canSave"
              class="flex-1 px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
              <span v-if="loading" class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                Sauvegarde...
              </span>
              <span v-else>
                {{ form.draft ? 'Sauvegarder' : 'Publier' }}
              </span>
            </button>
          </div>
        </nav>
      </div>
    </div>

    <div class="max-w-7xl mx-auto py-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Formulaire d'édition -->
        <div :class="!showPreview ? 'col-span-2' : 'col-span-1'"
          class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">

          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900 mb-6">Informations de l'article</h3>
            <button type="button" @click="showPreview = !showPreview"
              class="inline-flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-green-600 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {{ showPreview ? 'Masquer l\'aperçu' : 'Voir l\'aperçu' }}
            </button>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Titre -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Titre de l'article *
              </label>
              <input v-model="form.title" type="text" required
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Entrez le titre de votre article" @input="updateSlug" />
            </div>

            <!-- Slug -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                URL (slug) *
              </label>
              <div class="flex items-center gap-2">
                <span class="text-sm text-gray-500 whitespace-nowrap">/blog/</span>
                <input v-model="form.slug" type="text" required pattern="[a-z0-9\-]+"
                  class="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="url-de-larticle" @blur="validateSlug" />
              </div>
              <p v-if="slugError" class="text-sm text-red-600 mt-1">{{ slugError }}</p>
            </div>

            <!-- Description -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea v-model="form.description" rows="3"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                placeholder="Résumé de l'article qui apparaîtra dans la liste"></textarea>
            </div>

            <!-- Image de couverture -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-3">
                Image de couverture
              </label>

              <div class="space-y-4">
                <!-- Choix du type d'image -->
                <div class="flex gap-4">
                  <label class="flex items-center gap-2">
                    <input v-model="imageType" type="radio" value="url" class="text-green-600 focus:ring-green-500" />
                    <span class="text-sm text-gray-700">URL d'image</span>
                  </label>
                  <label class="flex items-center gap-2">
                    <input v-model="imageType" type="radio" value="upload"
                      class="text-green-600 focus:ring-green-500" />
                    <span class="text-sm text-gray-700">Télécharger une image</span>
                  </label>
                </div>

                <!-- URL d'image -->
                <div v-if="imageType === 'url'">
                  <input v-model="form.heroImage" type="url"
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="https://example.com/image.jpg" />
                </div>

                <!-- Upload d'image -->
                <div v-if="imageType === 'upload'">
                  <div
                    class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                    <input ref="fileInput" type="file" accept="image/*" @change="handleImageUpload" class="hidden" />
                    <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" stroke="currentColor" fill="none"
                      viewBox="0 0 48 48">
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p class="text-gray-600">
                      <button type="button" @click="$refs.fileInput.click()"
                        class="text-green-600 font-medium hover:text-green-700">
                        Cliquez pour télécharger
                      </button>
                      ou glissez-déposez une image
                    </p>
                    <p class="text-xs text-gray-500 mt-1">PNG, JPG, GIF jusqu'à 10MB</p>
                  </div>
                </div>

                <!-- Aperçu de l'image -->
                <div v-if="form.heroImage" class="mt-3">
                  <img :src="form.heroImage" alt="Aperçu"
                    class="w-full h-48 object-cover rounded-lg border border-gray-200" @error="imageError = true"
                    @load="imageError = false" />
                  <p v-if="imageError" class="text-sm text-red-600 mt-1">Impossible de charger l'image</p>
                </div>
              </div>
            </div>

            <!-- Tags -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-3">
                Tags
              </label>

              <!-- Tags sélectionnés -->
              <div v-if="form.tags.length > 0" class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in form.tags" :key="tag"
                  class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium"
                  :class="getTagClass(tag)">
                  {{ tag }}
                  <button type="button" @click="removeTag(tag)" class="ml-1 hover:bg-black/10 rounded-full p-0.5">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              </div>

              <!-- Sélection des tags -->
              <div class="grid grid-cols-2 gap-2">
                <label v-for="(tagClass, tagName) in availableTags" :key="tagName"
                  class="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-green-300 cursor-pointer transition-colors"
                  :class="{ 'border-green-500 bg-green-50': form.tags.includes(tagName) }">
                  <input type="checkbox" :value="tagName" :checked="form.tags.includes(tagName)"
                    @change="toggleTag(tagName)" class="text-green-600 focus:ring-green-500 rounded" />
                  <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium"
                    :class="tagClass">
                    <span class="w-2 h-2 rounded-full" :class="getTagDotClass(tagName)"></span>
                    {{ tagName }}
                  </span>
                </label>
              </div>
            </div>

            <!-- Éditeur de contenu -->
            <div class="space-y-6">
              <!-- Éditeur de contenu -->
              <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Contenu</h3>

                <!-- Éditeur de texte riche -->
                <div class="border border-gray-200 rounded-lg">
                  <!-- Barre d'outils -->
                  <div class="border-b border-gray-200 p-3 flex flex-wrap gap-2">
                    <button v-for="tool in editorTools" :key="tool.name" type="button" @click="applyFormat(tool)"
                      class="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
                      :title="tool.title">
                      <component :is="tool.icon" class="w-4 h-4" />
                    </button>
                  </div>

                  <!-- Zone de texte -->
                  <textarea ref="contentTextarea" v-model="form.content" rows="20"
                    class="w-full px-4 py-3 border-0 focus:ring-0 font-mono text-sm resize-none"
                    placeholder="Écrivez votre article en Markdown..." @keydown="handleKeydown"></textarea>
                </div>

                <p class="text-xs text-gray-500">
                  Utilisez la syntaxe Markdown ou les boutons de formatage ci-dessus
                </p>
              </div>
            </div>

            <!-- Auteur -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Auteur *
              </label>
              <input v-model="form.author" type="text" required
                class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Nom de l'auteur" />
            </div>

            <!-- Date de publication -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Date de publication
              </label>
              <input v-model="form.publishDate" type="datetime-local"
                class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>
          </form>
        </div>

        <!-- Aperçu -->
        <div v-if="showPreview" class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900">Aperçu de l'article</h3>
          </div>

          <div class="p-6">
            <!-- Aperçu de l'article basé sur BlogPostView -->
            <article class="max-w-none">
              <!-- Image hero -->
              <div v-if="form.heroImage" class="relative h-64 overflow-hidden rounded-lg mb-8">
                <img :src="form.heroImage" :alt="form.title" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              <!-- Tags -->
              <div v-if="form.tags.length > 0" class="flex flex-wrap gap-2 mb-6">
                <span v-for="tag in form.tags" :key="tag"
                  class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium"
                  :class="getTagClass(tag)">
                  <span class="w-2 h-2 rounded-full" :class="getTagDotClass(tag)"></span>
                  {{ tag }}
                </span>
              </div>

              <!-- Titre -->
              <h1 class="text-3xl font-bold text-gray-800 mb-6">
                {{ form.title || 'Titre de l\'article' }}
              </h1>

              <!-- Métadonnées -->
              <div class="flex items-center gap-4 text-gray-600 mb-8 text-sm">
                <div class="flex items-center gap-2">
                  <img
                    src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=50"
                    alt="Auteur" class="w-8 h-8 rounded-full object-cover" />
                  <span>{{ form.author || 'Auteur' }}</span>
                </div>
                <span>•</span>
                <time>
                  {{ form.publishDate ? formatDate(form.publishDate) : 'Date de publication' }}
                </time>
              </div>

              <!-- Description -->
              <p v-if="form.description" class="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                {{ form.description }}
              </p>

              <!-- Contenu -->
              <div class="prose prose-lg max-w-none">
                <div v-html="renderedContent" class="blog-content"></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useBlogStore } from '@/stores/blog'
import { BoldIcon, ChatBubbleLeftEllipsisIcon, H1Icon, H2Icon, H3Icon, ItalicIcon, LinkIcon, ListBulletIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  post: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close', 'save'])

const blogStore = useBlogStore()

const form = ref({
  title: '',
  slug: '',
  description: '',
  content: '',
  heroImage: '',
  tags: [],
  author: 'Ondes Actives',
  publishDate: '',
  draft: true
})

const loading = ref(false)
const slugError = ref('')
const imageError = ref(false)
const imageType = ref('url')
const showPreview = ref(true)
const contentTextarea = ref(null)

const availableTags = {
  'administration': 'bg-red-100 text-red-700',
  'gestion': 'bg-green-100 text-green-700',
  'conseils': 'bg-red-100 text-red-700',
  'entrepreneuriat': 'bg-purple-100 text-purple-700',
  'bienvenue': 'bg-blue-100 text-blue-700'
}

const editorTools = [
  { name: 'bold', title: 'Gras', icon: BoldIcon, format: '**', wrapper: true },
  { name: 'italic', title: 'Italique', icon: ItalicIcon, format: '*', wrapper: true },
  { name: 'heading1', title: 'Titre H1', icon: H1Icon, format: '# ', wrapper: false },
  { name: 'heading2', title: 'Titre H2', icon: H2Icon, format: '## ', wrapper: false },
  { name: 'heading3', title: 'Titre H3', icon: H3Icon, format: '### ', wrapper: false },
  { name: 'list', title: 'Liste', icon: ListBulletIcon, format: '- ', wrapper: false },
  { name: 'link', title: 'Lien', icon: LinkIcon, format: '[texte](url)', wrapper: false },
  { name: 'quote', title: 'Citation', icon: ChatBubbleLeftEllipsisIcon, format: '> ', wrapper: false }
]

const isEditing = computed(() => !!props.post)

const canSave = computed(() => {
  const result = form.value.title.trim() &&
    !slugError.value;
  return result;
});

// Contenu rendu pour l'aperçu
const renderedContent = computed(() => {
  if (!form.value.content) return '<p class="text-gray-500 italic">Commencez à écrire pour voir l\'aperçu...</p>'

  let html = form.value.content
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold text-gray-800 mt-10 mb-6">$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-gray-800 mt-12 mb-8">$1</h1>')
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold text-gray-900">$1</strong>')
  html = html.replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>')
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-green-600 hover:text-green-700 underline">$1</a>')
  html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-green-200 pl-4 py-2 my-4 italic text-gray-700">$1</blockquote>')
  html = html.replace(/^- (.*$)/gim, '<li class="mb-2">$1</li>')
  html = html.replace(/(<li.*?<\/li>)/gims, '<ul class="list-disc list-inside mb-6 space-y-2 text-gray-700">$1</ul>')
  html = html.replace(/^(?!<[hul]|---|<\/|>)(.*$)/gim, '<p class="mb-6 text-gray-700 leading-relaxed">$1</p>')
  html = html.replace(/^---$/gim, '<hr class="my-8 border-gray-200">')
  return html
})

// Charger les données du post si en mode édition
onMounted(() => {
  if (props.post) {
    form.value = {
      title: props.post.title || '',
      slug: props.post.slug || '',
      description: props.post.description || '',
      content: props.post.content || '',
      heroImage: props.post.heroImage || props.post.hero_image || '',
      tags: [...(props.post.tags || [])],
      author: props.post.author || 'Ondes Actives',
      publishDate: props.post.publishDate || props.post.publish_date
        ? new Date(props.post.publishDate || props.post.publish_date).toISOString().slice(0, 16)
        : '',
      draft: props.post.draft ?? true
    }
  } else {
    // Valeurs par défaut pour un nouveau post
    form.value.publishDate = new Date().toISOString().slice(0, 16)
    form.value.author = 'Ondes Actives'
  }
})

const updateSlug = () => {
  if (!isEditing.value || !form.value.slug) {
    if (form.value.title) {
      form.value.slug = form.value.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
    }
  }
}

const validateSlug = async () => {
  if (!form.value.slug) return

  const slugPattern = /^[a-z0-9\-]+$/
  if (!slugPattern.test(form.value.slug)) {
    slugError.value = 'Le slug ne peut contenir que des lettres minuscules, chiffres et tirets'
    return
  }

  // Vérifier l'unicité
  const exists = await blogStore.checkSlugExists(
    form.value.slug,
    isEditing.value ? props.post.id : null
  )

  if (exists) {
    slugError.value = 'Ce slug existe déjà'
  } else {
    slugError.value = ''
  }
}

const toggleTag = (tagName) => {
  const index = form.value.tags.indexOf(tagName)
  if (index > -1) {
    form.value.tags.splice(index, 1)
  } else {
    form.value.tags.push(tagName)
  }
}

const removeTag = (tagToRemove) => {
  form.value.tags = form.value.tags.filter(tag => tag !== tagToRemove)
}

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return

  // Validation du fichier
  if (!file.type.startsWith('image/')) {
    alert('Veuillez sélectionner un fichier image')
    return
  }

  if (file.size > 10 * 1024 * 1024) { // 10MB
    alert('L\'image ne doit pas dépasser 10MB')
    return
  }

  // Créer une URL temporaire pour l'aperçu
  const reader = new FileReader()
  reader.onload = (e) => {
    form.value.heroImage = e.target.result
    // Note: Dans une vraie application, vous devriez uploader l'image vers votre serveur
    // et récupérer l'URL finale pour la stocker en base de données
  }
  reader.readAsDataURL(file)
}

const applyFormat = (tool) => {
  const textarea = contentTextarea.value
  const start = textarea.selectionStart
  const end = textarea.selectionEnd
  const selectedText = form.value.content.substring(start, end)

  let newText = ''

  if (tool.wrapper && selectedText) {
    // Format avec wrapper (gras, italique)
    newText = `${tool.format}${selectedText}${tool.format}`
  } else if (tool.name === 'link') {
    // Format de lien
    const linkText = selectedText || 'texte du lien'
    newText = `[${linkText}](https://)`
  } else {
    // Format de début de ligne (titres, listes, citations)
    const lines = form.value.content.split('\n')
    const startLine = form.value.content.substring(0, start).split('\n').length - 1
    lines[startLine] = tool.format + (lines[startLine] || '')
    form.value.content = lines.join('\n')
    return
  }

  form.value.content =
    form.value.content.substring(0, start) +
    newText +
    form.value.content.substring(end)

  // Repositionner le curseur
  setTimeout(() => {
    textarea.focus()
    textarea.setSelectionRange(start + newText.length, start + newText.length)
  }, 0)
}

const handleKeydown = (event) => {
  // Raccourcis clavier
  if (event.ctrlKey || event.metaKey) {
    switch (event.key) {
      case 'b':
        event.preventDefault()
        applyFormat(editorTools.find(t => t.name === 'bold'))
        break
      case 'i':
        event.preventDefault()
        applyFormat(editorTools.find(t => t.name === 'italic'))
        break
      case 'k':
        event.preventDefault()
        applyFormat(editorTools.find(t => t.name === 'link'))
        break
    }
  }

  // Auto-indentation pour les listes
  if (event.key === 'Enter') {
    const textarea = event.target
    const lines = textarea.value.split('\n')
    const currentLineIndex = textarea.value.substring(0, textarea.selectionStart).split('\n').length - 1
    const currentLine = lines[currentLineIndex]

    if (currentLine.startsWith('- ')) {
      event.preventDefault()
      const newText = textarea.value.substring(0, textarea.selectionStart) + '\n- ' + textarea.value.substring(textarea.selectionEnd)
      form.value.content = newText
      setTimeout(() => {
        textarea.setSelectionRange(textarea.selectionStart + 3, textarea.selectionStart + 3)
      }, 0)
    }
  }
}

const handleSubmit = async () => {
  if (!canSave.value) {
    console.log('Cannot save - validation failed');
    return;
  }

  loading.value = true

  try {
    const postData = {
      title: form.value.title.trim(),
      slug: form.value.slug.trim(),
      description: form.value.description.trim(),
      content: form.value.content.trim(),
      heroImage: form.value.heroImage.trim(),
      tags: form.value.tags,
      author: form.value.author.trim(),
      publishDate: form.value.publishDate ? new Date(form.value.publishDate).toISOString() : new Date().toISOString(),
      draft: form.value.draft
    }

    emit('save', postData)

  } catch (error) {
    console.error('Error in handleSubmit:', error);
    loading.value = false;
  }
}

// Utilitaires
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getTagClass = (tag) => {
  return availableTags[tag] || 'bg-gray-100 text-gray-700'
}

const getTagDotClass = (tag) => {
  const dotClasses = {
    'administration': 'bg-red-500',
    'gestion': 'bg-green-500',
    'conseils': 'bg-red-500',
    'entrepreneuriat': 'bg-purple-500',
    'bienvenue': 'bg-blue-500'
  }
  return dotClasses[tag] || 'bg-gray-500'
}

// Surveiller les changements de slug pour validation
watch(() => form.value.slug, validateSlug)
</script>

<style scoped>
.blog-content h1,
.blog-content h2,
.blog-content h3 {
  color: #1f2937;
  font-weight: bold;
  line-height: 1.25;
}

.blog-content p {
  color: #374151;
  line-height: 1.75;
  margin-bottom: 1.5rem;
}

.blog-content ul {
  margin-bottom: 1.5rem;
}

.blog-content blockquote {
  border-left: 4px solid #10b981;
  padding-left: 1rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: #6b7280;
}

.blog-content a {
  color: #10b981;
  text-decoration: underline;
}

.blog-content a:hover {
  color: #059669;
}

.prose {
  max-width: none;
}
</style>