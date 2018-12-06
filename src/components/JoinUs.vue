<template lang="pug">
  #JoinUs.flex
    .info
      h2.title {{ joinUs.title }}
      p.description {{ joinUs.description }}
      .box.flex
        .value.flex(v-for="val in joinUs.data")
          .icon
          .amount {{ val.value }}
          h6.sub_title {{ val.title }}
    .action.flex
      a.btn.fillout.flex
        .icon.flex
        span {{ joinUs.button_text }}
</template>

<script>
import { getIcon1, getIcon2, getBtnIcon } from "@/service/section_5_joinUsService.js";

export default {
  name: "JoinUs",
  props: {
    joinUs: Object
  },
  async created() {
    this.appendIcon();
  },
  methods: {
    async appendIcon() {
      let icon1 = await getIcon1();
      let icon2 = await getIcon2();
      let btnIcon = await getBtnIcon();
      document.querySelectorAll(".box .value .icon")[0].innerHTML = icon1.data;
      document.querySelectorAll(".box .value .icon")[1].innerHTML = icon2.data;
      document.querySelectorAll(".action .icon")[0].innerHTML = btnIcon.data;
      document.querySelectorAll(".action .icon")[0].style.fill = '#fff';
      document.querySelectorAll(".action .icon svg")[0].style.width = '2rem';
      for (let i = 0; i < 2; i++) {
        document.querySelectorAll(".box .value .icon svg path")[i].style.fill = "#f3b007";
        document.querySelectorAll(".box .value .icon svg")[i].style.width = "2.6rem";
      }
    }
  }
};
</script>

<style lang="sass" scoped>
  #JoinUs
    &.flex
      > div
        width: calc(100% / 2)

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
