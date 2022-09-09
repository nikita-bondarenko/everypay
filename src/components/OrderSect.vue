<template>
  <section class="order container">
    <ul v-if="store.isDesktop" class="order__list">
      <li
        v-for="(slide, index) in orderData"
        :key="index"
        :index="index"
        class="order__item slide"
      >
        <div class="slide__body">
          <div class="slide__content">
            <h2 :id="`title-${slide.id}`" class="slide__title title"></h2>
            <p class="slide__desc">{{ slide.desc }}</p>

            <SmallForm class="slide__form"></SmallForm>
          </div>
          <img
            class="slide__image"
            :src="IMAGE_BASE_URL + slide.imgUrl"
            alt="Иллюстрация услуги"
          />
        </div>
      </li>
    </ul>

    <carousel v-else :items-to-show="1" :autoplay="0" :transition="600">
      <slide
        v-for="(slide, index) in orderData"
        :key="index"
        :index="index"
        class="order__item slide"
        :class="`slide-${index + 1}`"
      >
        <div class="slide__body">
          <div class="slide__content">
            <h2 :id="`title-${slide.id}`" class="slide__title title"></h2>
            <p class="slide__desc">{{ slide.desc }}</p>

            <SmallForm class="slide__form"></SmallForm>
          </div>
          <img
            class="slide__image"
            :src="IMAGE_BASE_URL + slide.imgUrl"
            alt="Иллюстрация услуги"
          />
        </div>
      </slide>
    </carousel>

    <div class="order__chat chat">
      <img :src="IMAGE_BASE_URL + 'sign.png'" alt="" class="chat__lines" />
      <img :src="IMAGE_BASE_URL + 'chat.png'" alt="Иллюстрация" />
      <div class="chat__content">
        <h3 class="chat__title">
          Мы предлагаем вам&nbsp;простой инструмент, чтобы автоматизировать
          информирование о поступающих оплатах.
        </h3>
        <p class="chat__desc">
          Бухгалтер на карантине, а директор недоступен? Ответственный сотрудник
          моментально узнает о&nbsp;поступлении денег на счет компании.
        </p>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, onMounted, watch } from 'vue'
import { IMAGE_BASE_URL } from '@/config'
import SmallForm from './SmallForm.vue'
import { store } from '@/store'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default defineComponent({
  data () {
    return {
      IMAGE_BASE_URL,
      store
    }
  },
  components: { SmallForm, Carousel, Slide },
  setup () {
    let id = 0

    const orderData = [
      {
        header: 'Не пропускайте важные&nbsp;оплаты',
        desc: 'Если от них зависят ваши проекты или старт рекламных кампаний',
        imgUrl: 'money.png'
      },
      {
        header: 'Сократите издержки на&nbsp;бухгалтерию и&nbsp;коммуникации',
        desc: 'Получайте информацию о платежах на счет компании там, где вам удобно',
        imgUrl: 'pig.png'
      },
      {
        header: 'Создавайте собственные сценарии действий',
        desc: 'при поступлении денег на счет вашей компании',
        imgUrl: 'screen.png'
      },
      {
        header:
          'Реагируйте на&nbsp;платежи так&nbsp;быстро, как&nbsp;они поступают на&nbsp;ваш&nbsp;счет',
        desc: null,
        imgUrl: 'mobile.png'
      }
    ].map((item) => {
      id++
      return {
        ...item,
        id
      }
    })

    const fillTitle = () => {
      orderData.forEach((item) => {
        const element = document.getElementById(`title-${item.id}`)
        if (element) {
          element.innerHTML = item.header
        }
      })
    }

    onMounted(() => {
      fillTitle()
    })

    window.addEventListener('resize', () => fillTitle())

    return {
      orderData
    }
  }
})
</script>
<style lang="scss">
@import '@/styles/order/order-sect.scss';
@import '@/styles/order/order-tablet.scss';
@import '@/styles/order/order-mobile.scss';
</style>
