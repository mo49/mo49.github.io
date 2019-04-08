<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">
      WebGL世界遺産
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>About</h2>
      <p>
        デジタルハリウッド東京本校卒業制作。<br>
        <br>
        2015年7月現在のすべての世界遺産1,031件のデータ（緯度経度、登録年、ジャンル）をWebGLで可視化したインフォグラフィック作品。
      </p>
    </div>
    <div class="work-image" data-bg="even">
      <h2>Image / Movie</h2>
      <ul class="work-image__list">
        <li class="work-image__item size-full">
          <img src="~assets/image/works/web/webgl-world-heritage/1.png" @click="openModal">
          <figcaption>
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/webgl-world-heritage/2.png" @click="openModal">
          <figcaption>
            チュートリアル
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/webgl-world-heritage/3.png" @click="openModal">
          <figcaption>
            ポップアップを表示
          </figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/7ai4iDLLyCk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>
            プロモーションビデオ
          </figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/1O1qjFUHb3s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>
            インタビュー映像
          </figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/0ARLtfpPxUg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>
            デジタルフロンティアグランプリ2016授賞式
          </figcaption>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>Skill</h2>
      <p>Three.js / JavaScript / AfterEffects</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>Production Time</h2>
      <p>from May to June, 2015. (about 3weeks)</p>
    </div>
    <div class="work-media" data-bg="odd">
      <h2>Media</h2>
      <ul>
        <li><a href="http://school.dhw.co.jp/course/digital/index.html">デジタルハリウッド（専門スクール） 本科UI/UXD専攻</a></li>
        <li><a href="http://school.dhw.co.jp/p/uiuxd-lp/1708dhw/">デジタルハリウッド（専門スクール） 本科UI/UXD専攻 201708</a></li>
      </ul>
    </div>
    <div class="work-award" data-bg="even">
      <h2>Award</h2>
      <ul>
        <li>DIGITAL FRONTIER GRAND PRIX 2016<br>インタラクティブコンテンツ部門　ベストブランディング賞</li>
      </ul>
    </div>

    <modal ref="modal" />
  </section>
</template>

<script>
import Modal from "~/components/Modal"

export default {
  components: {
    Modal,
  },
  methods: {
    openModal(evt) {
      this.$refs.modal.openModal(evt);
    },
  },
}
</script>

<style lang="scss">
@import "~assets/sass/page/works";
</style>

