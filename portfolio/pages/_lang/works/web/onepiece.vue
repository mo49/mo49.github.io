<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">
      テレビアニメ連動サイト<br>
      <span class="en">
        ONE PIECE Whole Cake Island Arc - Web site interacted with TV animated show
      </span>
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>{{ $t('works.headlines.about') }}</h2>
      <p>
        『ワンピース』のテレビアニメ放送とスマホがリアルタイムで連動する12週間連続企画。1回の放送を30シーンに分割、アニメ放送中に「アツイ！」と思ったシーンに合わせて連打し、自分が最も連打したシーンとみんなが最も連打したシーンが一致するとプレゼント応募券を獲得できるというサイト。<br>
        <span class="en">A 12-week continuous project in which the TV Anime, "One Piece" and the smartphone are linked in real time. You try to mash a button when you are excited on air. Divide one broadcast into 30 scenes and you can get an opportunity to apply for the present if the scene you select and the scene other viewer select are same.</span>
      </p>
      <p>
        私の担当はオンエア画面と結果画面。全体参加人数、シーンごとの全員のタップ数と個人のタップ数をリアルタイムに表示し連動感を出した。データはパフォーマンス面を考慮しつつAPIを定期的に叩いて取得している。演出面ではインタラクティブかつスケーラブルなグラフを描画するためにD3.jsを使用。オンエア中の随所にはさまれる割り込みアニメーションや結果画面のスロット、紙吹雪の演出などアニメーションもりもり。各放送回のトンマナにより7パターンのデザイン変更もある。放送日という明確な締め切りが決められている中で、クライアント側からのギリギリの演出変更にも対応した。放送初回の直前一週間は会社に泊まり込みで対応し、モノづくりの基礎体力を身につけられた案件。<br>
        <span class="en">
          I'm in charge of top screen and result screen on air. The total number of viewers, the number of taps of everyone for each scene and the number of taps of individuals were displayed in real time to give a sense of coordination. Data is acquired by regularly calling API while considering performance. In terms of direction, we use D3.js to draw interactive and scalable graphs. Animations such as an interruption animation, a result screen slot, and a confetti effect that are caught in any place on air. There are also 7 pattern design changes according to the tone-manner of each broadcast. While the clear deadline of on-air day was decided, we dealt with the request from the client until the last minute. During one week before the first on-air day, we worked staying overnight at the company, and I acquired the basic strength of creator.
        </span>
      </p>
    </div>
    <div class="work-image" data-bg="even">
      <h2>{{ $t('works.headlines.image') }}</h2>
      <ul class="work-image__list">
        <li class="work-image__item">
          <img src="~assets/image/works/web/onepiece/1.png" @click="openModal">
          <figcaption>
            オンエア画面
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/onepiece/2.png" @click="openModal">
          <figcaption>
            結果画面
          </figcaption>
        </li>
        <li class="work-image__item">
          <img src="~assets/image/works/web/onepiece/3.jpg" @click="openModal">
          <figcaption>
            ジャンプ誌面掲載
          </figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/8st9LbcYIHQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>実際に遊んでみている様子</figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/nYvS4oDFHlo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>画面キャプチャ</figcaption>
        </li>
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/Eqf75kwe1CM?start=1305" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <figcaption>特番でスタッフさんに触ってみていただいている様子</figcaption>
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>{{ $t('works.headlines.skill') }}</h2>
      <p>D3.js / JavaScript / Canvas</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>{{ $t('works.headlines.production-time') }}</h2>
      <p>from September to October, 2017. (about 2months)</p>
    </div>
    <div class="work-media" data-bg="odd">
      <h2>Media</h2>
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

