import { defineStore } from "pinia";
import { ref } from "vue";
import { 
  collection, 
  doc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore'
import { db } from "@/lib/firebase";

export const useBlogStore = defineStore("blog", () => {
  const posts = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // Collection reference
  const postsCollection = collection(db, 'blog_posts')

  // Charger tous les posts publiés (pour le public)
  const loadPublishedPosts = async () => {
    try {
      loading.value = true;
      error.value = null;

      const q = query(
        postsCollection,
        where("draft", "==", false),
        orderBy("publishDate", "desc")
      );

      const querySnapshot = await getDocs(q);
      const data = [];

      querySnapshot.forEach((doc) => {
        const postData = doc.data();
        data.push({
          id: doc.id,
          ...postData,
          publishDate: postData.publishDate?.toDate?.() || postData.publishDate,
          createdAt: postData.createdAt?.toDate?.() || postData.createdAt,
        });
      });

      posts.value = data;
    } catch (err) {
      error.value = err.message;
      console.error("Error loading published posts:", err);
    } finally {
      loading.value = false;
    }
  };

  // Charger tous les posts (pour l'admin)
  const loadAllPosts = async () => {
    try {
      loading.value = true;
      error.value = null;

      const q = query(postsCollection, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const data = [];

      querySnapshot.forEach((doc) => {
        const postData = doc.data();
        data.push({
          id: doc.id,
          ...postData,
          publishDate: postData.publishDate?.toDate?.() || postData.publishDate,
          createdAt: postData.createdAt?.toDate?.() || postData.createdAt,
        });
      });

      posts.value = data;
    } catch (err) {
      error.value = err.message;
      console.error("Error loading all posts:", err);
    } finally {
      loading.value = false;
    }
  };

  // Créer un nouveau post
  const createPost = async (postData) => {
    try {
      loading.value = true;
      error.value = null;

      const newPost = {
        title: postData.title,
        description: postData.description,
        content: postData.content,
        author: postData.author,
        slug: postData.slug,
        heroImage: postData.heroImage,
        tags: postData.tags || [],
        draft: postData.draft,
        publishDate: new Date(postData.publishDate),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      const docRef = await addDoc(postsCollection, newPost);

      // Récupérer le post créé avec l'ID
      const createdPost = {
        id: docRef.id,
        ...newPost,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      posts.value.unshift(createdPost);

      return { success: true, data: createdPost };
    } catch (err) {
      console.error("Error creating post:", err);
      error.value = err.message;
      return { success: false, error: err.message };
    } finally {
      loading.value = false;
    }
  };

  // Mettre à jour un post
  const updatePost = async (id, postData) => {
    try {
      loading.value = true;
      error.value = null;

      const postRef = doc(db, 'blog_posts', id);
      
      const updatedData = {
        title: postData.title,
        description: postData.description,
        content: postData.content,
        author: postData.author,
        slug: postData.slug,
        heroImage: postData.heroImage,
        tags: postData.tags || [],
        draft: postData.draft,
        publishDate: new Date(postData.publishDate),
        updatedAt: serverTimestamp()
      };

      await updateDoc(postRef, updatedData);

      // Mettre à jour le post dans le store
      const updatedPost = {
        id: id,
        ...updatedData,
        updatedAt: new Date()
      };

      const index = posts.value.findIndex((post) => post.id === id);
      if (index !== -1) {
        posts.value[index] = { ...posts.value[index], ...updatedPost };
      }

      return { success: true, data: updatedPost };
    } catch (err) {
      error.value = err.message;
      console.error("Error updating post:", err);
      return { success: false, error: err.message };
    } finally {
      loading.value = false;
    }
  };

  // Supprimer un post
  const deletePost = async (id) => {
    try {
      loading.value = true;
      error.value = null;

      const postRef = doc(db, 'blog_posts', id);
      await deleteDoc(postRef);

      // Retirer le post du store
      posts.value = posts.value.filter((post) => post.id !== id);

      return { success: true };
    } catch (err) {
      error.value = err.message;
      console.error("Error deleting post:", err);
      return { success: false, error: err.message };
    } finally {
      loading.value = false;
    }
  };

  // Obtenir un post par slug
  const getPostBySlug = (slug) => {
    return posts.value.find((post) => post.slug === slug && !post.draft);
  };

  // Obtenir tous les posts publiés
  const getPublishedPosts = () => {
    return posts.value
      .filter((post) => !post.draft)
      .sort(
        (a, b) => {
          const dateA = new Date(a.publishDate);
          const dateB = new Date(b.publishDate);
          return dateB.getTime() - dateA.getTime();
        }
      );
  };

  // Générer un slug à partir du titre
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Retirer les accents
      .replace(/[^a-z0-9\s-]/g, "") // Retirer les caractères spéciaux
      .trim()
      .replace(/\s+/g, "-") // Remplacer les espaces par des tirets
      .replace(/-+/g, "-"); // Éviter les tirets multiples
  };

  // Vérifier si un slug existe déjà
  const checkSlugExists = async (slug, excludeId = null) => {
    try {
      const q = query(postsCollection, where("slug", "==", slug));
      const querySnapshot = await getDocs(q);
      
      if (excludeId) {
        let exists = false;
        querySnapshot.forEach((doc) => {
          if (doc.id !== excludeId) {
            exists = true;
          }
        });
        return exists;
      }

      return !querySnapshot.empty;
    } catch (err) {
      console.error("Error checking slug:", err);
      return false;
    }
  };

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
    checkSlugExists,
  };
});