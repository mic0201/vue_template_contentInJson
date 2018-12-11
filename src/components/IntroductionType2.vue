<template lang="pug">
  #IntroductionType2
    h2.title.contentTitleFontColor {{ introduction_6.title }}
    p.contentDescrFontColor {{ introduction_6.description }}
    .card-box.flex
      .card.flex(v-for="card in introduction_6.card")
        .icon
        .info.contentDescrFontColor
          h3.title {{ card.title }}
          .description
            .slider.flex
              p {{ card.description }}
              p {{ card.back_side }}
</template>

<script>
import {
  getIcon1,
  getIcon2,
  getIcon3
} from "@/service/section_6_introduction.js";

export default {
  name: "IntroductionType2",
  props: {
    introduction_6: Object
  },
  async created() {
    this.appendIcon();
  },
  methods: {
    async appendIcon() {
      let icon1 = await getIcon1(),
        icon2 = await getIcon2(),
        icon3 = await getIcon3(),
        icon = document.querySelectorAll("#IntroductionType2 .card .icon")
      icon[0].innerHTML = icon1.data;
      icon[1].innerHTML = icon2.data;
      icon[2].innerHTML = icon3.data;
      for (let i = 0; i < icon.length; i++) {
        icon[i].children[0].style.height = "auto";
        icon[i].children[0].style.width = "2.6rem";
        icon[i].children[0].children[0].style.fill = "#f3b007";
      }
    }
  }
};
</script>

<style lang="sass" scoped>
  #IntroductionType2
    > h2, > p
      text-align: center

    .card-box
      margin-top: 4rem
      &.flex
        justify-content: space-between
        flex-wrap: wrap
      .card
        width: calc(100% / 3 - 78px)
        margin: 12px
        padding: 1rem
        transition: transform .3s
        background-color: white
        &.flex
          align-items: center

        &:hover
          transform: translateY(-5%)
          .slider
            transform: translateX(calc(-100% - 30px))

        .icon
          padding: 0 2rem 0 .6rem

        .description
          overflow: hidden
          .slider
            transition: transform .7s
            p
              width: 100%
              flex: 0 0 auto
              &:nth-child(1)
                margin-right: 30px
</style>
