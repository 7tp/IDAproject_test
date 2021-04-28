<template>
  <div class="card" :class="{'card--in-cart': inCart}">
    <div class="card__content">
      <div class="card__image">
        <img :src="product.photo" alt="Фото товара">
      </div>
      <div class="card__top">
        <div class="card__rate">
          <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 .125c.238 0 .455.135.56.348l1.786 3.619 3.994.583a.625.625 0 01.346 1.066l-2.89 2.815.683 3.976a.625.625 0 01-.907.659L7 11.312l-3.572 1.879a.625.625 0 01-.906-.66l.681-3.975L.313 5.74A.625.625 0 01.66 4.675l3.994-.583L6.44.473A.625.625 0 017 .125zm0 2.037L5.63 4.939a.625.625 0 01-.47.342l-3.067.448L4.31 7.89c.148.144.215.351.18.554l-.523 3.052 2.741-1.442a.625.625 0 01.582 0l2.741 1.442-.523-3.052a.625.625 0 01.18-.553l2.218-2.16-3.066-.45a.625.625 0 01-.47-.34L7 2.161z" fill="#F2C94C"/>
          </svg>
          {{ product.rating }}
        </div>
        <div class="card__cart" @click.prevent="addToCart">
          <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.92 1.74a.6.6 0 01.48-.24h7.2a.6.6 0 01.48.24l1.8 2.4a.6.6 0 01.12.36v8.4a1.8 1.8 0 01-1.8 1.8H3.8A1.8 1.8 0 012 12.9V4.5a.6.6 0 01.12-.36l1.8-2.4zm.78.96l-1.5 2v8.2a.6.6 0 00.6.6h8.4a.6.6 0 00.6-.6V4.7l-1.5-2H4.7z" fill="#959DAD"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5a.6.6 0 01.6-.6h10.8a.6.6 0 110 1.2H2.6a.6.6 0 01-.6-.6zM5.6 6.3a.6.6 0 01.6.6 1.8 1.8 0 103.6 0 .6.6 0 111.2 0 3 3 0 01-6 0 .6.6 0 01.6-.6z" fill="#959DAD"/>
          </svg>
        </div>
      </div>
      <div class="card__bottom">
        <div class="card__name">{{ $capitalize(product.name) }}</div>
        <div class="card__price">{{ $currency(product.price) }} ₽</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    product: {
      type: Object,
      required: true
    },
    inCartIds: { // массив из id товаров в корзине
      type: Array,
      required: true
    }
  },
  data() {
    return {
      inCart: false
    }
  },
  computed: {
    inCartId() { // поиск текущего товара в массиве корзины по id
      return this.inCartIds.includes(this.product.id)
    }
  },
  methods: {
    addToCart() { // добавление/удаление товара из корзины
      this.inCart = !this.inCart
      if (this.inCart) {
        this.$store.commit('cart/add', this.product)
      } else {
        this.$store.commit('cart/remove', this.product)
      }
    },
  },
  mounted() {
    this.inCart = this.inCartId // товар в корзине или нет
  },
  watch: {
    inCartId(value) { // следим за изменениями в корзине
      this.inCart = value
    }
  }
}
</script>

<style scoped lang="sass">
  @import '~/assets/partials/card.sass'
</style>
