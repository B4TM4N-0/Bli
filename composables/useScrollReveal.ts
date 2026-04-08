import { onBeforeUnmount } from 'vue'

export function useScrollReveal(options: IntersectionObserverInit = {}) {
  const isClient = process.client ?? typeof window !== 'undefined'
  const config: IntersectionObserverInit = {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px',
    ...options,
  }

  let observer: IntersectionObserver | null = null

  function createObserver() {
    if (!isClient || typeof IntersectionObserver === 'undefined') {
      return null
    }

    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as any
        if (!element) {
          return
        }

        if (entry.isIntersecting) {
          const delay = Number(element.dataset.revealDelay ?? 0)
          element.style.transitionDelay = `${delay}ms`
          element.classList.add('reveal-visible')
          observer?.unobserve(element)
        }
      })
    }, config)
  }

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  function reveal(element: any, delay = 0) {
    if (!element || !isClient) return

    element.dataset.revealDelay = String(delay)
    element.classList.add('reveal-item')

    if (!observer) {
      observer = createObserver()
    }

    observer?.observe(element)
  }

  return { reveal }
}
