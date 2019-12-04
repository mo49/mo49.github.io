<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">
      株式会社SHOWROOM,荒井ビルオフィス<br>
      <span class="en">
        SHOWROOM Inc. Office in Arai Building
      </span>
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>About</h2>
      <p>
        デジタルハリウッド3DCGコースに入学から3ヶ月後の課題制作。近い将来VR出社するのが当たり前になるかもしれないと考え、より具体的なイメージを掴むため弊社オフィスを3DCGで再現してみた。<br>
        <span class="en">
          Produced a work three months after entering Digital Hollywood 3DCG course. I thought that it might be commonplace to work in VR in the near future, and reproduced my office with 3DCG to get a more specific image.
        </span>
      </p>
      <p>
        約30のスポットライトとポイントライトを仕込んだり、スタンドライトにSSSで透け感を出してみたりと、ライティング周りに時間を割いた。Arnoldレンダリング。スーパースキャンスタジオで撮影した人体モデル以外をモデリングした。<br>
        <span class="en">
          I used about 30 spotlights and point lights, and tried to make the standlights see-through with SSS. So I spent some time around the lighting using Arnold. I modeled everything other than the human body model shot at Super Scan Studio.
        </span>
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
      <p>December, 2018. (about 2weeks)</p>
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

