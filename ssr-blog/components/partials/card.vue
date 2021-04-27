<template>
  <div class="card" :class="{'card--in-cart': inCart}">
    <div class="card__content">
      <div class="card__image">
        <img :src="product.photo" alt="Фото товара">
      </div>
      <div class="card__top">
        <div class="card__rate">
          <img src="/popular.svg" alt="rating">
          {{ product.rating }}
        </div>
        <div class="card__cart" @click.prevent="inCart = !inCart">
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
    }
  },
  data() {
    return {
      inCart: false
    }
  }

}
</script>

<style scoped lang="sass">
  @import '~/assets/main'
  @import '~/assets/card.sass'
</style>
