<template>
  <div class="rate">
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7 .125c.238 0 .455.135.56.348l1.786 3.619 3.994.583a.625.625 0 01.346 1.066l-2.89 2.815.683 3.976a.625.625 0 01-.907.659L7 11.312l-3.572 1.879a.625.625 0 01-.906-.66l.681-3.975L.313 5.74A.625.625 0 01.66 4.675l3.994-.583L6.44.473A.625.625 0 017 .125zm0 2.037L5.63 4.939a.625.625 0 01-.47.342l-3.067.448L4.31 7.89c.148.144.215.351.18.554l-.523 3.052 2.741-1.442a.625.625 0 01.582 0l2.741 1.442-.523-3.052a.625.625 0 01.18-.553l2.218-2.16-3.066-.45a.625.625 0 01-.47-.34L7 2.161z" fill="#F2C94C"/>
    </svg>
    <div ref="rateFill" class="rate__top-fill"></div>
    {{ rating }}
  </div>
</template>

<script>
export default {
  name: 'rating',
  props: {
    rating: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      height: 0
    }
  },
  methods: {
    topFill(height) {
      this.$refs.rateFill.style.height = height + 'px'
    },
    fillingHeight() {
      if (this.rating === 5) {
        this.height = 0
      } else if (this.rating === 1) {
        this.height = 8
      } else {
        this.height = (5 - this.rating) * 2 + 1;
      }
      this.topFill(this.height)
    }
  },
  mounted() {
    this.fillingHeight()
  }
}
</script>

<style scoped lang="sass" src="./rate.sass"></style>
