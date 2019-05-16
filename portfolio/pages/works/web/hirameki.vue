<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">
      ひらめきエンジン
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>About</h2>
      <p>
        偶発ワード（流行語や辞書のワードなど）と、利用者が設定するワード（ブレストのお題やビジネス上のキーワードなど）を組み合わせることで、新しい発想の種を提供するサイネージ。HONDAの最先端技術を研究するイノベーションラボの会議室にて初めて導入された。ライセンス化しアプリケーションとして販売中。海外オフィスへの導入も進行中。
        <br><br>
        私の担当はフロントエンド全般。流行りのワードは各種APIで取得し、背景のアニメーションはBodymovinというライブラリを使用したSVGアニメーションになっている。
        <br><br>
        <a href="https://confit.atlas.jp/guide/event-img/jsai2018/4Pin1-44/public/pdf?type=in" target="_blank">[PDF]発想支援システム「ひらめきエンジン」の紹介</a>
      </p>

    </div>
    <div class="work-image" data-bg="even">
      <h2>Image / Movie</h2>
      <ul class="work-image__list">
        <li class="work-image__item size-full">
          <img src="~assets/image/works/web/kamakura-fireworks/2.png" @click="openModal">
          <figcaption>
            しだれ柳
          </figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/VekUZsTGQVc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>Skill</h2>
      <p>Bodymovin / Electron</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>Production Time</h2>
      <p>from January to February, 2017. (about 1month)</p>
    </div>
    <div class="work-media" data-bg="odd">
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

