<template lang="pug">
  .ArticleWithAction.flex(:class="'section'+sectionIndex")
    .info
      h2.title {{ articleWithAction.title }}
      p.description {{ articleWithAction.description }}
      .box.flex
        .value.flex(v-for="val in articleWithAction.data")
          .icon
          .amount {{ val.value }}
          h6.sub_title {{ val.title }}
    .action.flex
      a.btn.fillout.flex
        .icon.flex
        span {{ articleWithAction.button_text }}
</template>

<script>
export default {
  name: "ArticleWithAction",
  props: {
    sectionIndex: String,
    articleWithAction: Object,
    icon1: String,
    icon2: String,
    icon3: String
  },
  data: function() {
    return {
      articleWithActionData: []
    };
  },
  watch: {
    articleWithAction: {
      deep: true,
      handler: function(newVal, oldVal) {
        if (newVal.data) {
          this.$nextTick(() => {
            this.appendIcon();
          })
        }
      }
    }
  },
  methods: {
    appendIcon() {
      let icon = document.querySelectorAll(`.ArticleWithAction.section${this.sectionIndex} .box .value .icon`),
        actionIcon = document.querySelectorAll(`.ArticleWithAction.section${this.sectionIndex} .action .icon`);
      icon[0].innerHTML = this.icon1;
      icon[1].innerHTML = this.icon2;
      actionIcon[0].innerHTML = this.icon3;
      actionIcon[0].style.fill = "#fff";
      actionIcon[0].children[0].style.width = "2rem";
      for (let i = 0; i < icon.length; i++) {
        icon[i].children[0].style.width = "2.6rem";
        icon[i].children[0].children[0].style.fill = "#f3b007";
      }
    },
    plusAnimation(val) {}
  }
};
</script>

<style lang="sass" scoped>
  .ArticleWithAction
    &.flex
      > div
        width: calc(100% / 2)
      &.reverse
        flex-direction: row-reverse

    .info
      .title
        color: #f3b007
      .description
        color: white
      .box
        margin-top: 3.8rem
        > div
          width: calc(100% / 2)

        .value
          &.flex
            justify-content: space-between
            flex-direction: column

          .icon
            margin: auto 0

          .amount, .sub_title
            color: white

          .amount
            font-weight: 900
            font-size: 1.4rem

          .sub_title
            font-weight: 400

    .action
      &.flex
        align-items: center
        justify-content: center

        .btn
          cursor: pointer
          &.flex
            align-items: center
          &:hover
            .icon
              &:before
                opacity: 0

        span
          font-size: 0.94rem
          margin-left: 4rem
          margin-right: 2rem

        .icon
          position: relative
          &.flex
            align-items: center
          &:before
            content: ''
            position: absolute
            width: 60px
            height: 60px
            top: calc(50% - 60px / 2)
            left: calc(50% - 60px / 2)
            background-color: black
            opacity: 0.2
            transition: opacity .3s

</style>
