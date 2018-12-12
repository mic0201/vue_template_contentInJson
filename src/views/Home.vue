<template lang="pug">
  .home
    .header-container
      Header.component(:header="header")
    .key-visual-container(:class="keyVisual.mode" :style="{ backgroundImage: 'url('+ keyVisual.background_image +')' }")
      .black-back-drop
      KeyVisual.component(:keyVisual="keyVisual" :contractInfo="contractInfo")
    .introduction-container
      Introduction.component(:introduction="introduction")
    .article-with-list-container
      .component.article-with-list.flex
        ArticleWithList(:article="article_3")
        ImageWall(:imageWall="imageWall_3" :lightless="true")
    .article-with-list-container
      .component.article-with-list.flex
        ImageWall(:imageWall="imageWall_4")
        ArticleWithList(:article="article_4")
    .article-wtih-action-container(:style="{ backgroundImage: 'url('+ articleWithAction_5.articleWithAction.background_image +')' }")
      ArticleWithAction.component(sectionIndex="5" :articleWithAction="articleWithAction_5.articleWithAction" :icon1="articleWithAction_5.icon1" :icon2="articleWithAction_5.icon2" :icon3="articleWithAction_5.icon3")
    .introduction-type-2-container
      IntroductionType2.component(:introduction_6="introduction_6")
    .information-with-tab-container
      InformationWithTab.component(:informationWithTab="informationWithTab")
    .cooperation-container
      Cooperation.component(:cooperation="cooperation")
    .article-wtih-action-container(:style="{ backgroundImage: 'url('+ articleWithAction_9.articleWithAction.background_image +')' }")
      ArticleWithAction.component.reverse(sectionIndex="9" :articleWithAction="articleWithAction_9.articleWithAction" :icon1="articleWithAction_9.icon1" :icon2="articleWithAction_9.icon2" :icon3="articleWithAction_9.icon3")
    .team-container
      Team.component(:team="team")
    .twitter-container
      TwitterWall.component(:twitterWall="twitterWall")
    .footer-container
      Footer.component(:footer="footer")
    .copyRight-container
      CopyRight.component(:copyRight="copyRight")
</template>

<script>
import Header from "@/components/Header";
import KeyVisual from "@/components/KeyVisual";
import Introduction from "@/components/Introduction";
import ArticleWithList from "@/components/ArticleWithList";
import ImageWall from "@/components/ImageWall";
import ArticleWithAction from "@/components/ArticleWithAction";
import IntroductionType2 from "@/components/IntroductionType2";
import InformationWithTab from "@/components/InformationWithTab";
import Cooperation from "@/components/Cooperation";
import Team from "@/components/Team";
import TwitterWall from '@/components/TwitterWall'
import Footer from '@/components/Footer'
import CopyRight from '@/components/CopyRight'

import { connectContract } from '@/contract/'

import {
  getHeader,
  getKeyVisual,
  getIntroduction_2,
  getArticleWithList_3,
  getArticleWithList_4,
  getImageWall_3,
  getImageWall_4,
  getArticleWithAction_5,
  getIntroduction_6,
  getInformationWithTab,
  getCooperationIcon,
  getArticleWithAction_9,
  getTeam,
  getTwitterWall,
  getFooter,
  getCopyRight
} from "@/service/";

