<template>
  <header class="header">
    <div class="layout">
      <a class="header__logo" href="/">TestList</a>
      <a class="header__cart" @click="openCart">
        <svg viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.92 1.74a.6.6 0 01.48-.24h7.2a.6.6 0 01.48.24l1.8 2.4a.6.6 0 01.12.36v8.4a1.8 1.8 0 01-1.8 1.8H3.8A1.8 1.8 0 012 12.9V4.5a.6.6 0 01.12-.36l1.8-2.4zm.78.96l-1.5 2v8.2a.6.6 0 00.6.6h8.4a.6.6 0 00.6-.6V4.7l-1.5-2H4.7z" fill="#1f1f1f"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5a.6.6 0 01.6-.6h10.8a.6.6 0 110 1.2H2.6a.6.6 0 01-.6-.6zM5.6 6.3a.6.6 0 01.6.6 1.8 1.8 0 103.6 0 .6.6 0 111.2 0 3 3 0 01-6 0 .6.6 0 01.6-.6z" fill="#1f1f1f"/>
        </svg>
        <div class="header__cart-count">{{ count }}</div>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-top',
  props: {
    value: {
      type: Boolean,
      required: true
    },
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  computed: {
    open: {
      get: function() {
        return this.value
      },
      set: function(newValue) {
        this.$emit('change', newValue)
      }
    },
    count() { return this.$store.state.cart.list.length }
  },
  methods: {
    openCart() {
      this.open = !this.open
      this.$toggleHtmlOverflow('hidden')

    }
  }
}
</script>

<style scoped lang="sass">
  @import '~/assets/header.sass'
</style>
