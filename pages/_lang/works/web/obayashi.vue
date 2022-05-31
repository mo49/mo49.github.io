<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">
      BIM Will MANAGEMENT SYSTEM
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>{{ $t('WORK_HEADLINE_ABOUT') }}</h2>
      <p>
        大林組の展示会で使用されたビル管理システムのデモサイト。
        <br>
        街の全景→異常を検知したビルにズームイン→異常を検知した設備の詳細を表示、という流れ。
        <br>
        <br>
        私の担当は3Dモデルの表示とカメラワーク、インタラクション全般。パフォーマンスチューニングとして、素材のFBXデータのポリゴンをBlender上で間引いたりパーツごとに分解するなどの作業から自分でやっている。オブジェクトの点滅表現はGLSL。
        <br>
      </p>

    </div>
    <div class="work-image" data-bg="even">
      <h2>{{ $t('WORK_HEADLINE_IMAGE') }}</h2>
      <ul class="work-image__list">
        <li class="work-image__item size-full">
          <img src="~assets/image/works/web/obayashi/1.png" @click="openModal">
          <figcaption>
          </figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/W49Bid_z4d4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>{{ $t('WORK_HEADLINE_SKILL') }}</h2>
      <p>Three.js / Blender / WebGL / JavaScript</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>{{ $t('WORK_HEADLINE_PRODUCTION_TIME') }}</h2>
      <p>from July to September, 2016. (about 2months)</p>
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
