<template>
  <ul class="category">
    <li class="category__item"
      v-for="category in categories" :key="category.id"
      :class="{'category__item--chosen': category.id === currentCategory}"
      @click="chooseCategory(category)"
    >
      {{ category.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'categories',
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
  model: {
    prop: 'value',
    event: 'change'
  },
  computed: {
    currentCategory: {
      get: function() { // получаем значение текущей категории из props
        return this.value
      },
      set: function(newValue) { // отправляем значение выбранной категории родителю (catalogue.vue)
        this.$emit('change', newValue)
      }
    }
  },
  methods: {
    chooseCategory(data) {
      this.currentCategory = data.id
    }
  },
}
</script>

<style lang="sass" src="./category.sass"></style>
