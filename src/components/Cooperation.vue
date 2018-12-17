<template lang="pug">
  .Cooperation
    .row.flex(v-for="row in cooperation.row")
      h2 {{ row.title }}
      .img-container.flex
        .img-box(v-for="logo in row.logo" )
          a(:href="logo.link" target="_blank")
            img(:src="logo.image")
</template>

<script>
export default {
  name: "Cooperation",
  props: {
    cooperation: Object
  },
}
</script>

<style lang="sass" scoped>
  .Cooperation
    .row
      &:not(:first-child)
        margin-top: 4rem
      &.flex
        flex-direction: column
    h2
      color: darkgrey
      text-align: center
    .img-box
      width: calc(100% / 6 - 30px)
      margin: 0px 10px
      a
        opacity: 0.75
        transition: opacity .3s
        &:hover
          opacity: 1
        img
          width: 100%
          margin: 10px

</style>
