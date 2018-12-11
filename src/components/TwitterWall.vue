<template lang="pug">
  #TwitterWall(v-if="twitterWall.commentList")
    .slider-container.flex
      .slider.flex(v-for="(slider, sliderIndex) in Math.ceil(twitterWall.commentList.length / 3)" :data-start="sliderIndex * 3" :data-end="3 + sliderIndex * 3")
        .wall.flex(v-if="sliderCategory(sliderIndex, wallIndex)" v-for="(wall, wallIndex) in twitterWall.commentList" :data-key="wallIndex")
          .img-container
            img(:src="wall.image")
          .info-container.contentDescrFontColor.flex
            p.description.supportHtml
            a.small.url(:href="wall.url" target="_blank") {{ wall.url }}
            small.date {{ wall.date }}
    .slider-bar.flex
      .bar-container
        .bar(v-for="(slider, sliderIndex) in Math.ceil(twitterWall.commentList.length / 3)" @click="goToSlider(sliderIndex)")

</template>

<script>
export default {
  name: "TwitterWall",
  props: {
    twitterWall: Object
  },
  data: function () {
    return {
      carouselIndex: 0,
      autoCarousel: 0
    };
  },
  watch: {
    twitterWall: {
      deep: true,
      handler: function (newVal, oldVal) {
        this.$nextTick(() => {
          this.createTwitterHtml(newVal)
        })
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.carouselWall();
      this.autoCarouselWall()
    }, 0)
  },
  methods: {
    sliderCategory(sliderIndex, wallIndex) {
      return sliderIndex * 3 <= wallIndex && wallIndex < 3 + sliderIndex * 3 ? true : false;
    },
    carouselWall() {
      let index = this.carouselIndex % Math.ceil(this.twitterWall.commentList.length / 3);
      let querySelectorAll = ele => document.querySelectorAll(ele);
      querySelectorAll(".slider-container")[0].style.transform = `translateX(-${index * 100}%)`;
      querySelectorAll(".slider-bar .bar")[index].classList.add("active");
      if (index === 0) {
        index = Math.ceil(this.twitterWall.commentList.length / 3)
      }
      querySelectorAll(".slider-bar .bar")[index - 1].classList.remove("active");
      this.carouselIndex++;
    },
    autoCarouselWall() {
      this.autoCarousel = setInterval(() => {
        this.carouselWall()
      }, 5000);
    },
    goToSlider(sliderIndex) {
      let index = (this.carouselIndex - 1) % Math.ceil(this.twitterWall.commentList.length / 3)
      document.querySelectorAll(".slider-bar .bar")[index].classList.remove("active")
      this.carouselIndex = sliderIndex
      clearInterval(this.autoCarousel)
      this.autoCarouselWall()
      this.carouselWall()
    },
    createTwitterHtml(arr) {
      let newArr = JSON.parse(JSON.stringify(arr)),
        href = (param, mark) => `<a href="https://twitter.com/${param}" target="_blank">${mark}$1</a>`
      newArr.commentList.forEach((d, i) => {
        d.description = d.description.replace(/@(\w+)/g, href('$1', '@'))
        d.description = d.description.replace(/#(\w+)/g, href('search?q=%23$1&src=hash', '#'))
        document.querySelectorAll('.wall p.description.supportHtml')[i].innerHTML = d.description
      })
    }
  }
};
</script>

<style lang="sass" scoped>
  #TwitterWall
    position: relative
    overflow: hidden
    .slider
      width: 100%
      flex: 0 0 auto
      &.flex
        flex-wrap: nowrap
        justify-content: space-between
      overflow: auto

    .wall
      width: 360px
      &.flex
        flex: 0 0 auto
      .img-container
        width: 13%
        margin: 1.45rem 1rem
      .info-container
        width: 80%
        p, small, a.small
          font-size: .8rem
          margin-bottom: .5rem
        &.flex
          flex-direction: column

    .slider-container
      transition: transform .5s

    .slider-bar
      margin-top: 2rem
      .bar-container
        margin: auto
      .bar
        display: inline-block
        width: 20px
        margin: 0 10px
        padding: 2px 0
        background-color: rgba(0, 0, 0, 0.3)
        border-radius: 15px
        cursor: pointer
        &.active
          background-color: #f3b007
</style>
