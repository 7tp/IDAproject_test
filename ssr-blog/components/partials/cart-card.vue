<template>
  <div class="cart-card">
    <div class="cart-card__content">
      <div class="cart-card__image">
        <img :src="product.photo">
      </div>
      <div class="cart-card__layout">
        <div class="cart-card__description">
          <div class="cart-card__name">
            <span ref="text">
              {{ $capitalize(product.name) }}
            </span>
            <span class="cart-card__name-dots" v-if="dotsFlag">...</span>
          </div>
          <div class="cart-card__price">{{ $currency(product.price) }} ₽</div>
        </div>
        <!-- <div class="card__rate">
          <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 .125c.238 0 .455.135.56.348l1.786 3.619 3.994.583a.625.625 0 01.346 1.066l-2.89 2.815.683 3.976a.625.625 0 01-.907.659L7 11.312l-3.572 1.879a.625.625 0 01-.906-.66l.681-3.975L.313 5.74A.625.625 0 01.66 4.675l3.994-.583L6.44.473A.625.625 0 017 .125zm0 2.037L5.63 4.939a.625.625 0 01-.47.342l-3.067.448L4.31 7.89c.148.144.215.351.18.554l-.523 3.052 2.741-1.442a.625.625 0 01.582 0l2.741 1.442-.523-3.052a.625.625 0 01.18-.553l2.218-2.16-3.066-.45a.625.625 0 01-.47-.34L7 2.161z" fill="#F2C94C"/>
          </svg>
          <div class="card__rate-top-fill"></div>
          {{ product.rating }}
        </div> -->
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
import rating from './rating.vue'

export default {
  name: 'cart-card',
  components: { rating },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dotsFlag: false,
      textHeight: 52
    }
  },
  methods: {
    deleteItem() {
      this.$store.commit('cart/remove', this.product)
    },
    longText() {
      console.log(this.$refs.text.offsetHeight)
      if (this.$refs.text.offsetHeight > this.textHeight) {
        this.dotsFlag = true
      }
    }
  },
  mounted() {
    this.longText()
  }
}
</script>

<style scoped lang="sass">
  @import '~/assets/partials/card.sass'
  @import '~/assets/partials/cart-card.sass'
</style>
