<template>
  <section class="banks container">
    <h2 class="banks__title title">Банки и интеграции</h2>
    <div class="banks__content">
      <ul class="banks__list">
        <li class="banks__block block left">
          <h4 class="block__title">Банки</h4>
          <ul class="left__top">
            <li
              v-for="(item, index) in banks"
              :id="`bank-${index}`"
              :key="index"
              class="left__bank"
            >
              <img :src="IMAGE_BASE_URL + item.img" alt="Логотип банка" />
            </li>
          </ul>
          <div class="left__bottom one-c">
            <img
              :src="IMAGE_BASE_URL + 'plus.png'"
              alt="Плюс"
              class="one-c__plus"
            />
            <img
              :src="IMAGE_BASE_URL + 'file.png'"
              alt="Файл"
              class="one-c__img"
            />
            <p class="one-c__desc">Загрузка из <b>1С </b></p>
          </div>
        </li>
        <li class="banks__block block right">
          <h4 class="block__title">Интеграции</h4>
          <ul class="block__list">
            <li
              v-for="(item, index) in integrations"
              :key="index"
              class="block__item"
            >
              <img
                :src="IMAGE_BASE_URL + item.img"
                alt="Изображение интеграции"
              />
              <p class="block__desc">{{ item.desc }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { IMAGE_BASE_URL } from '@/config'
const integrations = [
  { desc: 'Push-web уведомления', img: 'bell.png' },
  {
    desc: 'E-mail уведомления',
    img: 'mail.png'
  },
  {
    desc: 'Telegram',
    img: 'telegram.png'
  }
]

const banks = [
  {
    img: 'point.png'
  },
  {
    img: 'tinkoff.png'
  },
  { img: 'module.png' }
]
</script>
<style lang="scss">
@import '@/styles/banks/banks-sect.scss';
@import '@/styles/banks/banks-tablet.scss';
@import '@/styles/banks/banks-mobile.scss';
</style>
