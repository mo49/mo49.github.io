<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">{{ $t('works.tele-magic.title') }}</h1>
    <div class="work-about" data-bg="odd">
      <h2>{{ $t('works.headlines.about') }}</h2>
      <pre>{{ $t('works.tele-magic.desc') }}</pre>
      <p>Code : <a class="link-hover" href="https://github.com/mo49/ThetaLivestreaming" target="_blank">https://github.com/mo49/ThetaLivestreaming</a></p>
    </div>
    <div class="work-image" data-bg="even">
      <h2>{{ $t('works.headlines.image') }}</h2>
      <ul class="work-image__list">
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/oVYiC1urFyQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>{{ $t('works.tele-magic.cap1') }}</figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/HAP6bRYbTqs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>{{ $t('works.tele-magic.cap2') }}</figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/vr/tele-magic/2.jpg" @click="openModal">
          <figcaption>{{ $t('works.tele-magic.cap3') }}</figcaption>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>{{ $t('works.headlines.skill') }}</h2>
      <p>Unity / C# / FOVE / Theta</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>{{ $t('works.headlines.production-time') }}</h2>
      <p>{{ $t('works.tele-magic.production-time') }}</p>
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

