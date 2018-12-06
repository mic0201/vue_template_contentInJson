<template lang="pug">
  #Introduction
    .card-container.flex
      .card.flex(v-for="card in introduction.card")
        .img
          img(:src="card.img")
        .info
          h3 {{ card.title }}
          p.moreSmaller {{ card.description }}
    .leading-container.flex
      .leading.flex(v-for="leading in introduction.leading")
        .icon
          img(:src="leading.icon")
        .info
          h4 {{ leading.title }}
          h6.sub {{ leading.sub_title }}

</template>

<script>
export default {
  name: "Introduction",
  props: {
    introduction: Object
  },
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
        &:nth-child(n)
          transform: translateY(-30%)
          &:hover
            transform: translateY(-35%)
        &.flex
          flex-direction: column

        > div

        .img
        .info
          padding: 1.3rem 0.8rem
          color: #434343
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
        &.flex
          align-items: center
          justify-content: center

        .icon
          width: 35px
          padding-right: 15px

        .info
          border-left: 1px solid rgba(0, 0, 0, 0.2)
          padding: 0px 15px
          color: #434343
          .sub
            font-weight: 400

</style>
