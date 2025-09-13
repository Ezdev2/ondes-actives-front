import { defineStore } from 'pinia'
import { ref, readonly } from 'vue'

export const useSiteStore = defineStore('site', () => {
  const siteConfig = ref({
    title: 'Ondes Actives',
    description: 'Administration et assistance aux entrepreneurs pour vous accompagner dans votre réussite professionnelle.',
    url: 'https://ondesactives.netlify.app',
    email: 'contact@ondesactives.com',
    phone: '+33 1 23 45 67 89',
    address: '123 Avenue des Entrepreneurs, 75001 Paris, France',
    social: {
      linkedin: 'https://www.linkedin.com/in/laurie-le-s%C3%A9han-884ab756',
      instagram: 'https://www.instagram.com/ondes_actives?igsh=MXE1c3F4OW1vbzZu',
      twitter: '#'
    }
  })

  const navigation = ref([
    { name: 'Accueil', href: '/', current: false },
    { name: 'Solutions', href: '/#services', current: false },
    { name: 'À Propos', href: '/about', current: false },
    { name: 'Blog', href: '/blog', current: false },
    // { name: 'FAQ', href: '/faq', current: false },
    { name: 'Contact', href: '/contact', current: false }
  ])

  const updateCurrentNavigation = (path) => {
    navigation.value.forEach(item => {
      item.current = item.href === path || (item.href !== '/' && path.startsWith(item.href))
    })
  }

  return {
    siteConfig: readonly(siteConfig),
    navigation: readonly(navigation),
    updateCurrentNavigation
  }
})