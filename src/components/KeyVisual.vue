<template lang="pug">
  #KeyVisual.flex
    .key-title
      h1 {{ keyVisual.title[0] }}
      p {{ keyVisual.description }}
    .key-action.flex
      button.iframeBtn(@click="triggerVideo(true)") WATCH VIDEO
      .triangle
      .key-iframe.flex(v-if="isVideoOpen")
        .back-drop(@click="triggerVideo(false)")
        iframe(:src="keyVisual.video")

</template>

<script>
export default {
  name: "KeyVisual",
  props: {
    keyVisual: Object
  },
  data: function() {
    return {
      isVideoOpen: false
    };
  },
  methods: {
    triggerVideo(open) {
      this.isVideoOpen = open;
    }
  }
};
</script>

<style lang="sass" scoped>
  $publicColor: #f3b007

  @keyframes playBtnZoom
    0%
      transform: scale(1)
      opacity: 0.7
    80%
      opacity: 0
    100%
      transform: scale(57)
      opacity: 0

  #KeyVisual
    height: 80vh
    padding: 0 30px
    &.flex
      align-items: center
    > div
      width: 50%
      color: white

    .key-title
    .key-action
      cursor: pointer
      &.flex
        align-items: center
        justify-content: center
      .iframeBtn
        color: $publicColor
      .triangle
        position: relative
        width: 0
        height: 0
        border-style: solid
        border-width: 50px 0 50px 86.6px
        border-color: transparent transparent transparent #ffffff
        transform: scale(0.5)
        &:before
          content: ''
          position: absolute
          top: calc(50% - 5px / 2)
          left: calc(50% - 5px / 2 - 55px)
          width: 5px
          height: 5px
          border-radius: 50%
          background-color: white
          animation: playBtnZoom .8s ease-out 0s infinite
      .key-iframe
        position: absolute
        z-index: 88
        top: 0
        left: 0
        width: 100%
        height: 100%
        &.flex
          align-items: center
          justify-content: center
        .back-drop
          position: absolute
          width: 100%
          height: 100%
          background-color: rgba(0, 0, 0, 0.5)
        iframe
          position: relative
          width: 60%
          height: 60%


</style>
