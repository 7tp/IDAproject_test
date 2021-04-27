<template>
  <ul class="category">
    <li class="category__item" v-for="category in categories" :key="category.id"
      :class="{'category__item--chosen': category.id === current}"
      @click="chooseCategory(category)"
    >
      {{ category.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'category',
  props: {
    categories: {
      type: Array,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      current: null
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  computed: {
    currentCategory: {
      get: function() {
        return this.value
      },
      set: function(newValue) {
        this.$emit('change', newValue)
      }
    }
  },
  methods: {
    chooseCategory(data) {
      console.log(data)
      this.currentCategory = data.id
      this.current = data.id
    }
  },
  mounted() {
    this.current = this.currentCategory
  }
}
</script>

<style scoped lang="sass">
  @import '~/assets/main'
  @import '~/assets/category.sass'
</style>
