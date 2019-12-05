<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">
      Mental Energy
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>{{ $t('works.headlines.about') }}</h2>
      <p>
        エンジニア学校「<a class="link-hover" href="https://gsacademy.tokyo/" target="_blank">ジーズアカデミー</a>」の卒業制作。<br>
        <span class="en">
          The graduation work of the school for engineer, G's Academy.
        </span>
      </p>
      <p>
        Mental Energyとは、簡単に言うと人間が1日のうちに意思決定できる回数のこと。どれを食べよう、どの服を着よう、どのテレビを見よう、そんな些細な意思決定のたびにメンタルエナジーは減っていく。スティーブ・ジョブズが毎日同じ服を着ていたのは、余計な意思決定を減らし、経営など重要な意思決定のためにメンタルエナジーを温存しておくためだと言われている。<br>
        <span class="en">
          Mental Energy is simply the number of times people can make decisions in a day. Which foods to eat, which clothes to wear, which TV shows to watch... mental energy decreases with each such minor decision. It is said that Steve Jobs wore the same clothes every day to reduce unnecessary decisions and preserve mental energy for important decisions such as business management.
        </span>
      </p>
      <p>
        そこで、余計な意思決定をあぶり出しTODOリストのように管理できるサービスをつくった。ログイン、データの管理、データの分析・可視化、ユーザーへのフィードバックまで、サービスの一通りの流れをざっくりと実装できた。<br>
        <span class="en">
          Therefore, I made a service that you can find extra decisions and managed them like a to-do list. I developed from front-end to back-end, i.g. Data Management, Data Analysis and Visualization to user feedback.
        </span>
      </p>
    </div>
    <div class="work-image" data-bg="even">
      <h2>{{ $t('works.headlines.image') }}</h2>
      <ul class="work-image__list">
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/FrOB_j6wHa0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>
            プロモーションビデオ
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/mental-energy/2.png" @click="openModal">
          <figcaption>
            マイルールを登録する
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/mental-energy/3.png" @click="openModal">
          <figcaption>
            マイルールを地図上に表示する
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/mental-energy/4.png" @click="openModal">
          <figcaption>
            達成度をエネルギーで可視化
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
      <p>from May to June, 2016. (about 1month)</p>
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

