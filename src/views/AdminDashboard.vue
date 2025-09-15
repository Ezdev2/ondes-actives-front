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

    <!-- Navigation des sections -->
    <nav class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex space-x-8">
          <button
            @click="currentSection = 'blog'"
            :class="currentSection === 'blog' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700'"
            class="py-4 px-1 border-b-2 font-medium text-sm transition-colors"
          >
            Blog
          </button>
          <button
            @click="currentSection = 'contacts'"
            :class="currentSection === 'contacts' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700'"
            class="py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center gap-2"
          >
            Contacts
            <span v-if="unreadContactsCount > 0" class="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              {{ unreadContactsCount }}
            </span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Contenu principal -->
    <main class="max-w-7xl mx-auto py-8">
      <!-- Section Blog -->
      <div v-if="currentSection === 'blog'">
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
      </div>

      <!-- Section Contacts -->
      <div v-if="currentSection === 'contacts'" class="space-y-6">
        <!-- En-tête avec actions globales -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-gray-900">Messages de contact</h2>
              <p class="text-gray-600">{{ totalContacts }} message(s) au total</p>
            </div>
            
            <button
              v-if="unreadContactsCount > 0"
              @click="markAllAsRead"
              class="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Marquer tout comme lu ({{ unreadContactsCount }})
            </button>
          </div>

          <!-- Filtres et tri -->
          <div class="mt-6 flex flex-col lg:flex-row lg:items-center gap-4">
            <!-- Filtres -->
            <div class="flex flex-wrap gap-3">
              <!-- Filtre statut de lecture -->
              <select 
                v-model="filters.readStatus" 
                @change="applyFilters"
                class="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">Tous les messages</option>
                <option value="unread">Non lus</option>
                <option value="read">Lus</option>
              </select>

              <!-- Filtre statut de réponse -->
              <select 
                v-model="filters.responseStatus" 
                @change="applyFilters"
                class="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">Toutes les réponses</option>
                <option value="pending">Non répondus</option>
                <option value="responded">Répondus</option>
              </select>

              <!-- Tri -->
              <select 
                v-model="sortOrder" 
                @change="applySorting"
                class="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="newest">Plus récents</option>
                <option value="oldest">Plus anciens</option>
              </select>
            </div>

            <!-- Statistiques -->
            <div class="lg:ml-auto flex items-center gap-4 text-sm text-gray-600">
              <span class="flex items-center gap-1">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                {{ unreadContactsCount }} non lu(s)
              </span>
              <span class="flex items-center gap-1">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                {{ respondedContactsCount }} répondu(s)
              </span>
            </div>
          </div>
        </div>

        <!-- Tableau des contacts -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200">
          <div v-if="contactsLoading" class="p-8 text-center">
            <div class="inline-flex items-center gap-2 text-gray-600">
              <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Chargement des contacts...
            </div>
          </div>

          <div v-else-if="paginatedContacts.length === 0" class="p-8 text-center">
            <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p class="text-gray-500">Aucun message correspondant aux filtres</p>
          </div>

          <div v-else class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <!-- En-tête du tableau -->
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nom & Prénom
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Entreprise
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Objet
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    État
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date de réception
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>

              <!-- Corps du tableau -->
              <tbody class="bg-white divide-y divide-gray-200">
                <tr 
                  v-for="contact in paginatedContacts" 
                  :key="contact.id"
                  :class="!contact.read ? 'bg-blue-50' : 'hover:bg-gray-50'"
                  class="transition-colors"
                >
                  <!-- Nom & Prénom -->
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-8 w-8">
                        <div class="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium text-gray-700">
                          {{ contact.first_name?.charAt(0) }}{{ contact.last_name?.charAt(0) }}
                        </div>
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ contact.first_name }} {{ contact.last_name }}
                        </div>
                      </div>
                    </div>
                  </td>

                  <!-- Email -->
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ contact.email }}</div>
                  </td>

                  <!-- Entreprise -->
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ contact.company || '-' }}</div>
                  </td>

                  <!-- Objet -->
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900 max-w-xs truncate" :title="contact.subject">
                      {{ contact.subject }}
                    </div>
                  </td>

                  <!-- État -->
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex flex-col gap-1">
                      <span 
                        :class="contact.read ? 'bg-gray-100 text-gray-800' : 'bg-blue-100 text-blue-800'"
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                      >
                        {{ contact.read ? 'Lu' : 'Non lu' }}
                      </span>
                      <span 
                        v-if="contact.responded"
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      >
                        Répondu
                      </span>
                    </div>
                  </td>

                  <!-- Date -->
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ formatDate(contact.created_at) }}
                  </td>

                  <!-- Actions -->
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div class="flex items-center gap-2">
                      <!-- Bouton Voir le message -->
                      <button
                        @click="selectContact(contact)"
                        class="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700 transition-colors"
                      >
                        Voir
                      </button>

                      <!-- Bouton Répondre -->
                      <!-- <a
                        :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=Re: ${encodeURIComponent(contact.subject)}&body=Bonjour ${contact.first_name},\n\nMerci pour votre message.\n\nCordialement,\nL'équipe Ondes Actives`"
                        target="_blank"
                        class="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors"
                      >
                        Répondre
                      </a> -->

                      <!-- Actions secondaires -->
                      <div class="flex items-center gap-1">
                        <button
                          @click.stop="toggleContactRead(contact)"
                          :class="contact.read ? 'text-gray-400 hover:text-blue-600' : 'text-blue-600 hover:text-blue-700'"
                          class="p-1 hover:bg-blue-50 rounded transition-colors"
                          :title="contact.read ? 'Marquer comme non lu' : 'Marquer comme lu'"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M12 12l-6.75-4.5M12 12l6.75-4.5" />
                          </svg>
                        </button>
                        
                        <button
                          @click.stop="confirmDeleteContact(contact)"
                          class="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Supprimer"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
            <div class="flex items-center justify-between">
              <div class="flex-1 flex justify-between sm:hidden">
                <button
                  @click="previousPage"
                  :disabled="currentPage === 1"
                  class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Précédent
                </button>
                <button
                  @click="nextPage"
                  :disabled="currentPage === totalPages"
                  class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Suivant
                </button>
              </div>
              <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p class="text-sm text-gray-700">
                    Affichage de 
                    <span class="font-medium">{{ (currentPage - 1) * itemsPerPage + 1 }}</span>
                    à 
                    <span class="font-medium">{{ Math.min(currentPage * itemsPerPage, filteredContacts.length) }}</span>
                    sur 
                    <span class="font-medium">{{ filteredContacts.length }}</span>
                    résultat(s)
                  </p>
                </div>
                <div>
                  <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                    <button
                      @click="previousPage"
                      :disabled="currentPage === 1"
                      class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <template v-for="page in visiblePages" :key="page">
                      <button
                        v-if="page !== '...'"
                        @click="goToPage(page)"
                        :class="page === currentPage 
                          ? 'bg-green-50 border-green-500 text-green-600' 
                          : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'"
                        class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      >
                        {{ page }}
                      </button>
                      <span v-else class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                        ...
                      </span>
                    </template>
                    
                    <button
                      @click="nextPage"
                      :disabled="currentPage === totalPages"
                      class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Détails du contact sélectionné (Modal) -->
        <div v-if="selectedContact" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div class="px-6 py-4 border-b border-gray-200">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-medium text-gray-900">Détails du message</h3>
                <button
                  @click="selectedContact = null"
                  class="text-gray-400 hover:text-gray-600"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="p-6 space-y-6">
              <!-- Informations contact -->
              <div>
                <h4 class="text-sm font-medium text-gray-900 mb-3">Informations</h4>
                <div class="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span class="text-sm text-gray-500">Nom complet</span>
                      <p class="text-sm font-medium text-gray-900">
                        {{ selectedContact.first_name }} {{ selectedContact.last_name }}
                      </p>
                    </div>
                    <div>
                      <span class="text-sm text-gray-500">Email</span>
                      <p class="text-sm font-medium text-gray-900">
                        <a :href="'mailto:' + selectedContact.email" class="text-green-600 hover:text-green-700">
                          {{ selectedContact.email }}
                        </a>
                      </p>
                    </div>
                    <div v-if="selectedContact.company">
                      <span class="text-sm text-gray-500">Entreprise</span>
                      <p class="text-sm font-medium text-gray-900">{{ selectedContact.company }}</p>
                    </div>
                    <div>
                      <span class="text-sm text-gray-500">Date</span>
                      <p class="text-sm font-medium text-gray-900">{{ formatDate(selectedContact.created_at) }}</p>
                    </div>
                  </div>
                  <div>
                    <span class="text-sm text-gray-500">Sujet</span>
                    <p class="text-sm font-medium text-gray-900">{{ selectedContact.subject }}</p>
                  </div>
                </div>
              </div>

              <!-- Message -->
              <div>
                <h4 class="text-sm font-medium text-gray-900 mb-3">Message</h4>
                <div class="bg-gray-50 rounded-lg p-4">
                  <p class="text-sm text-gray-700 whitespace-pre-wrap">{{ selectedContact.message }}</p>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex flex-col sm:flex-row gap-3">
                <a
                  :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${selectedContact.email}&su=Re: ${encodeURIComponent(selectedContact.subject)}&body=Bonjour ${selectedContact.first_name},\n\nMerci pour votre message.\n\nCordialement,\nL'équipe Ondes Actives`"
                  target="_blank"
                  class="flex-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-3 rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all font-medium text-center inline-block"
                >
                  Répondre par Gmail
                </a>
                
                <button
                  @click="toggleContactResponded(selectedContact)"
                  :class="selectedContact.responded 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'"
                  class="flex-1 px-4 py-3 rounded-lg transition-all font-medium"
                >
                  {{ selectedContact.responded ? 'Marquer comme non répondu' : 'Marquer comme répondu' }}
                </button>
              </div>
            </div>
          </div>
        </div>
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

    <!-- Modal de confirmation de suppression contact -->
    <div v-if="contactToDelete" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900">Supprimer le message</h3>
        </div>
        
        <p class="text-gray-600 mb-6">
          Êtes-vous sûr de vouloir supprimer le message de "{{ contactToDelete.first_name }} {{ contactToDelete.last_name }}" ? 
          Cette action est irréversible.
        </p>
        
        <div class="flex gap-3">
          <button
            @click="contactToDelete = null"
            class="flex-1 px-4 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button
            @click="handleDeleteContact"
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
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useBlogStore } from '@/stores/blog'
import { useContactStore } from '@/stores/contact'
import BlogEditor from '@/components/BlogEditor.vue'
import logo from "@/assets/logo.svg"

