<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">
      Tele-Magic
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>About</h2>
      <p>
        自分から2~3mほど離れた場所に置いたThetaのライブストリーミング映像を見ながら、なんちゃってテレイグジスタンス体験ができるタワーディフェンスゲーム。<br>
        <br>
        まずThetaに向かい合って座りHMDをかぶると、HMDをかぶっている現実の自分自身が見える（Thetaの視点に乗り移る）。スタートボタンを押すと現実の自分に向かって敵が進軍するので、爆裂魔法を発生させて敵を撃退するというゲーム。<br>
        <br>
        爆裂魔法スイッチを注視するだけの簡単な操作だが、詠唱時間、スイッチの残数、自身のHP、敵のスピードなどを考慮して最適なタイミングで爆裂魔法を発生させないとクリアできないという戦略性も盛り込んだ。<br>
        <br>
        Code : <a class="link-hover" href="https://github.com/mo49/ThetaLivestreaming" target="_blank">https://github.com/mo49/ThetaLivestreaming</a>
      </p>
    </div>
    <div class="work-image" data-bg="even">
      <h2>Image / Movie</h2>
      <ul class="work-image__list">
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/oVYiC1urFyQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>Theta背景あり</figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/HAP6bRYbTqs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>Theta背景なし</figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/vr/tele-magic/2.jpg" @click="openModal">
          <figcaption>
            <a class="link-hover" href="https://vracademy.jp/events/vrfes/" target="_blank">VRコンテンツfes. 2018 Spring</a> に出展
          </figcaption>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>Skill</h2>
      <p>Unity / C# / FOVE / Theta</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>Production Time</h2>
      <p>February 2018. (about 2weeks)</p>
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

