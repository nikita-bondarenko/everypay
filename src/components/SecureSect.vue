<template>
  <section class="secure container">
    <h2 class="secure__title title">Безопасность</h2>
    <p class="secure__desc">
      Использование Everypay полностью безопасно: подключение к
      банковскому&nbsp;счету осуществляется в режиме «только&nbsp;для получения
      выписок», а хранение информации в системе защищено
      и&nbsp;деперсонализировано.
    </p>
    <picture class="secure__image">
      <source
        :srcset="IMAGE_BASE_URL + 'secure-tablet.png'"
        media="(max-width: 1100px) "
      />
      <img :src="IMAGE_BASE_URL + 'secure.png'" />
    </picture>
  </section>
</template>
<script lang="ts" setup>
import { IMAGE_BASE_URL } from '@/config'
</script>
<style lang="scss">
@import '@/styles/secure/secure-sect.scss';
@import '@/styles/secure/secure-tablet.scss';
@import '@/styles/secure/secure-mobile.scss';
</style>
