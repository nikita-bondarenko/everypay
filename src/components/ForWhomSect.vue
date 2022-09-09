<template>
  <section class="for-whom container">
    <h2 class="for-whom__title title">Для кого</h2>
    <ul class="for-whom__list">
      <li
        v-for="(item, index) in data"
        :key="index"
        class="for-whom__item example"
      >
        <img :src="IMAGE_BASE_URL + item.imgUrl" alt="Иллюстрация примера" />
        <h3 class="example__title">{{ item.title }}</h3>
        <p class="example__desc" :id="`for-whom-desc-${item.id}`"></p>
      </li>
    </ul>
    <img
      class="for-whom__lines"
      :src="IMAGE_BASE_URL + 'for-whom-lines.png'"
      alt=""
    />
  </section>
</template>
<script lang="ts">
import { IMAGE_BASE_URL } from '@/config'
import { defineComponent, onMounted, ref, watch } from 'vue'
import { store } from '@/store'

export default defineComponent({
  data () {
    return {
      IMAGE_BASE_URL
    }
  },
  setup () {
    let id = 0

    const data = ref(
      [
        {
          title: 'Малый бизнес',
          desc: [
            'Скорость получения',
            'информации о платежах',
            'и минимизация издержек'
          ],
          imgUrl: 'tree.png'
        },
        {
          title: 'Стартапы',
          desc: ['Автоматизация', 'бизнес-процессов', 'и бухгалтерской рутины'],
          imgUrl: 'pony.png'
        },
        {
          title: 'Разработчики',
          desc: [
            'Быстрое внедрение своих',
            'приложений для малого',
            'бизнеса и стартапов'
          ],
          imgUrl: 'lamp.png'
        }
      ].map((item) => {
        id++
        return {
          ...item,
          id
        }
      })
    )

    onMounted(() => {
      data.value.forEach((item) => {
        const element = document.getElementById(`for-whom-desc-${item.id}`)
        if (element) {
          element.innerHTML = item.desc.reduce((str, stroke) => {
            return str.length > 0 ? str + '</br>' + stroke : stroke
          }, '')
        }
      })
    })
    watch(
      () => store.isDesktop,
      (value) => {
        if (!value && data.value[2]) {
          data.value[2].desc = [
            'Быстрое внедрение',
            'своих приложений',
            'для малого бизнеса',
            'и стартапов'
          ]
        }
      },
      { immediate: true }
    )

    return {
      data
    }
  }
})
</script>
<style lang="scss">
@import '@/styles/for-whom/for-whom-sect.scss';
@import '@/styles/for-whom/for-whom-tablet.scss';
@import '@/styles/for-whom/for-whom-mobile.scss';
</style>
