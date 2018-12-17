<template lang="pug">
  #Footer.flex
    .left
      .logo.flex
        h3.logo_part1 {{ footer.left.logo_part1 }}
        h3.logo_part1.alt.dark {{ footer.left.logo_part2 }}
      p.contentDescrFontColor.description {{ footer.left.description }}
      .social-container.flex
        .social(v-for="social in footer.left.social")
          a(:href="social.link" target="_blank")
            i(:class="`fab fa-${social.name}`")
    .mid
      .search
        input(placeholder="Search")
        .input-btn.flex
          span GO
      //- .tree-container.flex
      //-   .tree.flex(v-for="tree in footer.mid.tree")
      //-     h4.node-title.contentTitleFontColor {{ tree.title }}
      //-     a.node.contentDescrFontColor(v-for="node in tree.node" :href="node.link" target="_blank") {{ node.name }}

    .right
      .window
        h4.window-title.contentTitleFontColor {{ footer.right.title }}
        ul.contentDescrFontColor
          li(v-for="list in footer.right.list") {{ list }}
            i.fas.fa-info-circle
      .image
        img(v-for="pay in footer.right.pay_methods" :src="pay")
</template>

<script>
export default {
  name: "Footer",
  props: {
    footer: Object
  }
}
</script>

<style lang="sass" scoped>
  #Footer
    > div
      padding: 0px 2rem

    .left
      width: calc(25% - 2rem)
      .description
        padding: 0 20px

      .social-container
        .social
          margin: 10px 20px 0px 20px
          i
            font-size: 2rem
            opacity: 0.9
            &:hover
              opacity: 1

    .mid
      width: calc(50% - 2rem)
      .search
        position: relative
        margin: 15px 0px 30px 0px
        input
          width: 100%
          height: 45px
          padding-left: 30px
          border: 0
          box-shadow: 0px 0 2px 0 rgba(0,0,0,0.1), 0 0 0px 0 rgba(0,0,0,0.1), 0 2px 2px 0 rgba(0,0,0,0.18);
          &::placeholder
            color: rgba(0, 0, 0, 0.5)
        .input-btn
          position: absolute
          right: 0
          top: calc(50% - 45px / 2)
          height: 45px
          opacity: 0.3
          &.flex
            align-items: center
          span
            cursor: pointer

      .tree-container
        width: 100%
        justify-content: space-between
        > .tree
          width: calc(100% / 2)
          &.flex
            flex-direction: column

        .node-title
          margin-bottom: 1.6rem

        .node
          position: relative
          padding: 5px 0px 5px 30px
          border-left: 1px solid #919191
          font-size: .6rem
          &:before
            position: absolute
            top: 12px
            left: 0
            content: ''
            width: 20px
            height: 1px
            background-color: #919191

    .right
      width: calc(25% - 2rem)
      .window
        padding: 1.5rem 2rem
        background-color: white
        box-shadow: 1px 1px 6px -2px rgba(0, 0, 0, 0.6)
        h4.window-title
          margin: 1rem 0 2rem 0
        ul
          padding-left: 25px
          li
            position: relative
            margin: 1.4rem 0
            font-size: .7rem
            font-weight: 900
            i
              position: absolute
              color: #f3b007
              left: -20px
              top: 2px
      .image
        margin: 1.6rem 0
        img
          width: 3.5rem
          &:not(:last-child)
            margin-right: .2rem

</style>
