<template lang="pug">
  header.flex(:class='`${headerState} ${header.mode}`')
    //- Logo
    .logo.flex
      h3 {{ header.logo_part1 }}
      h3.alt {{ header.logo_part2 }}
    //- Menu
    .menu.flex
      span.item-container(v-for="(item, index) in header.menu" :key="index")
        a.item.flex(:href="item.link" :class="item.isTab ? 'tab' : ''") {{ item.name }}
          //- Layer 1
          .itemList.disappear.flex(v-if="item.isList")
            a.subItem(v-for="(subItem, subIndex) in item.item" :key="subIndex" :href="subItem.link") {{ subItem.name }}
              span.icon-container(v-if="subItem.isList")
                i.fas.fa-chevron-right
              //- Layer 2
              .subItemList.disappear.flex(v-if="subItem.isList")
                a.subItem_item(v-for="(subItem_item, subItem_itemIndex) in subItem.item" :key="subItem_itemIndex" :href="subItem_item.link") {{ subItem_item.name }}
          //- Tab
          .tabList.disappear.flex(v-if="item.isTab")
            label.tab-container(v-for="(tabHeader, tabHeaderIndex) in item.tabHeader" :key="tabHeaderIndex" @click="openTabBody(tabHeaderIndex)")
              a.tabHeader.flex(:class="tabState") {{ tabHeader }}
              .tabBody.disappear.flex
                a.tabData(v-for="(tabData, tabDataIndex) in item.tabData[tabHeader]" :key="tabDataIndex" :href="tabData.link") {{ tabData.name }}
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
  },
  data: function (data) {
    return {
      tabState: "open_1",
      headerState: "normal"
    };
  },
  mounted() {
    this.bindScrollEvent();
  },
  methods: {
    openTabBody(index) {
      this.tabState = "open_" + (index + 1);
    },
    bindScrollEvent() {
      let self = this
      document.addEventListener("scroll", function () {
        let scrollTop = document.documentElement.scrollTop;
        self.headerState = scrollTop > 150 ? "alt" : "normal";
      });
    }
  }
};
</script>

<style scoped lang="sass">
  $headerHoverColor: #f3b007

  @mixin show($top)
    top: $top !important
    opacity: 1 !important
    transition: opacity .5s !important
    transition-delay: .1s !important

  @mixin showTab($top)
    +show($top)

  @mixin showList($top, $left)
    left: $left !important
    +show($top)

  @mixin whenHoverList
    color: white
    background-color: $headerHoverColor

  @mixin disappear
    position: absolute
    top: -9999%
    opacity: 0

  @mixin whenHoverItem
    color: #3e3939
    background-color: white

  header
    color: white
    position: relative
    width: 100%
    height: 70px
    box-sizing: border-box
    transition: all .3s
    &.flex
      align-items: center

    &.alt
      width: 100%
      height: 55px
      max-width: 100vw
      background-color: white
      padding: 0 65px
      .logo
        > h3
          font-size: .8rem
          padding: 7px 18px
        h3:not(.alt)
          color: #2E2E2E
        h3.alt
          color: white
          background-color: #2E2E2E
      .menu
        .item
          color: #2E2E2E
        .tabList
          transform: translateX(0%)

      .extension
        .icon
          color: #2E2E2E
          opacity: 0.5
        .fillout
          padding: 8px 15px

    .logo
      h3:not(.alt)
        color: white

    .menu
      &.flex
        align-items: center
      height: 100%
      font-size: 0.5rem

      > .item-container
        height: 100%

        > .item
          min-width: 100px
          height: 100%
          transition: background-color .15s

          &:not(.tab)
            position: relative

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
              +showList(100%, 0)

          > .itemList
            min-width: 200px
            &.disappear
              +disappear
            &:hover
              > .subItem
                +whenHoverList
                > .icon-container
                  > i
                    color: white

            > .subItem
              position: relative
              &.disappear
                +disappear
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
                &.disappear
                  +disappear
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
        left: 0
        width: 100vw
        &.disappear
          +disappear
        &.flex
          align-items: center

        &:hover
          .tabBody, .tabData
            +whenHoverList

        .tab-container
          height: 100%
          @for $i from 1 through 9
            &:nth-child(#{$i})
              .tabHeader.open_#{$i}
                ~ .tabBody
                  +showList(100%, 0)

        .tabHeader
          height: 100%
          justify-content: center
          font-weight: 900
          &.focus
            ~ .tabBody
              +showList(100%, 0)
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
          &.disappear
            +disappear
          .tabData
            &:hover
              +whenHoverItem

    .extension
      margin-left: auto
      &.flex
        align-items: center
      .btn
        font-size: 0.7rem
        cursor: pointer
      .icon
        font-size: 1.7rem
        margin-right: 1.5rem

</style>
