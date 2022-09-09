<template>
  <header class="container header">
    <a href="" class="header__logo">
      <img :src="IMAGE_BASE_URL + 'logo.svg'" alt="Логотип" />
    </a>
    <nav class="header__nav nav" :class="{ 'nav--open': isNavOpen }">
      <ul class="nav__list">
        <li v-for="(item, index) in navArr" :key="index" class="nav__item">
          <a href="" class="nav__link"> {{ item }} </a>
        </li>
        <li v-if="!store.isDesktop" class="nav__item">
          <a href="" class="nav__link"> Контакты </a>
        </li>
        <li class="nav__item">
          <button v-if="!store.isDesktop" class="button header__enter">
            Вход
          </button>
        </li>
      </ul>
    </nav>
    <ul v-if="store.isDesktop" class="header__lang lang">
      <li v-for="(item, index) in langs" :key="index" class="lang__item">
        <a class="lang__link">{{ item }}</a>
      </li>
    </ul>
    <button v-if="store.isDesktop" class="header__connect">
      <b>Подключиться </b>
    </button>
    <button
      class="header__open-button"
      @click="isNavOpen = !isNavOpen"
      :style="`background-image:url('${IMAGE_BASE_URL}open.svg')`"
      v-if="!store.isDesktop"
    ></button>
  </header>
</template>
<script lang="ts">
import { IMAGE_BASE_URL } from '@/config'
import { defineComponent, ref, watch } from 'vue'
import { store } from '@/store'
export default defineComponent({
  setup () {
    const isNavOpen = ref(false)

    watch(
      () => isNavOpen.value,
      (value) => {
        if (value) {
          document.body.style.overflowY = 'hidden'
        } else {
          document.body.style.overflowY = 'auto'
        }
      }
    )

    const navArr = [
      'Как это работает?',
      'Для кого',
      'Кейсы',
      'Тарифы',
      'Безопасность'
    ]

    const langs = ['RU', 'EN']
    return {
      isNavOpen,
      store,
      langs,
      navArr,
      IMAGE_BASE_URL
    }
  }
})
</script>
<style lang="scss">
@import '@/styles/header/header-sect.scss';
@import '@/styles/header/header-sect-tablet.scss';
@import '@/styles/header/header-sect-modile.scss';
</style>
