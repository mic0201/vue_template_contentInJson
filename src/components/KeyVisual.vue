<template lang="pug">
  #KeyVisual.flex
    .key-title
      h1 {{ keyVisual.title[0] }}
      p {{ keyVisual.description }}
    .key-action.flex
      button.iframeBtn(@click="triggerVideo(true)") WATCH VIDEO
      .triangle.playBtnAnimation
      .iframe-container.flex(v-if="isVideoOpen")
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
        color: #f3b007

</style>
