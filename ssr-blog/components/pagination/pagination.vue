<template>
  <div class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item"
        :class="{'pagination__item--disabled': activePage === i}"
        v-for="i in pages" :key="i"
        @click="goToPage(i)"
      >
        <a class="pagination__link">{{i}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    pages: {
      type: Number,
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
  data() {
    return {
      dots: false,
    }
  },
  computed: {
    activePage: {
      get: function() { // получаем значение текущей категории из props
        return this.value
      },
      set: function(newValue) { // отправляем значение выбранной категории родителю (list.vue)
        this.$emit('change', newValue)
      }
    }
  },
  methods: {
    isDots() {
      if (this.pages > 5) {
        this.dots = true
      }
    },
    scrollTop() {
      const topElement = document.querySelector('.list').offsetTop
      if (window.innerWidth > 767) {
        window.scroll({ top: topElement - 130, behavior: 'smooth'})
      } else {
        window.scroll({ top: topElement - 60, behavior: 'smooth'})
      }
    },
    goToPage(page) {
      this.activePage = page;
      this.scrollTop()
    }
  },
  mounted() {
    this.isDots()
  }

}
</script>

<style lang="sass" src="./pagination.sass"></style>
