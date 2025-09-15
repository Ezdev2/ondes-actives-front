import { defineStore } from 'pinia'
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export const useContactStore = defineStore('contact', {
  state: () => ({
    contacts: [],
    loading: false,
    error: null
  }),

  getters: {
    unreadCount: (state) => {
      return state.contacts.filter(contact => !contact.read).length
    },
    
    getContactById: (state) => {
      return (id) => state.contacts.find(contact => contact.id === id)
    }
  },

  actions: {
    // Créer un nouveau contact
    async createContact(contactData) {
      this.loading = true
      this.error = null
      
      try {
        // S'assurer que les champs requis sont présents et valides
        const docData = {
          first_name: contactData.first_name?.trim() || '',
          last_name: contactData.last_name?.trim() || '',
          email: contactData.email?.trim() || '',
          subject: contactData.subject?.trim() || '',
          message: contactData.message?.trim() || '',
          company: contactData.company?.trim() || '',
          created_at: serverTimestamp(),
          read: false,
          responded: false
        }
        
        // Validation côté client
        if (!docData.first_name || !docData.last_name || !docData.email || !docData.subject || !docData.message) {
          throw new Error('Tous les champs obligatoires doivent être remplis')
        }
        
        // Validation email basique
        if (!docData.email.includes('@') || !docData.email.includes('.')) {
          throw new Error('Adresse email invalide')
        }
        
        console.log('Sending data:', docData)
        
        const docRef = await addDoc(collection(db, 'contacts'), docData)
        
        // Ajouter à l'état local avec l'ID généré
        const newContact = {
          id: docRef.id,
          ...docData,
          created_at: new Date()
        }
        
        this.contacts.unshift(newContact)
        
        return { success: true, id: docRef.id }
      } catch (error) {
        console.error('Error creating contact:', error)
        this.error = error.message
        
        // Messages d'erreur
        if (error.code === 'permission-denied') {
          return { success: false, error: 'Erreur de permissions. Veuillez réessayer.' }
        } else if (error.code === 'invalid-argument') {
          return { success: false, error: 'Données invalides. Vérifiez tous les champs.' }
        } else {
          return { success: false, error: 'Erreur lors de l\'envoi. Veuillez réessayer.' }
        }
      } finally {
        this.loading = false
      }
    },

    // Charger tous les contacts (pour l'admin)
    async loadContacts() {
      this.loading = true
      this.error = null
      
      try {
        const q = query(
          collection(db, 'contacts'),
          orderBy('created_at', 'desc')
        )
        
        const querySnapshot = await getDocs(q)
        
        this.contacts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          created_at: doc.data().created_at?.toDate() || new Date()
        }))
        
        return { success: true, data: this.contacts }
      } catch (error) {
        console.error('Error loading contacts:', error)
        this.error = error.message
        
        if (error.code === 'permission-denied') {
          return { success: false, error: 'Accès non autorisé. Veuillez vous connecter en tant qu\'administrateur.' }
        } else {
          return { success: false, error: error.message }
        }
      } finally {
        this.loading = false
      }
    },

    // Mettre à jour un contact
    async updateContact(contactId, updates) {
      try {
        const contactRef = doc(db, 'contacts', contactId)
        await updateDoc(contactRef, updates)
        
        // Mettre à jour l'état local
        const index = this.contacts.findIndex(c => c.id === contactId)
        if (index !== -1) {
          this.contacts[index] = { ...this.contacts[index], ...updates }
        }
        
        return { success: true }
      } catch (error) {
        console.error('Error updating contact:', error)
        this.error = error.message
        
        if (error.code === 'permission-denied') {
          return { success: false, error: 'Accès non autorisé pour modifier ce contact.' }
        } else {
          return { success: false, error: error.message }
        }
      }
    },

    // Supprimer un contact
    async deleteContact(contactId) {
      try {
        await deleteDoc(doc(db, 'contacts', contactId))
        
        // Supprimer de l'état local
        this.contacts = this.contacts.filter(c => c.id !== contactId)
        
        return { success: true }
      } catch (error) {
        console.error('Error deleting contact:', error)
        this.error = error.message
        
        if (error.code === 'permission-denied') {
          return { success: false, error: 'Accès non autorisé pour supprimer ce contact.' }
        } else {
          return { success: false, error: error.message }
        }
      }
    },

    // Marquer tous les contacts comme lus
    async markAllAsRead() {
      try {
        const unreadContacts = this.contacts.filter(contact => !contact.read)
        
        const updatePromises = unreadContacts.map(contact => 
          updateDoc(doc(db, 'contacts', contact.id), { read: true })
        )
        
        await Promise.all(updatePromises)
        
        // Mettre à jour l'état local
        this.contacts.forEach(contact => {
          if (!contact.read) {
            contact.read = true
          }
        })
        
        return { success: true }
      } catch (error) {
        console.error('Error marking all as read:', error)
        this.error = error.message
        
        if (error.code === 'permission-denied') {
          return { success: false, error: 'Accès non autorisé pour modifier les contacts.' }
        } else {
          return { success: false, error: error.message }
        }
      }
    },

    // Réinitialiser l'état
    resetState() {
      this.contacts = []
      this.loading = false
      this.error = null
    }
  }
})