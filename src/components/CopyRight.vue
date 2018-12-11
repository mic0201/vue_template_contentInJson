<template lang="pug">
  #CopyRight.flex.contentDescrFontColor
    .copyright {{ copyRight.copy_right }}
    .document
      a(v-for="doc in copyRight.document" :href="doc.link" target="_blank") {{ doc.name }}
</template>

<script>
export default {
  name: "CopyRight",
  props: {
    copyRight: Object
  }
}
</script>

<style lang="sass" scoped>
  #CopyRight
    font-size: .7rem
    &.flex
      justify-content: space-between

    .document
      a
        font-weight: 900
        opacity: 0.8
        letter-spacing: 1px
        padding: 0 15px
        &:not(:last-child)
          border-right: 1px solid rgba(0, 0, 0, 0.3)
</style>
