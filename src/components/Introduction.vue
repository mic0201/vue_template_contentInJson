<template lang="pug">
  #Introduction
    .card-container.flex
      .card.flex(v-for="card in introduction.card" :class="animate")
        .img
          img(:src="card.img")
        .info.contentDescrFontColor
          h3 {{ card.title }}
          p.moreSmaller {{ card.description }}
    .leading-container.flex
      .leading.flex(v-for="leading in introduction.leading")
        .icon
          img(:src="leading.icon")
        .info.contentDescrFontColor
          h4.sub {{ leading.sub_title }}

</template>

<script>
export default {
  name: "Introduction",
  props: {
    introduction: Object
  },
  data: function() {
    return {
      animate: "active"
    };
  },
  mounted() {
    this.initialAnimate()
  },
  methods: {
    initialAnimate() {
      setTimeout(() => {
        this.animate = "";
      }, 300);
    }
  }
};
</script>

<style lang="sass" scoped>
  #Introduction
    .card-container
      &.flex
        flex-wrap: wrap
      .card
        width: calc(100% / 3 - 45px * 2)
        margin: 20px 45px
        transition: transform .3s
        transform: translateY(-30%) scale(1)
        &.active
          transform: translateY(-30%) scale(0.4)
        &:hover
          transform: translateY(-35%)
          .img
            img
              transform: scale(1.5)
        &:nth-child(1)
          transition: transform .3s
        &:nth-child(2)
          transition: transform .7s
        &:nth-child(3)
          transition: transform 1s
        &:nth-child(4)
          transition: transform 1.4s
        &.flex
          flex-direction: column

        .img
          overflow: hidden
          img
            transition: transform .3s, opacity .3s

        .info
          padding: 1.3rem 0.8rem
          text-align: center
          p
            opacity: 0.95
            line-height: 1.5rem

    .leading-container
      transform: translateY(-100%)
      &.flex
        align-items: center
        flex-wrap: wrap

      .leading
        width: calc(100% / 4)
        margin-top: 15px
        &.flex
          align-items: center

        .icon
          width: 35px
          padding-right: 15px

        .info
          border-left: 1px solid rgba(0, 0, 0, 0.2)
          padding: 0px 15px

</style>
