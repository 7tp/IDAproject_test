<template>
  <div v-if="$fetchState.pending" class="list">Загружаем товары...</div>
  <div v-else-if="$fetchState.error" class="list">Ошибка загрузки</div>
  <div v-else class="list">
    <card v-for="product in products.slice(0, itemsOnList)" :key="product.id"
      :product="product"
    >
    </card>
  </div>
</template>

<script>
import card from './partials/card.vue'

export default {
  name: 'list',
  components: {card},
  props: {
    filter: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      productRestApi: 'https://frontend-test.idaproject.com/api/product',
      products: [],
      itemsOnList: 12,
    }
  },
  computed: {
    filterProducts() {
      return !!this.filter ? this.productRestApi + '?category=' + this.filter : this.productRestApi
    }
  },
  watch: {
    filterProducts(value) {
      this.$fetch()
    }
  },
  async fetch() {
    this.products = await fetch(
      this.filterProducts
    ).then(res => res.json())
  },
  mounted() {
    this.filterProducts;
    this.$fetch()
  },
}
</script>

<style scoped lang="sass">
  @import '~/assets/main'
  @import '~/assets/list.sass'
</style>
