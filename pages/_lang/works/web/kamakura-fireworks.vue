<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">{{ $t('WORK_KAMAKURA_TITLE') }}</h1>
    <div class="work-about" data-bg="odd">
      <h2>{{ $t('WORK_HEADLINE_ABOUT') }}</h2>
      <pre>{{ $t('WORK_KAMAKURA_DESC') }}</pre>
      <p><a class="link-hover" href="http://hanabi.kamakura-info.jp/" target="_blank" rel="noopener noreferrer">http://hanabi.kamakura-info.jp/</a></p>
    </div>
    <div class="work-image" data-bg="even">
      <h2>{{ $t('WORK_HEADLINE_IMAGE') }}</h2>
      <ul class="work-image__list">
        <li class="work-image__item">
          <img src="~assets/image/works/web/kamakura-fireworks/2.png" @click="openModal">
          <figcaption>
            {{ $t('WORK_KAMAKURA_CAP1') }}
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/kamakura-fireworks/3.png" @click="openModal">
          <figcaption>
            {{ $t('WORK_KAMAKURA_CAP2') }}
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/kamakura-fireworks/5.png" @click="openModal">
          <figcaption>
            {{ $t('WORK_KAMAKURA_CAP3') }}
          </figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/cx1C3BETCAY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>{{ $t('WORK_HEADLINE_SKILL') }}</h2>
      <p>Canvas / JavaScript</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>{{ $t('WORK_HEADLINE_PRODUCTION_TIME') }}</h2>
      <p>{{ $t('WORK_KAMAKURA_PRODUCTION_TIME') }}</p>
    </div>
    <div class="work-media" data-bg="odd">
      <h2>{{ $t('WORK_HEADLINE_MEDIA') }}</h2>
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
