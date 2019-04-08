<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">
      Gracity
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>About</h2>
      <p>
        PUNとVRTKを組み合わせてVRオンラインマルチプレイ対戦ゲームを制作した。舞台は中世風の街並み。プレイヤー（魔法使い）は街中に散在する魔法の杖を取得し、遭遇した敵と対戦するゲーム。重量変更のギミックを盛り込み、重力（Gravity）と街(City)から、「Gracity」というタイトル（造語）をつけた。<br>
        <br>
        <a href="https://vracademy.jp/" target="_blank">第二回VRアカデミーオーディション</a>に出展。来場者のVR慣れのレベルに対応するため、練習/PvP/PvEの3種類のモードを用意。当日はVRのプロの方が多かったので、ほとんどの方にPvEを楽しんでもらえた。せっかくのマルチプレイなので、私がもう一台のPCのシミュレータで参戦。援護射撃をする形でモンスターを討伐した。<br>
        <br>
        Code : <a href="https://github.com/mo49/gracity" target="_blank">https://github.com/mo49/gracity</a>
      </p>

      <iframe class="slideshare" src="//www.slideshare.net/slideshow/embed_code/key/4KSMF3W3VRK83W" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen></iframe>
      <div style="margin-bottom:5px">
        <strong> <a href="//www.slideshare.net/KazukiMochizuki/20180127gracity" title="20180127_Gracity" target="_blank">20180127_Gracity</a> </strong> from <strong><a href="//www.slideshare.net/KazukiMochizuki" target="_blank">Kazuki Mochizuki</a></strong>
      </div>

    </div>
    <div class="work-image" data-bg="even">
      <h2>Image / Movie</h2>
      <ul class="work-image__list">
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/nD44LwPUkMU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/vr/gracity/2.jpg" @click="openModal">
          <caption>
            展示の様子
          </caption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/vr/gracity/3.jpg" @click="openModal">
          <caption>
            コントローラー操作方法
          </caption>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>Skill</h2>
      <p>Unity / C# / Vive / Photon / VRTK</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>Production Time</h2>
      <p>from December 2017 to January 2018. (about 1month)</p>
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

