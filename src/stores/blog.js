import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '@/lib/supabase'

export const useBlogStore = defineStore('blog', () => {
  const posts = ref([])
  const loading = ref(false)
  const error = ref(null)

  // Charger tous les posts publiés (pour le public)
  const loadPublishedPosts = async () => {
    try {
      loading.value = true
      error.value = null

      const { data, error: supabaseError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('draft', false)
        .order('publish_date', { ascending: false })

      if (supabaseError) throw supabaseError

      posts.value = data.map(post => ({
        ...post,
        publishDate: post.publish_date,
        heroImage: post.hero_image
      }))

    } catch (err) {
      error.value = err.message
      console.error('Error loading published posts:', err)
    } finally {
      loading.value = false
    }
  }

  // Charger tous les posts (pour l'admin)
  const loadAllPosts = async () => {
    try {
      loading.value = true
      error.value = null

      const { data, error: supabaseError } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false })

      if (supabaseError) throw supabaseError

      posts.value = data.map(post => ({
        ...post,
        publishDate: post.publish_date,
        heroImage: post.hero_image
      }))

    } catch (err) {
      error.value = err.message
      console.error('Error loading all posts:', err)
    } finally {
      loading.value = false
    }
  }

  // Créer un nouveau post
  const createPost = async (postData) => {
    try {
      loading.value = true
      error.value = null

      const { data, error: supabaseError } = await supabase
        .from('blog_posts')
        .insert([{
          title: postData.title,
          description: postData.description,
          content: postData.content,
          author: postData.author,
          slug: postData.slug,
          hero_image: postData.heroImage,
          tags: postData.tags,
          draft: postData.draft,
          publish_date: postData.publishDate
        }])
        .select()
        .single()

      if (supabaseError) throw supabaseError

      // Ajouter le nouveau post au store
      const newPost = {
        ...data,
        publishDate: data.publish_date,
        heroImage: data.hero_image
      }
      posts.value.unshift(newPost)

      return { success: true, data: newPost }
    } catch (err) {
      error.value = err.message
      console.error('Error creating post:', err)
      return { success: false, error: err.message }
    } finally {
      loading.value = false
    }
  }

  // Mettre à jour un post
  const updatePost = async (id, postData) => {
    try {
      loading.value = true
      error.value = null

      const { data, error: supabaseError } = await supabase
        .from('blog_posts')
        .update({
          title: postData.title,
          description: postData.description,
          content: postData.content,
          author: postData.author,
          slug: postData.slug,
          hero_image: postData.heroImage,
          tags: postData.tags,
          draft: postData.draft,
          publish_date: postData.publishDate
        })
        .eq('id', id)
        .select()
        .single()

      if (supabaseError) throw supabaseError

      // Mettre à jour le post dans le store
      const updatedPost = {
        ...data,
        publishDate: data.publish_date,
        heroImage: data.hero_image
      }
      
      const index = posts.value.findIndex(post => post.id === id)
      if (index !== -1) {
        posts.value[index] = updatedPost
      }

      return { success: true, data: updatedPost }
    } catch (err) {
      error.value = err.message
      console.error('Error updating post:', err)
      return { success: false, error: err.message }
    } finally {
      loading.value = false
    }
  }

  // Supprimer un post
  const deletePost = async (id) => {
    try {
      loading.value = true
      error.value = null

      const { error: supabaseError } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id)

      if (supabaseError) throw supabaseError

      // Retirer le post du store
      posts.value = posts.value.filter(post => post.id !== id)

      return { success: true }
    } catch (err) {
      error.value = err.message
      console.error('Error deleting post:', err)
      return { success: false, error: err.message }
    } finally {
      loading.value = false
    }
  }

  // Obtenir un post par slug
  const getPostBySlug = (slug) => {
    return posts.value.find(post => post.slug === slug && !post.draft)
  }

  // Obtenir tous les posts publiés
  const getPublishedPosts = () => {
    return posts.value.filter(post => !post.draft)
      .sort((a, b) => new Date(b.publishDate || b.publish_date).getTime() - new Date(a.publishDate || a.publish_date).getTime())
  }

  // Générer un slug à partir du titre
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Retirer les accents
      .replace(/[^a-z0-9\s-]/g, '') // Retirer les caractères spéciaux
      .trim()
      .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
      .replace(/-+/g, '-') // Éviter les tirets multiples
  }

  // Vérifier si un slug existe déjà
  const checkSlugExists = async (slug, excludeId = null) => {
    try {
      let query = supabase
        .from('blog_posts')
        .select('id')
        .eq('slug', slug)

      if (excludeId) {
        query = query.neq('id', excludeId)
      }

      const { data, error: supabaseError } = await query

      if (supabaseError) throw supabaseError

      return data && data.length > 0
    } catch (err) {
      console.error('Error checking slug:', err)
      return false
    }
  }

  return {
    posts,
    loading,
    error,
    loadPublishedPosts,
    loadAllPosts,
    createPost,
    updatePost,
    deletePost,
    getPostBySlug,
    getPublishedPosts,
    generateSlug,
    checkSlugExists
  }
})