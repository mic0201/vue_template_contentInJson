<template lang="pug">
  #InformationWithTab.flex
    .tabs
      .tab.contentDescrFontColor(v-for="(tab_header, tabIndex) in informationWithTab.tab_header")
        div(:class="focusWho" @click="focusIt(`focus_${tabIndex+1}`, informationWithTab.tab[tab_header])") {{ tab_header }}
    .content.grid(:class="checkAttachment(content.attachment)")
      .title-box
        h2.title.contentTitleFontColor {{ content.title }}
        p.description.contentDescrFontColor {{ content.description }}

      .attachment-box
        img(v-if="content.attachment.image" :src="content.attachment.image")
        .img-backdrop(v-if="content.attachment.video" @click="triggerVideo(true)")
          .triangle.playBtnAnimation
        .iframe-container.flex(v-if="isVideoOpen && content.attachment.video")
          .back-drop(@click="triggerVideo(false)")
          iframe(:src="content.attachment.video")

      .score-box.flex
        .bar-container(v-for="header in content.score_header")
          h5.item {{ header }}
          .bar-backing
            .bar(:style="{ width: content.score[header] + '%' }")
              .tip
                span(v-if="header === 'GOLD Price'") {{ content.score[header] }}
                span(v-else) {{ content.score[header] + '%' }}
</template>

<script>
// [HTML] .Tabs is deprecated
// so, set .Tabs's width = 0 , overflow: hidden in css
// and .content's width = 100%
export default {
  name: "InformationWithTab",
  props: {
    informationWithTab: Object,
    contractInfo: Object
  },
  data: function () {
    return {
      focusWho: "",
      content: {
        title: "",
        description: "",
        score: [],
        attachment: {}
      },
      isVideoOpen: false
    };
  },
  watch: {
    contractInfo: {
      deep: true,
      handler: function (newVal, oldVal) {
        let balance = this.informationWithTab.tab["BUILDINGS"].score["GOLD Issued"] = this.substrNum(newVal["balance"].dividedBy(newVal["totalSupply"]).mul(100).toString(10))
        let price = this.informationWithTab.tab["BUILDINGS"].score["GOLD Price"] = this.substrNum(0)
        let distributed = this.informationWithTab.tab["BUILDINGS"].score["GOLD Distributed"] = this.substrNum(newVal["totalSupply"].minus(newVal["balance"]).dividedBy(newVal["totalSupply"]).mul(100).toString(10))
        let cap = this.informationWithTab.tab["BUILDINGS"].score["Market Cap"] = this.substrNum(window.micaWeb3.toBigNumber(price).mul(window.micaWeb3.toBigNumber(distributed)).toString(10))
        this.$forceUpdate()
      }
    }
  },
  beforeUpdate() {
    this.autoFocus();
  },
  methods: {
    autoFocus() {
      if (!this.focusWho) {
        let header = this.informationWithTab.tab_header[0];
        this.focusWho = "focus_1";
        this.content = this.informationWithTab.tab[header];
      }
    },
    focusIt(focusIndex, content) {
      this.focusWho = focusIndex;
      this.content = content;
    },
    checkAttachment(content) {
      if (!Object.keys(content).length) {
        return "noAttachment";
      }
      return "hasAttachment";
    },
    triggerVideo(open) {
      this.isVideoOpen = open;
    },
    substrNum(str) {
      if (typeof str === 'number' || str.indexOf('.') < 0) {
        return str
      }
      let afterDecimalPoint = str.split('.')[1]
      return str = str.replace(afterDecimalPoint, afterDecimalPoint.substr(0, 2))
    }
  }
};
</script>

<style lang="sass" scoped>
  #InformationWithTab
    .tabs
      width: 0
      overflow: hidden
      margin: 0 25px
      .tab
        font-size: .9rem
        font-weight: 900
        cursor: pointer
        div
          margin: .7rem 0
          padding: 1.5rem 1rem

      @for $i from 1 through 4
        .tab
          &:nth-child(#{$i})
            > div
              &.focus_#{$i}
                position: relative
                border: 1px solid black
                border-color: rgba(0, 0, 0, 0.3)
                &:before, &:after
                  content: ''
                  display: block
                  position: absolute
                  left: 100%
                  width: 0
                  height: 0
                  border-style: solid
                &:before
                  top: 21px
                  border-color: transparent transparent transparent rgba(0, 0, 0, 0.3)
                  border-width: 11px
                &:after
                  top: 22px
                  border-color: transparent transparent transparent white
                  border-width: 10px
    .content
      width: 100%
      &.grid
        grid-template-columns: 0.6fr 0.4fr
        &.hasAttachment
          grid-template-areas: "Title Attachment" "Score Score"
        &.noAttachment
          grid-template-areas: "Title Title" "Score Score"
      // width: calc(66% - 25px)
      margin: 0 25px

      .title-box
        grid-area: Title

      .attachment-box
        position: relative
        grid-area: Attachment
        align-self: center
        .img-backdrop
          cursor: pointer
          position: absolute
          width: 100%
          height: 100%
          top: 0
          left: 0
        .triangle
          position: absolute
          top: calc(50% - 50px)
          left: calc(50% - 45px)

      .score-box
        grid-area: Score
        &.flex
          flex-wrap: wrap
          > div
            width: calc(50% - 20px)
            &:nth-child(n+3)
              margin-top: 30px
            &:nth-child(even)
              margin-left: 20px

            .item
              color: #282828
            .bar-backing
              width: 100%
              height: 3px
              background-color: rgba(0, 0, 0, 0.2)
              .bar
                position: relative
                width: 40%
                height: 3px
                background-color: #f3b007
                transition: width 1s
                .tip
                  position: absolute
                  top: 8px
                  right: 0
                  font-size: .5rem
                  letter-spacing: 1px
                  color: white
                  background-color: #282828
                  border-radius: 3px
                  padding: 5px 15px
                  transform: translateX(50%)
                  span
                    display: inline-block
                    transform: scale(0.9)

</style>
