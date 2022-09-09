<template>
  <section class="auto container">
    <div class="auto__body">
      <h2 class="auto__title title">Автоматизируйте бизнес-процессы</h2>
      <div class="auto__content">
        <p class="auto__desc">
          Подключайте привычные приложения, которые вы используете в работе.
        </p>
        <SmallForm class="form-light"></SmallForm>
      </div>
      <img :src="IMAGE_BASE_URL + 'auto-lines.png'" class="auto__dec" alt="" />
    </div>
  </section>
</template>
<script lang="ts" setup>
import SmallForm from './SmallForm.vue'
import { IMAGE_BASE_URL } from '@/config'
</script>
<style lang="scss">
@import '@/styles/auto/auto-sect.scss';
@import '@/styles/auto/auto-tablet.scss';
@import '@/styles/auto/auto-mobile.scss';
</style>
