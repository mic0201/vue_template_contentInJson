<template lang="pug">
  header.flex
    //- Logo
    .logo.flex
      h3 {{ header.logo_part1 }}
      h3.alt {{ header.logo_part2 }}
    //- Menu
    .menu.flex
      span.item-container(v-for="(item, index) in header.menu" :key="index" href="")
        a.item.flex(:href="item.link") {{ item.name }}
          //- Layer 1
          .itemList.disappear.flex(v-if="item.isList")
            a.subItem(v-for="(subItem, subIndex) in item.item" :key="subIndex") {{ subItem.name }}
              span.icon-container(v-if="subItem.isList")
                i.fas.fa-chevron-right
              //- Layer 2
              .subItemList.disappear.flex(v-if="subItem.isList")
                a.subItem_item(v-for="(subItem_item, subItem_itemIndex) in subItem.item" :key="subItem_itemIndex") {{ subItem_item.name }}
          //- Tab
          .tabList.disappear.flex(v-if="item.isTab")
            label.tab-container(v-for="(tabHeader, tabHeaderIndex) in item.tabHeader" :key="tabHeaderIndex")
              input.disappear(autofocus)
              a.tabHeader.flex {{ tabHeader }}
              .tabBody.disappear.flex
                a.tabData(v-for="(tabData, tabDataIndex) in item.tabData[tabHeader]" :key="tabDataIndex") {{ tabData }}
    //- Extension
    .extension.flex
      span.icon
        i.fa.fa-search
      a.btn.fillout
        span {{ header.button_text }}
</template>

<script>
export default {
  name: "Header",
  props: {
    header: Object
  }
};
</script>

<style scoped lang="sass">
  $headerHoverColor: #f3b007

  @mixin showList($top, $left)
    top: $top
    left: $left
    opacity: 1
    transition: opacity .5s
    transition-delay: .1s

  @mixin whenHoverList
    color: white
    background-color: $headerHoverColor

  @mixin whenHoverItem
    color: #3e3939
    background-color: white

  .disappear
    position: absolute
    top: -9999%
    left: -9999%
    opacity: 0

  header
    width: 100%
    height: 45px
    color: white
    padding-top: 25px
    &.flex
      align-items: center

    .logo
      font-size: 0.95rem
      margin-right: 25px
      > h3
        padding: 10px 20px
        font-weight: 900
        &.alt
          color: black
          background-color: white
          border-radius: 4px

    .menu
      &.flex
        align-items: center
      height: 100%
      font-size: 0.5rem

      > .item-container
        height: 100%

        > .item
          position: relative
          min-width: 100px
          height: 100%
          transition: background-color .15s
          &.flex
            align-items: center
            justify-content: center

          *
            color: #3e3939
            background-color: white
          a
            padding: 10px 12px
          .flex:not(.tabList)
            flex-direction: column

          &:hover
            background-color: $headerHoverColor
            > .itemList
              +showList(100%, 0)
            > .tabList
              +showList(100%, auto)

          > .itemList
            min-width: 200px
            &:hover
              > .subItem
                +whenHoverList
                > .icon-container
                  > i
                    color: white

            > .subItem
              position: relative
              > .icon-container
                position: absolute
                right: 10px
                background-color: transparent
                > i
                  font-size: 0.5rem
                  opacity: 0.7
                  background-color: transparent
              &:hover
                +whenHoverItem
                > .icon-container
                  > i
                    color: #3e3939

                > .subItemList
                  +showList(0, 100%)

              > .subItemList
                min-width: 170px
                &:hover
                  > .subItem_item
                    +whenHoverList

                > .subItem_item
                  &:hover
                    +whenHoverItem

      .tabList
        max-width: 1200px
        position: absolute
        top: 100%
        width: 100vw
        transform: translateX(-50px)
        &.flex
          align-items: center

        &:hover
          .tabBody, .tabData
            +whenHoverList

        .tab-container
          height: 100%
          > input
            &:focus
              ~ .tabBody
                +showList(100%, 0)

        .tabHeader
          height: 100%
          justify-content: center
          font-weight: 900
          &:hover
            +whenHoverList

        .tabBody
          width: calc(100% - 20px)
          height: 250px
          padding: 10px
          border-top: 1px solid $headerHoverColor
          &.flex
            flex-direction: column
            flex-wrap: wrap

          .tabData
            &:hover
              +whenHoverItem

    .extension
      margin-left: auto
      &.flex
        align-items: center
      .btn
        font-size: 0.7rem
      .icon
        font-size: 1.7rem
        margin-right: 1.5rem

</style>
