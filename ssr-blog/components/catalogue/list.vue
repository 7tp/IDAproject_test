<template>
  <div v-if="$fetchState.pending" class="list list--center">Загружаем товары...</div>
  <div v-else-if="$fetchState.error" class="list list--center">Ошибка загрузки</div>
  <div v-else class="list">
    <card v-for="product in products.slice(0, itemsOnList)" :key="product.id"
      :product="product" :in-cart-ids="productsInCartId"
    >
    </card>
  </div>
</template>

<script>
import card from '../partials/card.vue'

export default {
  name: 'list',
  components: {card},
  props: {
    filter: { // текущее значение фильтра из категорий
      type: Number,
      required: true
    }
  },
  data() {
    return {
      productRestApi: 'https://frontend-test.idaproject.com/api/product',
      products: [],
      itemsOnList: 12, // показываем только 12 товаров
    }
  },
  computed: {
    filterProducts() { // применение фильтра для RestApi
      return !!this.filter ? this.productRestApi + '?category=' + this.filter : this.productRestApi
    },
    productsInCartId() { // для проверки, находится ли товар в корзине
      return this.$store.state.cart.list.map(item => item.id)
    }
  },
  watch: {
    filterProducts(value) { // при изменении фильтра перезагружаем контент
      this.$fetch()
    }
  },
  async fetch() { // получаем товары из RestApi
    this.products = await fetch(
      this.filterProducts
    ).then(res => res.json())
  },
}
</script>

<style scoped lang="sass">
  @import '~/assets/catalogue/list.sass'
</style>
