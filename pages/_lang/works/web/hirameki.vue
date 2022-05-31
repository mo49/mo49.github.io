<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">{{ $t('WORK_HIRAMEKI_TITLE') }}</h1>
    <div class="work-about" data-bg="odd">
      <h2>{{ $t('WORK_HEADLINE_ABOUT') }}</h2>
      <pre>{{ $t('WORK_HIRAMEKI_DESC') }}</pre>
      <p>cf: <a href="https://confit.atlas.jp/guide/event-img/jsai2018/4Pin1-44/public/pdf?type=in" target="_blank">発想支援システム「ひらめきエンジン」の紹介</a></p>
    </div>
    <div class="work-image" data-bg="even">
      <h2>{{ $t('WORK_HEADLINE_IMAGE') }}</h2>
      <ul class="work-image__list">
        <li class="work-image__item size-full">
          <img src="~assets/image/works/web/hirameki/1.png" @click="openModal">
          <figcaption>
            {{ $t('WORK_HIRAMEKI_CAP1') }}
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/hirameki/2.jpg" @click="openModal">
          <figcaption>
            {{ $t('WORK_HIRAMEKI_CAP2') }}
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/hirameki/3.jpg" @click="openModal">
          <figcaption>
            {{ $t('WORK_HIRAMEKI_CAP3') }}
          </figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/wFX5WZIb9ws" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>{{ $t('WORK_HEADLINE_SKILL') }}</h2>
      <p>Bodymovin / Electron / JavaScript</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>{{ $t('WORK_HEADLINE_PRODUCTION_TIME') }}</h2>
      <pre>{{ $t('WORK_HIRAMEKI_PRODUCTION_TIME') }}</pre>
    </div>
    <div class="work-media" data-bg="odd">
      <h2>{{ $t('WORK_HEADLINE_MEDIA') }}</h2>
      <ul>
        <li><a class="link-hover" href="https://www.kayac.com/news/2018/06/hiramekiengine" target="_blank">カヤックと乃村工藝社さんで“アイデアの種”を無限に生み出す発想支援アプリケーション「ひらめきエンジン」の販売を開始しました！</a></li>
        <li><a class="link-hover" href="https://www.nikkei.com/article/DGXLRSP483806_Y8A620C1000000/" target="_blank">乃村工芸社とカヤック、発想支援アプリケーション「ひらめきエンジン」を販売開始 </a></li>
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
