<template lang="pug">
  #Team
    h2.team-title.contentTitleFontColor {{ team.title }}
    p.team-description.contentDescrFontColor {{ team.description }}
    .member-box.flex
      .member-slider.flex
        .member.card(v-for="member in team.member")
          .img
            img(:src="member.image")
          .content
            .member-title-box
              h5.member-name.contentTitleFontColor {{ member.name }}
              h6.member-title {{ member.title }}
            .social-box.flex
              a.social(v-for="social in member.social" :src="social.link")
                i(:class="`fab fa-${social.name}`")
            p.member-description.contentDescrFontColor {{ member.description }}

</template>

<script>
export default {
  name: "Team",
  props: {
    team: Object
  }
};
</script>

<style lang="sass" scoped>

  @keyframes memberSlider
    0%
      transform: translateX(0%)


  #Team
    width: 100%
    h5, h6, h2, p
      text-align: center
      margin-left: auto
      margin-right: auto
    .team-description, .team-title
      width: 50%
    p
      margin-bottom: 5rem

    .member-box
      &.flex
        align-items: center
        flex-wrap: nowrap
      width: 100%
      height: 300px
      overflow: auto
      .member-slider
        &.flex
          flex-wrap: nowrap
        > .member
          position: relative
          width: 240px
          height: 280px
          flex: 0 0 auto
          overflow: hidden
          &:not(:first-child)
            margin-left: 4rem

          .content
            position: absolute
            height: 100%
            transform: translateY(-30%)
            background-color: white
            padding: 1rem 1.5rem
            transition: transform .5s

            .member-title-box
              padding: .45rem 0
              .member-title
                color: #f3b007
                transform: scale(0.85)

            .social-box
              padding: .7rem 0
              &.flex
                flex-wrap: wrap
                justify-content: space-around
              > .social
                width: calc(100% / 3)
                text-align: center
                > i
                  opacity: 0.8
                &:hover
                  > i
                    opacity: 1

            .member-description
              font-size: .67rem

          &:hover
            .content
              transform: translateY(-80%)

</style>
