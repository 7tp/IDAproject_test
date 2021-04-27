<template>
  <header class="header">
    <div class="layout">
      <a class="header__logo" href="/">TestList</a>
      <div class="header__cart">
        <img src="/cart.svg">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-top'

}
</script>

<style scoped lang="sass">
  @import '~/assets/main'
  @import '~/assets/header.sass'
</style>
