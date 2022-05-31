<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">{{ $t('WORK_TABIPPO_TITLE') }}</h1>
    <div class="work-about" data-bg="odd">
      <h2>{{ $t('WORK_HEADLINE_ABOUT') }}</h2>
      <pre>{{ $t('WORK_TABIPPO_DESC') }}</pre>
    </div>
    <div class="work-image" data-bg="even">
      <h2>{{ $t('WORK_HEADLINE_IMAGE') }}</h2>
      <ul class="work-image__list">
        <li class="work-image__item">
          <img src="~assets/image/works/other/tabippo2015/1.png" @click="openModal">
          <figcaption></figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/other/tabippo2015/2.png" @click="openModal">
          <figcaption></figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/other/tabippo2015/3.png" @click="openModal">
          <figcaption></figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/other/tabippo2015/4.png" @click="openModal">
          <figcaption></figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/aSiUjBCBKgs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption></figcaption>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>{{ $t('WORK_HEADLINE_SKILL') }}</h2>
      <p>AfterEffects / CINEMA 4D Lite / Illustrator</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>{{ $t('WORK_HEADLINE_PRODUCTION_TIME') }}</h2>
      <pre>{{ $t('WORK_TABIPPO_PRODUCTION_TIME') }}</pre>
    </div>
    <div class="work-media" data-bg="odd">
      <h2>{{ $t('WORK_HEADLINE_MEDIA') }}</h2>
      <ul>
        <li><a class="link-hover" href="http://tabippo.net/tabippo2015tokyo-report/" target="_blank">【2200人が歓喜！】TABIPPO2015東京イベントレポート</a></li>
      </ul>
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
