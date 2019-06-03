<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">
      SHOWROOM V - Readyyy!版
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>About</h2>
      <p>
        誰でもスマホ一台でバーチャル配信ができる既存のアプリ<a class="link-hover" href="https://itunes.apple.com/jp/app/showroom-v/id1440259867" target="_blank" rel="noopener noreferrer">SHOWROOM V</a>のLive2D版の作成。バーチャル配信者はVRMというフォーマットでモデルを作ることが多いが、実際には二次元のイラストで代用している人も多くLive2Dへの需要があったため対応した。案件ごとにカスタマイズしたアプリをオーガナイザー様に配布していて、今回は（株）セガのアイドル育成アプリゲーム『Readyyy! 』の演者にSHOWROOM配信してもらうためのカスタマイズを行った。2018年12月以降、各メンバーに定期的に配信してもらい、その都度背景やキャラの修正を加えるなどのメンテナンスを施している。<br>
        <span class="en">
          Live2D version of the application, SHOWROOM V that enables a user to live stream as virtual character on smartphone. Virtual Livestreamers often make models in the format of VRM, but in reality, many people are using two-dimensional illustrations instead, so there is a demand for Live2D. We distributed an app customized for each organizer, and this time, I customized our app to have performers of SEGA's new idol project “Readyyy!” live stream on SHOWROOM. Since December 2018, each member regularly live stream, and I maintain backgrounds and characters each time.
        </span>
      </p>
      <p>
        私の担当はLive2Dへの移行作業から運用までのすべて。トラッキングのコードを丸ごとVRM用からLive2D用に差し替えるにあたり、ライブラリはULSeeを使用。取得した頂点情報から演者がもっとも自然に動くようにパラメータの閾値やトラッキングの感度などを調整した。大量にアクセスがあった際にパフォーマンスが落ちたため、メモリ、キャッシュ、ドローコール、テクスチャベイクあたりを見直して、チューニング作業を行った。<br>
        <span class="en">
          I’m in charge of programming and management. The library, ULSee is adopted to replace the tracking code entirely for VRM with for Live2D. Based on the acquired vertex information, the parameter threshold and tracking sensitivity were adjusted so that the performer moved most naturally. Performance was not good when there was a lot of access, so I tuned that I reviewed the memory, cache, draw calls and texture bakes.
        </span>
      </p>
    </div>
    <div class="work-image" data-bg="even">
      <h2>Image / Movie</h2>
      <ul class="work-image__list">
        <li class="work-image__item size-full">
          <img src="~assets/image/works/unity-ue/readyyy/1.png" @click="openModal">
          <figcaption>
          </figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/zeGwJnqN_k4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>スマホから見た配信中画面のキャプチャ</figcaption>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>Skill</h2>
      <p>Unity / C# / Live2D</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>Production Time</h2>
      <p>from October to December 2018. (about 3months)</p>
    </div>
    <div class="work-media" data-bg="odd">
      <h2>Media</h2>
      <ul>
        <li><a class="link-hover" href="https://ready.sega.jp/news/60897/" target="_blank" rel="noopener noreferrer">アイドルたちによる『SHOWROOM』生配信がスタート！初回配信は12月10日 蒼志バースデー配信！！</a></li>
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

