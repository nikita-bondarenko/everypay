import { reactive } from 'vue'

const store = reactive({
  isDesktop: false,
  isTablet: false,
  isMobile: false,
  getGajetWidth () {
    const width = document.body.clientWidth
    if (width > 1060) {
      store.isDesktop = true
      store.isTablet = false
      store.isMobile = false
    } else if (width > 600) {
      store.isDesktop = false
      store.isTablet = true
      store.isMobile = false
    } else {
      store.isDesktop = false
      store.isTablet = false
      store.isMobile = true
    }
  }
})

export { store }
