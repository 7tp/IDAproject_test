<template>
  <section class="catalogue">
    <h1 v-if="$fetchState.pending" class="title">Загружаем каталог...</h1>
    <h1 v-else-if="$fetchState.error" class="title">Ошибка загрузки каталога...</h1>
    <div class="layout" v-else>
      <div class="catalogue__header">
        <h1 class="title">Каталог</h1>
        <sort :points="points"></sort>
      </div>
      <categories :categories="categories"
        v-model="currentCategory"
      ></categories>
      <list :filter="currentCategory" v-if="currentCategory"></list>
    </div>
  </section>
</template>

<script>
import sort from './partials/sort.vue';
import categories from './catalogue/categories.vue';
import list from './catalogue/list.vue'

export default {
  name: 'catalogue',
  components: { sort, categories, list },
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
      categoryRestApi: 'https://frontend-test.idaproject.com/api/product-category',
      categories: [],
      currentCategory: 0
    }
  },

  mounted() {
    this.currentCategory = this.categories[0].id // получаем id первой категории для фильтра
  },
  async fetch() { // получаем список категорий из RestApi
    this.categories = await fetch(
      this.categoryRestApi
    ).then(res => res.json())
  }
}
</script>

<style scoped lang="sass">
  @import '~/assets/catalogue.sass'
</style>
