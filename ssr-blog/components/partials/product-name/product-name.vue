<template>
  <div class="product-name" :class="{'product-name--cart': cart}">
    <span ref="text">
      {{ $capitalize(name) }}
      <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum -->
    </span>
    <span class="product-name__dots" :class="{'product-name__dots--cart': cart}"
      v-if="dotsFlag">...</span>
  </div>
</template>

<script>
export default {
  name: 'product-name',
  props: {
    name: {
      type: String,
      required: true
    },
    cart: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      dotsFlag: false,
      textHeight: 36
    }
  },
  methods: {
    longText() {
      if (this.$refs.text.offsetHeight > this.textHeight) {
        this.dotsFlag = true
      }
    }
  },
  mounted() {
    if (this.cart) {
      this.textHeight = 52
    }
    this.longText()
  }
}
</script>

<style lang="sass" src="./product-name.sass"></style>
