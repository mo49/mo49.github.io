<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">{{ $t('works.gracity.title') }}</h1>
    <div class="work-about" data-bg="odd">
      <h2>{{ $t('works.headlines.about') }}</h2>
      <pre>{{ $t('works.gracity.desc') }}</pre>
      <p>Code : <a class="link-hover" href="https://github.com/mo49/gracity" target="_blank">https://github.com/mo49/gracity</a></p>

      <iframe class="slideshare" src="//www.slideshare.net/slideshow/embed_code/key/4KSMF3W3VRK83W" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen></iframe>
      <div style="margin-bottom:5px">
        <strong> <a class="link-hover" href="//www.slideshare.net/KazukiMochizuki/20180127gracity" title="20180127_Gracity" target="_blank">20180127_Gracity</a> </strong> from <strong><a class="link-hover" href="//www.slideshare.net/KazukiMochizuki" target="_blank">Kazuki Mochizuki</a></strong>
      </div>

    </div>
    <div class="work-image" data-bg="even">
      <h2>{{ $t('works.headlines.image') }}</h2>
      <ul class="work-image__list">
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/nD44LwPUkMU?start=209" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/vr/gracity/2.jpg" @click="openModal">
          <figcaption>{{ $t('works.gracity.cap1') }}</figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/vr/gracity/3.jpg" @click="openModal">
          <figcaption>{{ $t('works.gracity.cap2') }}</figcaption>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>{{ $t('works.headlines.skill') }}</h2>
      <p>Unity / C# / Vive / Photon / VRTK</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>{{ $t('works.headlines.production-time') }}</h2>
      <p>{{ $t('works.gracity.production-time') }}</p>
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

