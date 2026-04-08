import { onBeforeUnmount } from 'vue'

export function useScrollReveal(options: IntersectionObserverInit = {}) {
  const config: IntersectionObserverInit = {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px',
    ...options,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const element = entry.target as HTMLElement
      if (!element) {
        return
      }

      if (entry.isIntersecting) {
        const delay = Number(element.dataset.revealDelay ?? 0)
        element.style.transitionDelay = `${delay}ms`
        element.classList.add('reveal-visible')
        observer.unobserve(element)
      }
    })
  }, config)

  onBeforeUnmount(() => observer.disconnect())

  function reveal(element: HTMLElement | null, delay = 0) {
    if (!element) return
    element.dataset.revealDelay = String(delay)
    element.classList.add('reveal-item')
    observer.observe(element)
  }

  return { reveal }
}
