<template>
  <div>
    <Catalogue />
  </div>
</template>

<script>
import Catalogue from '~/components/catalogue/catalogue.vue'

export default {
  components: { Catalogue },
  mounted() {
    if (process.browser && localStorage.getItem('basket')) { // добавлем в корзину товары, сохраненные в localStorage браузера
      this.$store.commit('cart/fromLocalStorage', JSON.parse(localStorage.getItem('basket')))
    }
  }
}
</script>

<style>

</style>

