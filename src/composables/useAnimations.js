import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimations() {
  let observer = null

  const initAnimations = () => {
    const animateElements = document.querySelectorAll(
      '.animate-on-scroll, .animate-fade-in-up, .animate-fade-in-down, .animate-fade-in-left, .animate-fade-in-right, .animate-slide-up, .animate-slide-up-delay, .animate-slide-up-delay-2'
    )

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    animateElements.forEach((element) => {
      observer?.observe(element)
    })
  }

  onMounted(() => {
    initAnimations()
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return {
    initAnimations
  }
}

export function useFAQAccordion() {
  const toggleFAQ = (index) => {
    const faqButtons = document.querySelectorAll('.faq-button')
    const button = faqButtons[index]
    const answer = button?.nextElementSibling
    const icon = button?.querySelector('.faq-icon')
    
    if (!button || !answer || !icon) return

    const isOpen = !answer.classList.contains('hidden')
    
    // Close all other FAQs
    faqButtons.forEach((otherButton, otherIndex) => {
      if (otherIndex !== index) {
        const otherAnswer = otherButton.nextElementSibling
        const otherIcon = otherButton.querySelector('.faq-icon')
        otherAnswer?.classList.add('hidden')
        otherIcon?.classList.remove('rotate-180')
      }
    })
    
    // Toggle current FAQ
    if (isOpen) {
      answer.classList.add('hidden')
      icon.classList.remove('rotate-180')
    } else {
      answer.classList.remove('hidden')
      icon.classList.add('rotate-180')
    }
  }

  return {
    toggleFAQ
  }
}