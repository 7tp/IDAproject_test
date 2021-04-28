<template>
  <form class="checkout" @submit.prevent="submit">
    <p class="checkout__title">Оформить заказ</p>
    <label for="name" class="checkout__label">
      <input
        class="checkout__input"
        placeholder="Ваше имя"
        type="text"
        name="name"
        autocorrect="off"
        autocapitalize="off"
      >
    </label>
    <label for="tel" class="checkout__label">
      <!-- <input
        class="checkout__input"
        placeholder="Телефон"
      > -->
      <the-mask
        class="checkout__input"
        :class="{'checkout__input--error': false}"
        placeholder="Телефон"
        type="tel"
        :mask="phoneMask"
        :tokens="phoneTokens"
        :masked="true"
        name="phone"
        id="phone"
        autocomplete="tel"
        autocorrect="off"
      />
    </label>
    <label for="address" class="checkout__label">
      <input
        class="checkout__input"
        placeholder="Адрес"
        type="text"
        name="address"
        autocorrect="off"
        autocapitalize="off"
      >
    </label>
    <input type="submit" class="checkout__button" value="Отправить">
  </form>
</template>

<script>
import {TheMask} from 'vue-the-mask'

export default {
  name: 'checkout',
  data() {
    return {
      phoneTokens: {
        'F': {pattern: /9/},
        '#': {pattern: /\d/}
      },
      phoneMask: '+7 (F##)###-##-##'
    }
  },
  components: {
    TheMask
  },
  methods: {
    submit() {

    }
  }

}
</script>

<style scoped lang="sass">
  @import '~/assets/checkout.sass'
</style>
