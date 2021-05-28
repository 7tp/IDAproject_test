<template>
  <div class="cart-card">
    <div class="cart-card__content">
      <div class="cart-card__image">
        <img :src="product.photo" alt="Фото товара">
        <!-- <img src="/louis-vuitton--M43186_PM2_Front view 1.png" alt="Фото товара"> -->
        <!-- <img src="/ok-hand-sign_emoji.png" alt="ok"> -->
        <!-- <img src="/item.png" alt="ok"> -->
      </div>
      <div class="cart-card__layout">
        <div class="cart-card__description">
          <product-name :name="product.name" :cart="true"></product-name>
          <div class="cart-card__price">{{ $currency(product.price) }} ₽</div>
        </div>
        <rating :rating="product.rating"></rating>
      </div>
    </div>
    <div class="cart-card__delete">
      <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"
        @click.prevent="deleteItem"
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10a1 1 0 011-1h18a1 1 0 110 2H7a1 1 0 01-1-1z" fill="#959DAD"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 7a1 1 0 00-1 1v1h6V8a1 1 0 00-1-1h-4zm7 2V8a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H9a1 1 0 00-1 1v14a3 3 0 003 3h10a3 3 0 003-3V10a1 1 0 00-1-1h-2zm-11 2v13a1 1 0 001 1h10a1 1 0 001-1V11H10z" fill="#959DAD"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 14a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zM18 14a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z" fill="#959DAD"/>
      </svg>
    </div>
  </div>
</template>

<script>
import rating from '../rating/rating.vue'
import productName from '../product-name/product-name.vue'

export default {
  name: 'cart-card',
  components: { rating, productName },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteItem() {
      this.$store.commit('cart/remove', this.product)
    },
  }
}
</script>

<style lang="sass" src="./cart-card.sass"></style>