const router = useRouter()
const authStore = useAuthStore()
const blogStore = useBlogStore()
const contactStore = useContactStore()

// État global
const currentSection = ref('blog')

// État de la vue blog
const currentView = ref('list')
const editingPost = ref(null)
const postToDelete = ref(null)

// État des contacts
const contacts = ref([])
const selectedContact = ref(null)
const contactsLoading = ref(false)
const contactToDelete = ref(null)

// Nouveaux états pour la pagination et les filtres
const currentPage = ref(1)
const itemsPerPage = 50
const filters = ref({
  readStatus: 'all', // all, read, unread
  responseStatus: 'all' // all, responded, pending
})
const sortOrder = ref('newest')

const totalContacts = computed(() => contacts.value.length)

const unreadContactsCount = computed(() => {
  return contacts.value.filter(contact => !contact.read).length
})

const respondedContactsCount = computed(() => {
  return contacts.value.filter(contact => contact.responded).length
})

const filteredContacts = computed(() => {
  let filtered = [...contacts.value]
  
  // Appliquer les filtres
  if (filters.value.readStatus !== 'all') {
    filtered = filtered.filter(contact => 
      filters.value.readStatus === 'read' ? contact.read : !contact.read
    )
  }
  
  if (filters.value.responseStatus !== 'all') {
    filtered = filtered.filter(contact => 
      filters.value.responseStatus === 'responded' ? contact.responded : !contact.responded
    )
  }
  
  // Appliquer le tri
  filtered.sort((a, b) => {
    const dateA = new Date(a.created_at)
    const dateB = new Date(b.created_at)
    return sortOrder.value === 'newest' ? dateB - dateA : dateA - dateB
  })
  
  return filtered
})

