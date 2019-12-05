<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">{{ $t('works.underthewater.title') }}</h1>
    <div class="work-about" data-bg="odd">
      <h2>{{ $t('works.headlines.about') }}</h2>
      <pre>{{ $t('works.underthewater.desc') }}</pre>
    </div>
    <div class="work-image" data-bg="even">
      <h2>{{ $t('works.headlines.image') }}</h2>
      <ul class="work-image__list">
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/oAf4lD8YEbM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </li>
        <li class="work-image__item size-half">
          <img src="~assets/image/works/3dcg-vfx/mv-underthewater/1.png" @click="openModal">
        </li>
        <li class="work-image__item size-half">
          <img src="~assets/image/works/3dcg-vfx/mv-underthewater/2.png" @click="openModal">
        </li>
        <li class="work-image__item size-half">
          <img src="~assets/image/works/3dcg-vfx/mv-underthewater/3.png" @click="openModal">
        </li>
        <li class="work-image__item size-half">
          <img src="~assets/image/works/3dcg-vfx/mv-underthewater/4.png" @click="openModal">
        </li>
        <li class="work-image__item size-half">
          <img src="~assets/image/works/3dcg-vfx/mv-underthewater/5.png" @click="openModal">
        </li>
        <li class="work-image__item size-half">
          <img src="~assets/image/works/3dcg-vfx/mv-underthewater/6.png" @click="openModal">
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>{{ $t('works.headlines.skill') }}</h2>
      <p>Maya / Unity / ShaderLab / GPGPU / C# / After Effects</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>{{ $t('works.headlines.production-time') }}</h2>
      <p>{{ $t('works.underthewater.production-time') }}</p>
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

