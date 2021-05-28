<template>
  <div v-if="$fetchState.pending" class="list list--center">Загружаем товары...</div>
  <div v-else-if="$fetchState.error" class="list list--center">Ошибка загрузки</div>
  <div v-else>
    <div class="list">
      <card v-for="product in products.slice(activePage-1, activePage-1 + itemsOnList)" :key="product.id"
        :product="product" :in-cart-ids="productsInCartId"
      >
      </card>
    </div>
    <pagination :pages="pages" v-model="activePage"></pagination>
  </div>
</template>

<script>
import card from '../../partials/card/card.vue'
import pagination from '../../pagination/pagination.vue'

export default {
  name: 'list',
  components: { card, pagination },
  props: {
    filter: { // текущее значение фильтра из категорий
      type: Number,
      required: true
    },
  },
  data() {
    return {
      productRestApi: 'https://frontend-test.idaproject.com/api/product',
      products: [],
      itemsOnList: 12, // показываем только 12 товаров
      activePage: 1,
    }
  },
  computed: {
    filterProducts() { // применение фильтра для RestApi
      return !!this.filter ? this.productRestApi + '?category=' + this.filter : this.productRestApi
    },
    productsInCartId() { // для проверки, находится ли товар в корзине
      return this.$store.state.cart.list.map(item => item.id)
    },
    pages() {
      return Math.ceil(this.products.length / 12)
    }
  },
  watch: {
    filterProducts(value) { // при изменении фильтра перезагружаем контент
      this.$fetch();
      this.activePage = 1
    }
  },
  async fetch() { // получаем товары из RestApi
    this.products = await fetch(
      this.filterProducts
    ).then(res => res.json())
  },
}
</script>

<style lang="sass" src="./list.sass"></style>
