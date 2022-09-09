<template>
  <section class="rate container">
    <h2 class="rate__title title">Тарифы</h2>
    <p class="rate__desc">
      Everypay находится в&nbsp;стадии закрытого beta&#8209;теста, но у&nbsp;
      вас есть возможность присоединиться к тестированию сервиса. <br />
      <br />
      <span>
        Для компаний, участвующих в тестировании, сервис навсегда бесплатен.
        Напишите нам и&nbsp;мы&nbsp;с&nbsp;вами свяжемся.
      </span>
    </p>
    <SmallForm class="rate__form"></SmallForm>
    <img :src="IMAGE_BASE_URL + 'ruble.png'" alt="Рубль" class="rate__image" />
  </section>
</template>
<script setup>
import SmallForm from './SmallForm.vue'
import { IMAGE_BASE_URL } from '@/config'
</script>
<style lang="scss">
@import '@/styles/rate/rate-sect.scss';
@import '@/styles/rate/rate-tablet.scss';
@import '@/styles/rate/rate-mobile.scss';
</style>
