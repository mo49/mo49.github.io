<template>
  <section class="container work">
    <h1 class="work__title">
      (株)SHOWROOM荒井ビルオフィスのモデリング
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>About</h2>
      <p>
        デジタルハリウッド3DCGコースに入学から3ヶ月後の課題制作。近い将来VR出社するのが当たり前になるかもしれないと考え、より具体的なイメージを掴むため弊社オフィスを3DCGで再現してみた。<br>
        <br>
        約30のスポットライトとポイントライトを仕込んだり、スタンドライトにSSSで透け感を出してみたりと、ライティング周りに時間を割いた。Arnoldレンダリング。スーパースキャンスタジオで撮影した人体モデル以外をモデリングした。
      </p>
    </div>
    <div class="work-image" data-bg="even">
      <h2>Image / Movie</h2>
      <ul class="work-image__list">
        <li class="work-image__item size-half">
          <img src="~assets/image/works/3dcg-vfx/showroom-office/1.jpg" @click="openModal">
        </li>
        <li class="work-image__item size-half">
          <img src="~assets/image/works/3dcg-vfx/showroom-office/2.jpg" @click="openModal">
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>Skill</h2>
      <p>Maya</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>Production Time</h2>
      <p>December, 2018. (about 2week)</p>
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

