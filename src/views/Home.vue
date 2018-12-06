<template lang="pug">
  .home
    .header-container
      Header.component(:header="header")
    .key-visual-container
      KeyVisual.component(:keyVisual="keyVisual")
    .introduction-container
      Introduction.component(:introduction="introduction")
    .article-with-list-container
      .component.article-with-list.flex
        ArticleWithList(:article="article_3")
        ImageWall(:imageWall="imageWall_3")
    .article-with-list-container
      .component.article-with-list.flex
        ImageWall(:imageWall="imageWall_4")
        ArticleWithList(:article="article_4")
    .join-us-container
      JoinUs.component(:joinUs="joinUs")
</template>

<script>
import Header from "@/components/Header";
import KeyVisual from "@/components/KeyVisual";
import Introduction from "@/components/Introduction";
import ArticleWithList from "@/components/ArticleWithList";
import ImageWall from "@/components/ImageWall";
import JoinUs from "@/components/JoinUs";

import {
  getHeader,
  getKeyVisual,
  getIntroduction,
  getArticleWithList_3,
  getArticleWithList_4,
  getImageWall_3,
  getImageWall_4,
  getJoinUs
} from "@/service/";

export default {
  name: "home",
  components: {
    Header,
    KeyVisual,
    Introduction,
    ArticleWithList,
    ImageWall,
    JoinUs
  },
  data: function() {
    return {
      header: {},
      keyVisual: {
        title: []
      },
      introduction: {},
      article_3: {},
      article_4: {},
      imageWall_3: {},
      imageWall_4: {},
      joinUs: {}
    };
  },
  created() {
    this.getSomething("header", getHeader());
    this.getSomething("keyVisual", getKeyVisual());
    this.getSomething("introduction", getIntroduction());
    this.getSomething("article_3", getArticleWithList_3());
    this.getSomething("article_4", getArticleWithList_4());
    this.getSomething("imageWall_3", getImageWall_3());
    this.getSomething("imageWall_4", getImageWall_4());
    this.getSomething("joinUs", getJoinUs());
  },
  methods: {
    async getSomething(type, service) {
      let something = await service;
      this[type] = something.data;
      console.log(type, this[type]);
    }
  }
};
</script>

<style lang="sass" scoped>
  .home
    height: 80vh

    > div
      &:nth-child(odd):not(.header-container)
        background-color: #FFFFFF
      &:nth-child(even)
        background-color: #F5F4F5

    .header-container
      width: 100%
      position: fixed

    .key-visual-container
      width: 100%
      padding: 0px 30px
      background: url('../assets/img/keyBg.jpg') center center no-repeat
      background-size: cover
      background-attachment: fixed

    .introduction-container

    .article-with-list-container
      padding: 4rem 0
      .article-with-list
        > div
          width: calc(100% / 2 - 120px)
          margin: 0 30px

    .join-us-container
      width: 100%
      padding: 4rem 30px
      background: url('../assets/img/sectionBg-1.jpg') center center no-repeat
      background-size: cover
      background-attachment: fixed

</style>
