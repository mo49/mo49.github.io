<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">{{ $t('WORK_SENDENKAIGI_TITLE') }}</h1>
    <div class="work-about" data-bg="odd">
      <h2>{{ $t('WORK_HEADLINE_ABOUT') }}</h2>
      <pre>{{ $t('WORK_SENDENKAIGI_DESC') }}</pre>
    </div>
    <div class="work-image" data-bg="even">
      <h2>{{ $t('WORK_HEADLINE_IMAGE') }}</h2>
      <ul class="work-image__list">
        <li class="work-image__item">
          <img src="~assets/image/works/other/sendenkaigi/1.png" @click="openModal">
          <figcaption>
            {{ $t('WORK_SENDENKAIGI_CAP1') }}
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/other/sendenkaigi/2.jpg" @click="openModal">
          <figcaption>
            {{ $t('WORK_SENDENKAIGI_CAP2') }}
          </figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/RpgTUYsfFgU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption></figcaption>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>{{ $t('WORK_HEADLINE_SKILL') }}</h2>
      <p>CopyWriting</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>{{ $t('WORK_HEADLINE_PRODUCTION_TIME') }}</h2>
      <pre>{{ $t('WORK_SENDENKAIGI_PRODUCTION_TIME') }}</pre>
    </div>
    <div class="work-media" data-bg="odd">
      <h2>{{ $t('WORK_HEADLINE_MEDIA') }}</h2>
      <ul>
        <li><a class="link-hover" href="http://mag.sendenkaigi.com/senden/201504/sendenkaigi-award/004851.php" target="_blank">宣伝会議賞 協賛企業賞発表！ヤマハミュージックジャパン～日本放送協会</a></li>
      </ul>
    </div>
    <div class="work-award" data-bg="even">
      <h2>Award</h2>
      <ul>
        <li>第52回宣伝会議賞 協賛企業賞</li>
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
