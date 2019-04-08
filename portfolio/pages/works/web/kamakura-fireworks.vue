<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">
      第69回 鎌倉花火大会
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>About</h2>
      <p>
        一時は中止が決まった鎌倉花火大会をクラウドファンディングで開催することが決定した。その支援者の皆様のメッセージと名前を入れた花火を打ち上げる公式Webサイト。<br>
        <br>
        私の担当はFVの花火の演出。しだれ柳、水中花火、円形花火の3種類と、ランダムに生成される幾何学模様の花火を打ち上げた。パーティクルの量、透明度、重力、ベロシティ、寿命などの多様なパラメータを微調整しつつ、残像や水面反射、波や船の揺らぎなどにもこだわり、よりリアルに近づけるように表現した。BGMと合間ってかなりエモいサイトに仕上がっている。<br>
        <br>
        <a href="http://hanabi.kamakura-info.jp/" target="_blank" rel="noopener noreferrer">http://hanabi.kamakura-info.jp/</a>
      </p>

    </div>
    <div class="work-image" data-bg="even">
      <h2>Image / Movie</h2>
      <ul class="work-image__list">
        <li class="work-image__item">
          <img src="~assets/image/works/web/kamakura-fireworks/2.png" @click="openModal">
          <caption>
            しだれ柳
          </caption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/kamakura-fireworks/3.png" @click="openModal">
          <caption>
            水中花火
          </caption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/kamakura-fireworks/5.png" @click="openModal">
          <caption>
            ブレーン2017年10月号
          </caption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/cx1C3BETCAY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>Skill</h2>
      <p>Canvas / JavaScript</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>Production Time</h2>
      <p>from May to June, 2017. (about 3weeks)</p>
    </div>
    <div class="work-media" data-bg="odd">
      <h2>Media</h2>
      <ul>
        <li><a href="https://www.kayac.com/news/2017/05/kamakurafireworks">名前入りバーチャル花火が打ちあがる、「第69回鎌倉花火大会2017」公式サイトがオープン!</a></li>
        <li><a href="https://www.sendenkaigi.com/books/back-number-brain/11411">月刊ブレーン2017年10月号 No.687 | 宣伝会議オンライン</a></li>
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

