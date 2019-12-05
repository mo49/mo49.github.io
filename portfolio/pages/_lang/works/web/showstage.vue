<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">
      SHOWSTAGE
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>{{ $t('works.headlines.about') }}</h2>
      <p>
        一体型VRヘッドセット「Oculus Go」に対応した，VR空間の生ライブプラットフォームサービス「SHOWSTAGE(ショウステージ)」のWebサイト．ライブ検索，お知らせ，ログイン，チケット購入，購入履歴一覧，ライブスクショ閲覧などの機能があるECサイト．<br>
        <span class="en">
          The website of the Live VR Platform "SHOWSTAGE" that supports the integrated VR headset "Oculus Go". This is E-commerce web site which has functions such as searching lives, notification, login, purchasing ticket, purchase history and screenshot list.
        </span>
      </p>
      <p>
        エンジニアはフロントエンド1名，バックエンド2名で作成．私の担当はフロントエンド．
        <span class="en">
          One web front-end engineer and two back-end engineers write program. I'm in web front-end.
        </span>
      </p>
      <p>
        <a href="https://www.showstage.live/" target="_blank">SHOWSTAGE</a>
      </p>
    </div>
    <div class="work-image" data-bg="even">
      <h2>{{ $t('works.headlines.image') }}</h2>
      <ul class="work-image__list">
        <li class="work-image__item">
          <img src="~assets/image/works/web/showstage/1.png" @click="openModal">
          <figcaption>
            トップ
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/showstage/2.png" @click="openModal">
          <figcaption>
            ライブ個別ページ
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/showstage/3.png" @click="openModal">
          <figcaption>
            購入確認
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/showstage/4.png" @click="openModal">
          <figcaption>
            購入済みチケット
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/showstage/5.png" @click="openModal">
          <figcaption>
            ポイントの購入
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/showstage/6.png" @click="openModal">
          <figcaption>
            アカウント設定
          </figcaption>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>{{ $t('works.headlines.skill') }}</h2>
      <p>Nuxt.js</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>{{ $t('works.headlines.production-time') }}</h2>
      <p>
        from August to October, 2019. (about 3month)
      </p>
    </div>
    <div class="work-media" data-bg="odd">
      <h2>Media</h2>
      <ul>
        <li><a class="link-hover" href="https://prtimes.jp/main/html/rd/p/000000315.000026205.html" target="_blank">SHOWROOM、VR空間で生ライブが楽しめるサービス「SHOWSTAGE β版」パフォーマーは有料配信が可能に</a></li>
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

