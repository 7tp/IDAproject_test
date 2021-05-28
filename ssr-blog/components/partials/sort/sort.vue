<template>
  <div class="sort" @click="openSelect = !openSelect">
    <div class="sort__selected" :class="{'sort__selected--opened': openSelect}">
      <span class="sort__selected-value">
        <span class="sort__placeholder">Сортировать по:</span>
        {{ currentPoint.value }}
      </span>
      <svg class="sort__arrow" width="5" height="3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0H0l2.5 2.5L5 0z" fill="#59606D"/>
      </svg>
    </div>
    <ul class="sort__dropdown" v-show="openSelect">
      <li v-for="(point, index) in points" :key="index"
        class="sort__point"
        @click="selectPoint(point)"
      >
        {{ point.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sort',
  props: {
    points: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentPoint: {},
      openSelect: false
    }
  },
  methods: {
    selectPoint(point) {
      this.currentPoint = point;
    }
  },
  mounted() {
    this.currentPoint = this.points[0]
  }

}
</script>

<style lang="sass" src="./sort.sass"></style>
