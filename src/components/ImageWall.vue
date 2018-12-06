<template lang="pug">
  #ImageWall(:class="imageWall.multiple ? 'grid' : 'flex' ")
    .image.image1(:style="{ backgroundImage: `url(${imageWall.image1})` }")
      .guaranteed.card(v-if="imageWall.card")
        h4.title {{ imageWall.card.title }}
        h5.sub_title {{ imageWall.card.sub_title }}
        p.description.moreSmaller {{ imageWall.card.description }}
        .btn
          span {{ imageWall.card.button_text }}
    .image.image2(:style="{ backgroundImage: `url(${imageWall.image2})` }")
    .image.image3(:style="{ backgroundImage: `url(${imageWall.image3})` }")

</template>

<script>
export default {
  name: "ImageWall",
  props: {
    imageWall: Object
  }
};
</script>

<style lang="sass" scoped>
  #ImageWall
    width: 100%
    &.grid
      grid-template-rows: 0.5fr 0.5fr
      grid-template-columns: 0.5fr 0.5fr
      grid-template-areas: "Image1 Image3" "Image2 Image3"
      grid-gap: 4rem

    &.flex
      .image1
        width: 100%
        height: 100%
      .image2, .image3
        display: none

    .image
      position: relative
      background-size: cover
      background-position: 50% 50%
      transition: filter .3s
      &:hover
        filter: brightness(0.7)
    .image1
      grid-area: Image1
    .image2
      grid-area: Image2
    .image3
      grid-area: Image3

    .guaranteed
      position: absolute
      bottom: 35px
      right: -30px
      width: 65%
      background-color: #fff
      padding: 1.7rem
      transition: transform .3s
      &:hover
        transform: translateX(-15px)
      .title, .description
        color: #2E2D2E
      .sub_title
        color: #A8A7A7
        font-weight: 400
      .btn
        position: absolute
        top: 30px
        right: 20px
        color: white
        font-size: 0.7rem
        padding: 7px
        cursor: pointer
</style>
