<template>
  <section class="catalogue">
    <div class="layout">
      <div class="catalogue__header">
        <h1 class="title">Каталог</h1>
        <sort :points="points"></sort>
      </div>
      <category :categories="categories"
        v-model="currentCategory"
        v-if="categories"
      ></category>
      <list :products="products.slice(0, itemsOnList)"></list>
    </div>
  </section>
</template>

<script>
import sort from './partials/sort.vue';
import category from './category.vue';
import list from './list.vue'

export default {
  name: 'catalogue',
  components: { sort, category, list },
  data() {
    return {
      points: [
        {
          label: 'По цене',
          value: 'цене'
        },
        {
          label: 'По популярности',
          value: 'популярности'
        }
      ],
      itemsOnList: 10,
      categoryApi: 'https://frontend-test.idaproject.com/api/product-category',
      productApi: 'https://frontend-test.idaproject.com/api/product',
      categories: [],
      products: [],
      currentCategory: 0
    }
  },
  methods: {

  },
  async fetch() {
    this.categories = await fetch(
      this.categoryApi
    ).then(res => res.json()),
    this.products = await fetch(
      this.productApi
    ).then(res => res.json())
  }

}
</script>

<style scoped lang="sass">
  @import '~/assets/main'
  @import '~/assets/catalogue.sass'
</style>
