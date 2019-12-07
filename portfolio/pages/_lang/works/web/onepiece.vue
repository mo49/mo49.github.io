<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">{{ $t('works.onepiece.title') }}</h1>
    <div class="work-about" data-bg="odd">
      <h2>{{ $t('works.headlines.about') }}</h2>
      <pre>{{ $t('works.onepiece.desc') }}</pre>
    </div>
    <div class="work-image" data-bg="even">
      <h2>{{ $t('works.headlines.image') }}</h2>
      <ul class="work-image__list">
        <li class="work-image__item">
          <img src="~assets/image/works/web/onepiece/1.png" @click="openModal">
          <figcaption>
            {{ $t('works.onepiece.cap1') }}
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/onepiece/2.png" @click="openModal">
          <figcaption>
            {{ $t('works.onepiece.cap2') }}
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/onepiece/3.jpg" @click="openModal">
          <figcaption>
            {{ $t('works.onepiece.cap3') }}
          </figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/8st9LbcYIHQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>{{ $t('works.onepiece.cap4') }}</figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/nYvS4oDFHlo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>{{ $t('works.onepiece.cap5') }}</figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/Eqf75kwe1CM?start=1305" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>{{ $t('works.onepiece.cap6') }}</figcaption>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>{{ $t('works.headlines.skill') }}</h2>
      <p>D3.js / JavaScript / Canvas</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>{{ $t('works.headlines.production-time') }}</h2>
      <p>{{ $t('works.onepiece.production-time') }}</p>
    </div>
    <div class="work-media" data-bg="odd">
      <h2>{{ $t('works.headlines.media') }}</h2>
      <ul>
        <li><a class="link-hover" href="https://www.kayac.com/news/2017/09/ONEPIECE_1709" target="_blank">史上初！？『ワンピース』アニメ放送とスマホがリアルタイムで連動する、特設プレゼントキャンペーンがスタート！</a></li>
        <li><a class="link-hover" href="https://www.kayac.com/service/client/1576" target="_blank">ONE PIECE（ワンピース）アニメ連動キャンペーン</a></li>
        <li><a class="link-hover" href="http://www.animatetimes.com/news/details.php?id=1506090757" target="_blank">『ワンピース』アニメ放送とスマホがリアルタイムで連動する、特設プレゼントキャンペーンサイトがオープン！</a></li>
        <li><a class="link-hover" href="http://news.mynavi.jp/news/2017/09/24/033/" target="_blank">TVアニメ『ワンピース』、スマホとリアルタイムで連動する特設サイト開設</a></li>
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

