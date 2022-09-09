<template>
  <footer class="connect container">
    <h2 class="connect__title title">Подключиться</h2>
    <div class="connect__content">
      <p class="connect__desc">
        Хотите начать пользоваться системой? Напишите нам.
      </p>

      <div class="connect__mail mail">
        <h4 class="mail__title">email</h4>
        <span class="mail__value">hello@everypay.io </span>
      </div>
    </div>
    <form
      @submit.prevent="showMesage()"
      class="connect__form form form-light"
      :class="{ 'form--submitted': isSubmitted }"
    >
      <label for="" class="form__label">
        <input type="text" placeholder="Ваше имя*" class="form__input" />
      </label>
      <label for="" class="form__label">
        <input type="email" placeholder="Email*" class="form__input" />
      </label>
      <textarea
        class="form__input form__textarea"
        name=""
        id=""
        placeholder="Расскажите о своей компании*"
        cols="30"
        rows="10"
      ></textarea>
      <button type="submit" class="button form__submit">Подключиться</button>
      <div class="message">
        <p class="message__text">
          Спасибо!<br />
          Мы приняли ваш запрос.<br />
          <br />
          В ближайшее время наш специалист поддержки свяжется с вами.<br />
        </p>
      </div>
    </form>

    <div class="connect__bottom">
      <span>© 2020, Everypay </span>
      <a class="connect__politic" href="">Политика конфиденциальности </a>
    </div>

    <img
      :src="IMAGE_BASE_URL + 'connect-lines.png'"
      alt=""
      class="connect__lines"
    />
  </footer>
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
<style lang="scss">
@import '@/styles/connect/connect-sect.scss';
@import '@/styles/connect/connect-tablet.scss';
@import '@/styles/connect/connect-mobile.scss';
</style>
