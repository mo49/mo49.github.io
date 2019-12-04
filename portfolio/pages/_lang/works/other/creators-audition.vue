<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">
      CREATORS AUDITION ポスター<br>
      <span class="en">
        CREATORS AUDITION Poster
      </span>
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>About</h2>
      <p>
        デジタルハリウッドで開催される「CREATORS AUDITION」の告知ポスターとリーフレット。
        <br><br>
        テーマは「デジタルモンスター」。隆起する街並みでデジタルモンスターを形取るというファンタジーな世界観を表現。モンスターを形作る建物は、実在の建物をトレースして描画した。
      </p>
    </div>
    <div class="work-image" data-bg="even">
      <h2>Image / Movie</h2>
      <ul class="work-image__list">
        <li class="work-image__item size-full">
          <img src="~assets/image/works/other/creators-audition/1.png" @click="openModal">
          <figcaption></figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/other/creators-audition/2.jpg" @click="openModal">
          <figcaption>リーフレット表</figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/other/creators-audition/3.jpg" @click="openModal">
          <figcaption>リーフレット裏</figcaption>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>Skill</h2>
      <p>Illustrator / Photoshop</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>Production Time</h2>
      <p>December, 2014. (about 2weeks)</p>
    </div>
    <div class="work-media" data-bg="odd">
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

