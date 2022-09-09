import { createApp } from 'vue'
import App from './App.vue'
// eslint-disable-next-line
const SsrCarousel = require('vue-ssr-carousel')

createApp(App).component('ssr-carousel', SsrCarousel).mount('#app')
