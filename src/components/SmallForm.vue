<template>
  <form
    @submit.prevent="showMesage()"
    class="form"
    :class="{ 'form--submitted': isSubmitted }"
  >
    <label class="form__label" for="">
      <input type="text" placeholder="Введите email" class="form__input" />
    </label>
    <button type="submit" class="form__btn button">Узнать</button>
    <div class="message">
      <span
        :style="`background-image: url('${IMAGE_BASE_URL}success.svg')`"
        class="message__image"
      ></span>
      <span class="message__text">Проверьте e-mail! </span>
    </div>
  </form>
</template>
<script lang="ts">
import { IMAGE_BASE_URL } from '@/config'
import { defineComponent } from 'vue'
import useForm from '@/hooks/useForm'
export default defineComponent({
  setup () {
    return {
      ...useForm(),
      IMAGE_BASE_URL
    }
  }
})
</script>
