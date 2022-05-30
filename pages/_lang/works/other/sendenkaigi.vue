<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">
      第52回宣伝会議賞 協賛企業賞<br>
      <span class="en">
        The 52th Senden-Kaigi Award, Sponsored Company Award, winning work
      </span>
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>{{ $t('works.headlines.about') }}</h2>
      <p>
        課題：ヤマハ大人の音楽レッスンに20代・30代の若者が通いたくなるアイデア。<br>
        <br>
        コピー：部長、ピアノのレッスンなので、帰ります。<br>
        <br>
        解説：「これが英語のレッスンなら聞く耳をもつ上司も多いでしょう。しかし、ピアノはそうではない。まだまだ音楽に対して寛容ではない社会を変えたいという思いで、このコピーを書きました。選出頂きありがとうございます。」（受賞コメントより）
      </p>
    </div>
    <div class="work-image" data-bg="even">
      <h2>{{ $t('works.headlines.image') }}</h2>
      <ul class="work-image__list">
        <li class="work-image__item">
          <img src="~assets/image/works/other/sendenkaigi/1.png" @click="openModal">
          <figcaption>
            宣伝会議掲載
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/other/sendenkaigi/2.jpg" @click="openModal">
          <figcaption>
            授賞式
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
      <h2>{{ $t('works.headlines.skill') }}</h2>
      <p>CopyWriting</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>{{ $t('works.headlines.production-time') }}</h2>
      <p>October, 2014. (about 1day)</p>
    </div>
    <div class="work-media" data-bg="odd">
      <h2>{{ $t('works.headlines.media') }}</h2>
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

