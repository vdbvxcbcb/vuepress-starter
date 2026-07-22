const SMOOTH_SCROLLING_FLAG = '__VUEPRESS_SMOOTH_SCROLLING__'
let resetTimer

function markSmoothScrolling () {
  window[SMOOTH_SCROLLING_FLAG] = true
  clearTimeout(resetTimer)
  resetTimer = setTimeout(() => {
    window[SMOOTH_SCROLLING_FLAG] = false
  }, 900)
}

export default ({ Vue, router }) => {
  router.options.scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
      markSmoothScrolling()
      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: savedPosition.y,
          behavior: 'smooth'
        })
      })
      return false
    }

    if (to.hash) {
      if (Vue.$vuepress.$get('disableScrollBehavior')) return false

      const id = decodeURIComponent(to.hash).replace(/^#/, '')
      markSmoothScrolling()
      window.requestAnimationFrame(() => {
        const target = document.getElementById(id)
        if (!target) {
          window[SMOOTH_SCROLLING_FLAG] = false
          return
        }

        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset,
          behavior: 'smooth'
        })
      })
      return false
    }

    markSmoothScrolling()
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
    return false
  }
}