const totalPages = computed(() => {
  return Math.ceil(filteredContacts.value.length / itemsPerPage)
})

const paginatedContacts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredContacts.value.slice(start, end)
})

const visiblePages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value
  
  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    if (current <= 4) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(total)
    } else if (current >= total - 3) {
      pages.push(1)
      pages.push('...')
      for (let i = total - 4; i <= total; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      pages.push('...')
      for (let i = current - 1; i <= current + 1; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(total)
    }
  }
  
  return pages
})

// Vérifier l'authentification au montage
onMounted(async () => {
  if (!authStore.isAdminUser) {
    router.push('/admin/login')
    return
  }
  
  // Charger tous les posts (incluant les brouillons)
  await blogStore.loadAllPosts()
  
  // Charger les contacts
  await loadContacts()
})

// Actions Blog
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
  try {
    let result
    
    if (editingPost.value) {
      // Mise à jour
      result = await blogStore.updatePost(editingPost.value.id, postData)
    } else {
      // Création
      result = await blogStore.createPost(postData)
    }    
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

// Actions Contacts
const loadContacts = async () => {
  contactsLoading.value = true
  try {
    const result = await contactStore.loadContacts()
    if (result.success) {
      contacts.value = result.data
    } else {
      console.error('Error loading contacts:', result.error)
    }
  } catch (error) {
    console.error('Error loading contacts:', error)
  } finally {
    contactsLoading.value = false
  }
}

const selectContact = async (contact) => {
  selectedContact.value = contact
  
  // Marquer comme lu si ce n'est pas déjà fait
  if (!contact.read) {
    await toggleContactRead(contact)
  }
}

const toggleContactRead = async (contact) => {
  try {
    const result = await contactStore.updateContact(contact.id, { 
      read: !contact.read 
    })
    
    if (result.success) {
      // Mettre à jour localement
      const index = contacts.value.findIndex(c => c.id === contact.id)
      if (index !== -1) {
        contacts.value[index].read = !contacts.value[index].read
      }
      
      // Mettre à jour le contact sélectionné si c'est le même
      if (selectedContact.value?.id === contact.id) {
        selectedContact.value.read = !selectedContact.value.read
      }
    } else {
      alert('Erreur lors de la mise à jour : ' + result.error)
    }
  } catch (error) {
    console.error('Error updating contact:', error)
    alert('Erreur lors de la mise à jour : ' + error.message)
  }
}

const toggleContactResponded = async (contact) => {
  try {
    const result = await contactStore.updateContact(contact.id, { 
      responded: !contact.responded 
    })
    
    if (result.success) {
      // Mettre à jour localement
      const index = contacts.value.findIndex(c => c.id === contact.id)
      if (index !== -1) {
        contacts.value[index].responded = !contacts.value[index].responded
      }
      
      // Mettre à jour le contact sélectionné si c'est le même
      if (selectedContact.value?.id === contact.id) {
        selectedContact.value.responded = !selectedContact.value.responded
      }
    } else {
      alert('Erreur lors de la mise à jour : ' + result.error)
    }
  } catch (error) {
    console.error('Error updating contact:', error)
    alert('Erreur lors de la mise à jour : ' + error.message)
  }
}

const markAllAsRead = async () => {
  try {
    const unreadContacts = contacts.value.filter(contact => !contact.read)
    
    for (const contact of unreadContacts) {
      await contactStore.updateContact(contact.id, { read: true })
    }
    
    // Mettre à jour localement
    contacts.value.forEach(contact => {
      if (!contact.read) {
        contact.read = true
      }
    })
    
    // Mettre à jour le contact sélectionné si nécessaire
    if (selectedContact.value && !selectedContact.value.read) {
      selectedContact.value.read = true
    }
    
  } catch (error) {
    console.error('Error marking all as read:', error)
    alert('Erreur lors de la mise à jour : ' + error.message)
  }
}

const confirmDeleteContact = (contact) => {
  contactToDelete.value = contact
}

const handleDeleteContact = async () => {
  if (!contactToDelete.value) return
  
  try {
    const result = await contactStore.deleteContact(contactToDelete.value.id)
    
    if (result.success) {
      // Supprimer localement
      contacts.value = contacts.value.filter(c => c.id !== contactToDelete.value.id)
      
      // Désélectionner si c'était le contact sélectionné
      if (selectedContact.value?.id === contactToDelete.value.id) {
        selectedContact.value = null
      }
      
      contactToDelete.value = null
    } else {
      alert('Erreur lors de la suppression : ' + result.error)
    }
  } catch (error) {
    console.error('Error deleting contact:', error)
    alert('Erreur lors de la suppression : ' + error.message)
  }
}

// NOUVELLES fonctions pour la pagination et les filtres
const applyFilters = () => {
  currentPage.value = 1 // Retour à la première page lors du changement de filtre
}

const applySorting = () => {
  currentPage.value = 1 // Retour à la première page lors du changement de tri
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

// Actions globales
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
    month: 'short',
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