<template>
  <div class="modal" :class="{'modal--opened': open}"
    @click="closeOutside"
  >
    <cart></cart>
  </div>
</template>

<script>
import cart from '../cart/cart.vue'

export default {
  name: 'modal',
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  },
  components: { cart },
  model: {
    prop: 'value',
    event: 'change'
  },
  computed: {
    openModal: {
      get: function() {
        return this.value
      },
      set: function(newValue) {
        this.$emit('change', newValue)
      }
    },
  },
  methods: {
    closeModal() {
      this.openModal = false
      this.$toggleHtmlOverflow('initial')
    },
    closeOutside(e) { // закрытие модалки при клике на bg или на иконку "закрыть"
      if (e.target.className == 'modal modal--opened' || e.target.className == 'modal__close-icon') {
        this.closeModal()
      }
    }
  },
  watch: {
    openModal(value) {
      this.open = value
    }
  }
}
</script>

<style lang="sass" src="./modal.sass"></style>
