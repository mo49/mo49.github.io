<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">{{ $t('works.showstage.title') }}</h1>
    <div class="work-about" data-bg="odd">
      <h2>{{ $t('works.headlines.about') }}</h2>
      <pre>{{ $t('works.showstage.desc') }}</pre>
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
            {{ $t('works.showstage.cap1') }}
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/showstage/2.png" @click="openModal">
          <figcaption>
            {{ $t('works.showstage.cap2') }}
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/showstage/3.png" @click="openModal">
          <figcaption>
            {{ $t('works.showstage.cap3') }}
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/showstage/4.png" @click="openModal">
          <figcaption>
            {{ $t('works.showstage.cap4') }}
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/showstage/5.png" @click="openModal">
          <figcaption>
            {{ $t('works.showstage.cap5') }}
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/showstage/6.png" @click="openModal">
          <figcaption>
            {{ $t('works.showstage.cap6') }}
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
      <p>{{ $t('works.showstage.production-time') }}</p>
    </div>
    <div class="work-media" data-bg="odd">
      <h2>{{ $t('works.headlines.media') }}</h2>
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

