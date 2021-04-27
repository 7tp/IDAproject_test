<template>
  <div class="list">
    <card v-for="product in products" :key="product.id"
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
    products: {
      type: Array,
      required: true
    }
  }


}
</script>

<style scoped lang="sass">
  @import '~/assets/main'
  @import '~/assets/list.sass'
</style>
