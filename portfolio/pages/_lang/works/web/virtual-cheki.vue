<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">
      バーチャルチェキ会
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>About</h2>
      <p>
        イベント会場の係員のスマホでお客さんと画面越しのVTuberさんのツーショット写真を撮影し、GCPを経由してVTuberさんのスマホ（もしくはタブレット）へ送信。VTuberさんの手元に届いた画像にサインをしてもらったら、QRコードを生成し会場に送り返す。お客さんはQRコードを読み取ることで、サイン入りのツーショット写真を持ち帰ることができるというシステム。
        <br><br>
        Node.jsでサーバーをつくり、WebSocket通信で画像を送信している。画像とサインはCanvasで合成。Webサイトのみで完結している。
      </p>

    </div>
    <div class="work-image" data-bg="even">
      <h2>Image / Movie</h2>
      <ul class="work-image__list">
        <li class="work-image__item">
          <a href="https://twitter.com/296momonga_mmd/status/1124552658964992000" target="_blank">
            <img src="~assets/image/works/web/virtual-cheki/1.png">
          </a>
          <figcaption>
            徳島マチアソビ
          </figcaption>
        </li>
        <li class="work-image__item">
          <a href="https://twitter.com/yasu_7060/status/1124601501052096512" target="_blank">
            <img src="~assets/image/works/web/virtual-cheki/2.png">
          </a>
          <figcaption>
            徳島マチアソビ
          </figcaption>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>Skill</h2>
      <p>Socket.IO / Node.js / Canvas / JavaScript / GCP</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>Production Time</h2>
      <p>from May to June, 2017. (about 3weeks)</p>
    </div>
    <div class="work-media" data-bg="odd">
      <h2>Media</h2>
      <ul>
        <li><a class="link-hover" href="https://www.kayac.com/news/2017/05/kamakurafireworks" target="_blank">名前入りバーチャル花火が打ちあがる、「第69回鎌倉花火大会2017」公式サイトがオープン!</a></li>
        <li><a class="link-hover" href="https://www.sendenkaigi.com/books/back-number-brain/11411" target="_blank">月刊ブレーン2017年10月号 No.687 | 宣伝会議オンライン</a></li>
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

