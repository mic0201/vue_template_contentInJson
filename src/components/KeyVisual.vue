<template lang="pug">
  #KeyVisual.flex
    .key-title
      .title-slider.flex
        h1(v-for="title in keyVisual.title") {{ title }}
      p {{ keyVisual.description }}
    .key-action.flex
      button.iframeBtn(@click="triggerVideo(true)") WATCH VIDEO
      .triangle.playBtnAnimation(@click="triggerVideo(true)")
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
      isVideoOpen: false,
      num: 0
    };
  },
  created() {
    this.autoCarouselTitle()
  },
  methods: {
    triggerVideo(open) {
      this.isVideoOpen = open;
    },
    autoCarouselTitle() {
      setInterval(() => {
        let ele = document.querySelector(".title-slider");
        let index = this.num % this.keyVisual.title.length;
        ele.style.transform = `translateX(-${index * 100}%)`;
        this.num++
      }, 3000);
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
      overflow: hidden
      .title-slider
        transition: transform .7s
        h1
          width: 100%
          flex: 0 0 auto
    .key-action
      cursor: pointer
      &.flex
        align-items: center
        justify-content: center
      .iframeBtn
        cursor: pointer
        color: #f3b007

</style>
