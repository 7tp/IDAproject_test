<template>
  <div>
    <HeaderTop v-model="openedModal"/>
    <nuxt keep-alive />
    <Modal v-model="openedModal" :props="props" />
  </div>
</template>

<script>
import HeaderTop from '~/components/header/header.vue'
import Modal from '~/components/modal/modal.vue'

export default {
  data() {
    return {
      openedModal: false,
      props: ''
    }
  },
  components: { HeaderTop, Modal },
  methods: {
    modal(data) {
      this.openedModal = data.openModal
      this.props = data.props
      this.openedModal ? this.$toggleHtmlOverflow('hidden') : this.$toggleHtmlOverflow('initial')
    },
  },
}
</script>
