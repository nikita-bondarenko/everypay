<template>
  <section class="soon container">
    <h2 class="soon__title title">Скоро появится</h2>
    <ul class="soon__list">
      <li
        v-for="(item, index) in data"
        :key="index"
        :index="index"
        class="soon__item item"
      >
        <h3 class="item__title">{{ item.title }}</h3>
        <div class="item__content">
          <span
            class="item__stick"
            :style="`background-image:url('${IMAGE_BASE_URL}soon-stick.svg')`"
          >
          </span>
          <p class="item__desc">{{ item.desc }}</p>
          <ul v-if="item.img" class="item__gallery">
            <li
              v-for="(img, index) in item.img"
              :key="index"
              class="item__image"
            >
              <img :src="IMAGE_BASE_URL + img" alt="" />
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <p class="soon__more">И еще 17 нововведений</p>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { IMAGE_BASE_URL } from '@/config'

export default defineComponent({
  setup () {
    const data = [
      {
        title: 'Интеграции с CRM-системами Битрикс 24 и amoCRM',
        desc: 'Интегрируйте уведомления о платежах прямо в вашу CRM, в которой работают ваши сотрудники',
        img: ['cloud.png', 'crm.png']
      },
      {
        title: 'Открытое API Everypay',
        desc: 'Подключайте свои системы и интегрируйте уведомления о поступающих платежах самостоятельно с помощью простого API Everypay'
      },
      {
        title: 'Автоматическое создание платежек',
        desc: 'Загрузите скан счета на оплату в нашу систему и в банк-клиенте автоматически будет создано платежное поручение на основании данных из счета. С помощью технологий компьютерного зрения и машинного обучения мы достигаем высокой точности и скорости работы'
      }
    ]
    return {
      IMAGE_BASE_URL,
      data
    }
  }
})
</script>
<style lang="scss">
@import '@/styles/soon/soon-sect.scss';
@import '@/styles/soon/soon-tablet.scss';
@import '@/styles/soon/soon-mobile.scss';
</style>