export default {
  name: "home",
  components: {
    Header,
    KeyVisual,
    Introduction,
    ArticleWithList,
    ImageWall,
    ArticleWithAction,
    IntroductionType2,
    InformationWithTab,
    Cooperation,
    Team,
    TwitterWall,
    Footer,
    CopyRight
  },
  data: function () {
    return {
      contract: {},
      contractInfo: {
        symbol: '',
        totalSupply: '',
        cap: '',
        balance: ''
      },
      header: {},
      keyVisual: {
        title: []
      },
      introduction: {},
      article_3: {},
      article_4: {},
      imageWall_3: {},
      imageWall_4: {},
      articleWithAction_5: {
        articleWithAction: {},
        icon1: "",
        icon2: "",
        icon3: ""
      },
      introduction_6: {},
      informationWithTab: {},
      cooperation: {},
      articleWithAction_9: {
        articleWithAction: {},
        icon1: "",
        icon2: "",
        icon3: ""
      },
      team: {},
      twitterWall: {},
      footer: {
        left: {},
        mid: {},
        right: {}
      },
      copyRight: {}
    };
  },
  async created() {
    let apiList = [
      { name: "header", api: getHeader() },
      { name: "keyVisual", api: getKeyVisual() },
      { name: "introduction", api: getIntroduction_2() },
      { name: "article_3", api: getArticleWithList_3() },
      { name: "article_4", api: getArticleWithList_4() },
      { name: "imageWall_3", api: getImageWall_3() },
      { name: "imageWall_4", api: getImageWall_4() },
      { name: "articleWithAction_5", api: getArticleWithAction_5() },
      { name: "introduction_6", api: getIntroduction_6() },
      { name: "informationWithTab", api: getInformationWithTab() },
      { name: "cooperation", api: getCooperationIcon() },
      { name: "articleWithAction_9", api: getArticleWithAction_9() },
      { name: "team", api: getTeam() },
      { name: "twitterWall", api: getTwitterWall() },
      { name: "footer", api: getFooter() },
      { name: "copyRight", api: getCopyRight() }
    ];
    apiList.forEach(d => {
      this.getSomething(d.name, d.api)
    })
    this.contract = await connectContract()
    console.log('===== Contract Information =====', this.contract)
    this.readContract()
  },
  methods: {
    async getSomething(type, service) {
      let something = await service;
      console.log(type, something);
      let exception = ["articleWithAction_5", "articleWithAction_9"]
      if (exception.indexOf(type) > -1) {
        this[type].articleWithAction = something[0].data;
        this[type].icon1 = something[1].data;
        this[type].icon2 = something[2].data;
        this[type].icon3 = something[3].data;
        return;
      }
      this[type] = something.data;
    },
    async readContract() {
      let _read = (methods, param) => {
        return new Promise(resolve => {
          this.contract.Instance[methods](param, (e, r) => {
            if (!e) {
              resolve(r)
            }
          })
        })
      }
      this.contractInfo = {
        totalSupply: await _read('totalSupply'),
        symbol: await _read('symbol'),
        cap: await _read('cap'),
        balance: await _read('balanceOf', this.contract.admin_wallet)
      }
    }
  },
};
</script>

<style lang="sass" scoped>
  .home
    height: 80vh

    > div
      &:nth-child(2n+2):not(.copyRight-container)
        background-color: #FFFFFF
      &:nth-child(2n+3)
        background-color: #F5F4F5

    .header-container
      width: 100%
      position: fixed
      z-index: 99

    .key-visual-container
      position: relative
      width: 100%
      // background: url('../assets/img/keyBg.jpg') center center no-repeat
      background-size: cover
      background-attachment: fixed
      .black-back-drop
        display: none
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background-color: rgba(0, 0, 0, 0.5)
      &.dark
        .black-back-drop
          display: block

    .introduction-container

    .article-with-list-container
      padding: 4rem 0
      .article-with-list
        > div
          width: calc(100% / 2 - 120px)
          margin: 0 30px

    .article-wtih-action-container
      width: 100%
      padding: 4rem 0
      // background: url('../assets/img/sectionBg-1.jpg') center center no-repeat
      background-size: cover
      background-attachment: fixed

    .introduction-type-2-container,
    .information-with-tab-container,
    .cooperation-container,
    .team-container,
    .twitter-container,
    .footer-container
      padding: 4rem 30px

    .copyRight-container
      background-color: #F5F4F5
      padding: 1.5rem 30px
      border-top: 1px solid rgba(0, 0, 0, 0.2)

</style>
