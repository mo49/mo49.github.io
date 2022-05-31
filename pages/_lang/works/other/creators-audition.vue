<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">{{ $t('WORK_POSTER_TITLE') }}</h1>
    <div class="work-about" data-bg="odd">
      <h2>{{ $t('WORK_HEADLINE_ABOUT') }}</h2>
      <pre>{{ $t('WORK_POSTER_DESC') }}</pre>
    </div>
    <div class="work-image" data-bg="even">
      <h2>{{ $t('WORK_HEADLINE_IMAGE') }}</h2>
      <ul class="work-image__list">
        <li class="work-image__item size-full">
          <img src="~assets/image/works/other/creators-audition/1.png" @click="openModal">
          <figcaption></figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/other/creators-audition/2.jpg" @click="openModal">
          <figcaption>{{ $t('WORK_POSTER_CAP1') }}</figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/other/creators-audition/3.jpg" @click="openModal">
          <figcaption>{{ $t('WORK_POSTER_CAP2') }}</figcaption>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>{{ $t('WORK_HEADLINE_SKILL') }}</h2>
      <p>Illustrator / Photoshop</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>{{ $t('WORK_HEADLINE_PRODUCTION_TIME') }}</h2>
      <pre>{{ $t('WORK_POSTER_PRODUCTION_TIME') }}</pre>
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
