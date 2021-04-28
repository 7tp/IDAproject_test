<template>
  <form class="checkout" @submit.prevent="submit">
    <p class="checkout__title">Оформить заказ</p>
    <label for="name" class="checkout__label">
      <input
        class="checkout__input"
        :class="{'checkout__input--error': $v.name.$error}"
        placeholder="Ваше имя"
        type="text"
        name="name"
        autocorrect="off"
        autocapitalize="off"
        v-model.trim="$v.name.$model"
      >
    </label>
    <label for="phone" class="checkout__label">
      <the-mask
        class="checkout__input"
        :class="{'checkout__input--error': $v.phone.$error}"
        placeholder="Телефон"
        type="tel"
        :mask="phoneMask"
        :tokens="phoneTokens"
        :masked="true"
        name="phone"
        id="phone"
        autocomplete="tel"
        autocorrect="off"
        v-model.trim="$v.phone.$model"
      />
    </label>
    <label for="address" class="checkout__label">
      <input
        class="checkout__input"
        :class="{'checkout__input--error': $v.address.$error}"
        placeholder="Адрес"
        type="text"
        name="address"
        autocorrect="off"
        autocapitalize="off"
        v-model.trim="$v.address.$model"
      >
    </label>
    <input type="submit" class="checkout__button" value="Отправить">
    <span class="checkout__error" v-if="$v.$error">
      <span class="checkout__exclamation">!!</span>
      Все поля обязательные
    </span>
  </form>
</template>

<script>
import {required, minLength} from "vuelidate/lib/validators"; // валидация формы
import {TheMask} from 'vue-the-mask' // маска для номера телефона

export default {
  name: 'checkout',
  props: {
    value: {
      type: Boolean,
      requird: true
    }
  },
  model: {
    prop: 'value',
    event: 'success'
  },
  data() {
    return {
      phoneTokens: {
        'F': {pattern: /9/},
        '#': {pattern: /\d/}
      },
      phoneMask: '+7 F## ###-##-##',
      name: '',
      phone: null,
      address: ''
    }
  },
  validations:{
    name: { required },
    phone: { required, minLength: minLength(13) },
    address: { required, minLength: minLength(5) },
  },
  components: {
    TheMask
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) { // если форма верная, заявке ставится флаг "успех" и очищается корзина
        this.$store.commit('cart/clear')
        this.$emit('success', true)
      }
    }
  }

}
</script>

<style scoped lang="sass">
  @import '~/assets/checkout.sass'
</style>
