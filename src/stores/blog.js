import { defineStore } from 'pinia'
import { ref, readonly } from 'vue'

export const useBlogStore = defineStore('blog', () => {
  const posts = ref([
    {
      id: '1',
      title: "Bienvenue sur le blog d'Ondes Actives",
      description: "Découvrez notre nouveau blog dédié à l'entrepreneuriat et à l'administration d'entreprise.",
      content: `# Bienvenue sur notre blog !

Nous sommes ravis de vous accueillir sur le blog d'**Ondes Actives**, votre partenaire de confiance pour l'administration et l'assistance aux entrepreneurs.

## Pourquoi ce blog ?

Dans un monde entrepreneurial en constante évolution, nous avons créé ce blog pour vous accompagner au quotidien avec :

- **Des conseils pratiques** pour optimiser votre gestion d'entreprise
- **Des actualités** sur les réglementations et obligations administratives
- **Des retours d'expérience** de nos clients et partenaires
- **Des guides détaillés** pour vous simplifier la vie d'entrepreneur

## Nos thématiques principales

### 🏢 Administration d'entreprise
Comptabilité, déclarations, formalités... Nous vous guidons dans toutes vos démarches administratives.

### 🚨 Gestion des urgences
Comment réagir face aux situations critiques ? Nos experts partagent leurs conseils.

### 💡 Conseils entrepreneuriaux
Stratégies de développement, optimisation des processus, formation... Tout pour faire grandir votre entreprise.

## Restez connectés

N'hésitez pas à [nous contacter](/contact) pour nous suggérer des sujets qui vous intéressent ou pour partager vos expériences.

Suivez régulièrement ce blog pour ne rien manquer de nos actualités et conseils !

---

*L'équipe Ondes Actives*`,
      author: 'Ondes Actives',
      publishDate: '2024-01-15T10:00:00Z',
      heroImage: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['bienvenue', 'entrepreneuriat', 'administration'],
      slug: 'bienvenue',
      draft: false
    },
    {
      id: '2',
      title: "5 conseils pour optimiser votre gestion administrative",
      description: "Découvrez nos conseils d'experts pour simplifier et optimiser la gestion administrative de votre entreprise.",
      content: `# 5 conseils pour optimiser votre gestion administrative

La gestion administrative peut rapidement devenir un casse-tête pour les entrepreneurs. Voici nos 5 conseils essentiels pour l'optimiser.

## 1. Digitalisez vos documents

Fini les piles de papiers ! Numérisez tous vos documents importants et organisez-les dans un système de classement numérique clair.

## 2. Automatisez vos processus répétitifs

Utilisez des outils pour automatiser vos facturations, relances et déclarations récurrentes.

## 3. Planifiez vos échéances

Créez un calendrier des obligations fiscales et sociales pour ne jamais être pris au dépourvu.

## 4. Externalisez ce qui peut l'être

Concentrez-vous sur votre cœur de métier en confiant certaines tâches administratives à des experts.

## 5. Formez-vous régulièrement

Restez à jour sur les évolutions réglementaires qui impactent votre activité.

---

*Besoin d'aide ? Contactez notre équipe d'experts !*`,
      author: 'Laurie Le Séhan',
      publishDate: '2024-01-20T14:30:00Z',
      heroImage: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['gestion', 'administration', 'conseils'],
      slug: 'conseils-gestion-administrative',
      draft: false
    }
  ])

  const getPostBySlug = (slug) => {
    return posts.value.find(post => post.slug === slug && !post.draft)
  }

  const getPublishedPosts = () => {
    return posts.value.filter(post => !post.draft).sort((a, b) => 
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
  }

  return {
    posts: readonly(posts),
    getPostBySlug,
    getPublishedPosts
  }
})