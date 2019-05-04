<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">
      TABIPPO2015ショートムービー
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>About</h2>
      <p>
      「TABIPPO2015」という旅のイベントにて流されたムービー。会場は中野サンプラザ（収容2,200名）。アーティストのナオト・インティライミさんのトークライブの前座に使用された。<br>
      <br>
      私の担当は前半の2分間。コンセプトである「LIFE IS SHORT. LIVE YOUR DREAM.（人生は短い。だから夢に生きよう）」を強調するための事実を、インフォグラフィックのように羅列した。
      </p>
    </div>
    <div class="work-image" data-bg="even">
      <h2>Image / Movie</h2>
      <ul class="work-image__list">
        <li class="work-image__item">
          <img src="~assets/image/works/other/tabippo2015/1.png" @click="openModal">
          <figcaption></figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/other/tabippo2015/2.png" @click="openModal">
          <figcaption></figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/other/tabippo2015/3.png" @click="openModal">
          <figcaption></figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/other/tabippo2015/4.png" @click="openModal">
          <figcaption></figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/aSiUjBCBKgs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>本番ムービー</figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/nuqTiQUO7hs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>次回のデモムービー（非公開）</figcaption>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>Skill</h2>
      <p>AfterEffects / CINEMA 4D Lite / Illustrator</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>Production Time</h2>
      <p>from January to February, 2015. (about 3weeks)</p>
    </div>
    <div class="work-media" data-bg="odd">
      <h2>Media</h2>
      <ul>
        <li><a class="link-hover" href="http://tabippo.net/tabippo2015tokyo-report/" target="_blank">【2200人が歓喜！】TABIPPO2015東京イベントレポート</a></li>
      </ul>
    </div>
    <div class="work-award" data-bg="even">
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

