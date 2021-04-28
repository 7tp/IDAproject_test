<template>
  <div class="cart">
    <div class="cart__header">
      <h1 class="cart__title">
        <span v-if="products.length > 0">Корзина</span>
        <span v-else>Корзина пока пуста</span>
      </h1>
      <div class="modal__close">
        <img class="modal__close-icon" src="/close.svg">
        <!-- <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.707 5.293a1 1 0 010 1.414l-12 12a1 1 0 01-1.414-1.414l12-12a1 1 0 011.414 0z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 5.293a1 1 0 011.414 0l12 12a1 1 0 01-1.414 1.414l-12-12a1 1 0 010-1.414z" fill="#000"/>
        </svg> -->
      </div>
    </div>
    <template v-if="products.length > 0">
      <p class="cart__text">Товары в корзине</p>
      <cart-card v-for="product in products" :key="product.id"
        :product="product"
      >
      </cart-card>
    </template>
  </div>
</template>

<script>
import cartCard from './partials/cart-card.vue'

export default {
  name: 'cart',
  components: { cartCard },
  computed: {
    products() { return this.$store.state.cart.list }
  },
}
</script>

<style scoped lang="sass">
  @import '~/assets/modal.sass'
  @import '~/assets/cart.sass'
</style>
