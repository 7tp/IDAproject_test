<template>
  <div class="cart" :class="{'cart--success': successFlag}">
    <div class="cart__header">
      <h1 class="cart__title">
        <span v-if="products.length > 0 || successFlag">Корзина</span>
        <span v-else>Корзина пока пуста</span>
      </h1>
      <div class="modal__close">
        <img class="modal__close-icon" src="/close.svg">
      </div>
    </div>
    <template v-if="products.length > 0">
      <p class="cart__text">Товары в корзине</p>
      <cart-card v-for="product in products" :key="product.id"
        :product="product"
      >
      </cart-card>
    </template>
    <checkout v-if="products.length > 0" v-model="successFlag"></checkout>
    <div class="cart__success-block" v-if="successFlag">
      <img src="/ok-hand-sign_emoji.png" alt="ok">
      <h2 class="cart__subtitle">Заявка успешно отправлена</h2>
      <p>Вскоре наш менеджер свяжется с Вами</p>
    </div>
  </div>
</template>

<script>
import cartCard from './partials/cart-card.vue';
import checkout from './checkout.vue'

export default {
  name: 'cart',
  data() {
    return {
      successFlag: false
    }
  },
  components: { cartCard, checkout },
  computed: { // получаем из $store массив товаров, добавленных в корзину
    products() {
      return this.$store.state.cart.list
    }
  },
  methods:{
    storeBasket(products){
      if(process.browser){
        localStorage.setItem('basket', products);
      }
    }
  },
  watch: {
    products() {
      // если был уже сделан удачный заказ и пользователь вновь наполняет корзину,
      // убираем флаг об успешной отправке заказа
      if (this.$store.state.cart.list.length > 0) {
        this.successFlag = false;
      }
      // сохраняем в localStorage товары из корзины
      this.storeBasket(JSON.stringify(this.products));
    }
  }
}
</script>

<style scoped lang="sass">
  @import '~/assets/modal.sass'
  @import '~/assets/cart.sass'
</style>
