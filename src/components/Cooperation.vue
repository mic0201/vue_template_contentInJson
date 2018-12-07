<template lang="pug">
  #Cooperation.flex
    .img-box(v-for="logo in cooperation.logo" )
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
  #Cooperation
    &.flex
      flex-wrap: wrap
    .img-box
      width: calc(100% / 6 - 30px)
      margin: 0px 10px
      a
        opacity: 0.85
        transition: opacity .3s
        &:hover
          opacity: 1
        img
          width: 100%
          margin: 10px

</style>
