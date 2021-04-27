<template>
  <div class="card">
    <div class="card__content">
      <div class="card__image">
        <img :src="product.photo" alt="Фото товара">
      </div>
      <div class="card__rate">
        <img src="/popular.svg" alt="rating">
        4.5
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
  }

}
</script>

<style scoped lang="sass">
  @import '~/assets/main'
  @import '~/assets/card.sass'
</style>
