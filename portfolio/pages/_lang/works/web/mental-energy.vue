<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">{{ $t('works.mental-energy.title') }}</h1>
    <div class="work-about" data-bg="odd">
      <h2>{{ $t('works.headlines.about') }}</h2>
      <pre>{{ $t('works.mental-energy.desc') }}</pre>
    </div>
    <div class="work-image" data-bg="even">
      <h2>{{ $t('works.headlines.image') }}</h2>
      <ul class="work-image__list">
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/FrOB_j6wHa0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>
            {{ $t('works.mental-energy.cap1') }}
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/mental-energy/2.png" @click="openModal">
          <figcaption>
            {{ $t('works.mental-energy.cap2') }}
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/mental-energy/3.png" @click="openModal">
          <figcaption>
            {{ $t('works.mental-energy.cap3') }}
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/mental-energy/4.png" @click="openModal">
          <figcaption>
            {{ $t('works.mental-energy.cap4') }}
          </figcaption>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>{{ $t('works.headlines.skill') }}</h2>
      <p>PHP / MySQL / Canvas / CreateJS / Javascript / GoogleMapsAPI / GoogleChartAPI / NotificationsAPI / AfterEffects</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>{{ $t('works.headlines.production-time') }}</h2>
      <p>{{ $t('works.mental-energy.production-time') }}</p>
    </div>
    <div class="work-media" data-bg="odd">
      <h2>Media</h2>
      <ul>
        <li><a class="link-hover" href="http://gsacademy.tokyo/news/2016/11/000203.html" target="_blank">文系・未経験からプログラミングを学んだメンバーがリリースしたジーズ発サービス13選 Vol.2 2016.11.15</a></li>
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

