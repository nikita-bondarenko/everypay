<template>
  <section class="how container">
    <h2 class="how__title title">Как это работает</h2>
    <ul class="how__list">
      <li
        v-for="(item, index) in howData"
        :index="index"
        :key="index"
        class="how__item"
      >
        <img :src="IMAGE_BASE_URL + item.imgUrl" alt="Иллюстрация" />
        <p class="how__desc" :id="`desc-${item.id}`"></p>
      </li>
    </ul>
    <img :src="IMAGE_BASE_URL + 'lines.png'" alt="" class="how__lines" />
  </section>
</template>
<script lang="ts">
import { IMAGE_BASE_URL } from '@/config'
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  data () {
    return {
      IMAGE_BASE_URL
    }
  },
  setup () {
    let id = 0

    const howData = [
      {
        desc: ['Подключите свой', 'банковский счет'],
        imgUrl: 'connect.png'
      },
      {
        desc: ['Выберите, куда и кому', 'отправлять информацию'],
        imgUrl: 'choise.png'
      },
      {
        desc: ['Получайте информацию', 'о поступивших оплатах'],
        imgUrl: 'note.png'
      }
    ].map((item) => {
      id++
      return {
        ...item,
        id
      }
    })

    onMounted(() => {
      howData.forEach((item) => {
        const element = document.getElementById(`desc-${item.id}`)

        if (element !== null) {
          element.innerHTML = item.desc.reduce((str, stroke) => {
            return str.length === 0 ? stroke : str + '</br>' + stroke
          }, '')
        }
      })
    })

    return {
      howData
    }
  }
})
</script>
<style lang="scss">
@import '@/styles/how/how-sect.scss';
@import '@/styles/how/how-tablet.scss';
@import '@/styles/how/how-mobile.scss';
</style>
