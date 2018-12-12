<template lang="pug">
  #ArticleWithList
    h2.title.contentTitleFontColor {{ article.title }}
    p.description.contentDescrFontColor {{ article.description }}
    ul.list.contentDescrFontColor
      li(v-for="list in article.list" @mouseover="triggerActive(list, true)" @mouseleave="triggerActive(list, false)")
        //- minus
        svg.minus(v-if="list.active" aria-hidden="true" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512")
          path(fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z")
        //- plus
        svg.plus(v-if="!list.active" aria-hidden="true" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512")
          path(fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z")
        a(:href="list.link" target="_blank") {{ list.content }}

</template>

<script>
export default {
  name: "ArticleWithList",
  props: {
    article: Object
  },
  methods: {
    triggerActive(list, active) {
      list.active = active
    }
  }
};
</script>

<style lang="sass" scoped>

  #ArticleWithList
    width: 100%
    li
      position: relative
      margin: 0.6rem 0
    svg
      position: absolute
      top: 3.5px
      left: -25px
      width: 0.6rem
      > path
        fill: #f3b007

</style>
