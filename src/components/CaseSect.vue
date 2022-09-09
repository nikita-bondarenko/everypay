<template>
  <section class="case container">
    <h2 class="case__title title">Кейсы</h2>
    <ul v-if="store.isDesktop" class="case__list">
      <li
        v-for="(item, index) in data"
        :key="index"
        :index="index"
        class="case__item block"
      >
        <img :src="IMAGE_BASE_URL + item.img" alt="" />
        <h3 class="block__title" :id="item.id"></h3>
        <a href="#">
          Читать кейс
          <span
            :style="`background: no-repeat center / contain url(${IMAGE_BASE_URL}arrow.svg)`"
          ></span>
        </a>
      </li>
    </ul>
    <carousel v-else :items-to-show="itemsToShow">
      <slide v-for="(item, index) in data" :key="index" :index="index">
        <div class="case__item block">
          <img :src="IMAGE_BASE_URL + item.img" alt="" />
          <h3 class="block__title" :id="item.id"></h3>
          <a href="#">
            Читать кейс
            <span
              :style="`background: no-repeat center / contain url(${IMAGE_BASE_URL}arrow.svg)`"
            ></span>
          </a>
        </div>
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>

    <img class="case__dec" :src="IMAGE_BASE_URL + 'case-lines.png'" alt="" />
  </section>
</template>
<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import { IMAGE_BASE_URL } from '@/config'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { store } from '@/store'

const itemsToShow = computed(() => (store.isMobile ? 1.3 : 2))

let id = 0

const data = [
  {
    title: 'Автоматизация диджитал&#8209;агентства',
    img: 'case-1.png'
  },
  {
    title: 'Приём платежей в&nbsp;рекламной медиа&#8209;группе',
    img: 'case-2.png'
  },
  {
    title: 'Оптимизация бухгалтерии в&nbsp;производственной компании',
    img: 'case-2.png'
  }
].map((item) => {
  id++

  return {
    ...item,
    id: `case-title-${id}`
  }
})

const fillTitle = () => {
  data.forEach((item) => {
    const element = document.getElementById(item.id)
    if (element) {
      element.innerHTML = item.title
    }
  })
}

onMounted(() => fillTitle())

window.addEventListener('resize', () => fillTitle())
</script>
<style lang="scss">
@import '@/styles/case/case-sect.scss';
@import '@/styles/case/case-tablet.scss';
@import '@/styles/case/case-mobile.scss';
</style>
