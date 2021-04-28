<template>
  <div>
    <HeaderTop v-model="openedModal"/>
    <Catalogue />
    <Modal v-model="openedModal" :props="props" />
  </div>
</template>

<script>
import HeaderTop from '~/components/header.vue'
import Catalogue from '~/components/catalogue.vue'
import Modal from '~/components/modal.vue'

export default {
  data() {
    return {
      openedModal: false,
      props: ''
    }
  },
  components: {
    HeaderTop, Catalogue, Modal
  },
  methods: {
    modal(data) {
      this.openedModal = data.openModal
      this.props = data.props
      this.openedModal ? this.$toggleHtmlOverflow('hidden') : this.$toggleHtmlOverflow('initial')

    },
  },
}
</script>

<style>

</style>

