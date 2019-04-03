<template>
  <div class="gallery">
    <h2>GALLERY</h2>

    <h3>3DCG/VFX</h3>
    <ul class="gallery__list" data-genre="3dcg-vfx">
      <li class="gallery__item">
        <nuxt-link to="works/3dcg-vfx/showroom-office">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>(株)SHOWROOM荒井ビルオフィスのモデリング</p>
              <p>Maya</p>
            </figcaption>
          </figure>
        </nuxt-link>
      </li>
    </ul>

    <h3>VR</h3>
    <ul class="gallery__list" data-genre="vr">
      <li class="gallery__item">
        <nuxt-link to="works/vr/tele-magic">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>Tele-Magic</p>
              <p>Unity / FOVE / Theta V</p>
            </figcaption>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item">
        <nuxt-link to="works/3dcg-vfx/showroom-office">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>Gracity</p>
              <p>Unity / Vive / PUN / VRTK</p>
            </figcaption>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item">
        <nuxt-link to="works/3dcg-vfx/showroom-office">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>VR Heading Soccer</p>
              <p>Unity / FOVE</p>
            </figcaption>
          </figure>
        </nuxt-link>
      </li>
    </ul>

    <h3>Web Front-End</h3>
    <ul class="gallery__list" data-genre="web">
      <li class="gallery__item">
        <nuxt-link to="works/3dcg-vfx/showroom-office">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>ONE PIECE WCI編 テレビアニメ連動サイト</p>
              <p>D3.js / Canvas</p>
            </figcaption>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item">
        <nuxt-link to="works/3dcg-vfx/showroom-office">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>第69回 鎌倉花火大会</p>
              <p>Canvas / JavaScript</p>
            </figcaption>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item">
        <nuxt-link to="works/3dcg-vfx/showroom-office">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>メンタルエナジー</p>
              <p>PHP / MySQL / Canvas / CreateJS</p>
            </figcaption>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item">
        <nuxt-link to="works/3dcg-vfx/showroom-office">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>WebGL世界遺産</p>
              <p>Three.js</p>
            </figcaption>
          </figure>
        </nuxt-link>
      </li>
    </ul>

    <h3>Other</h3>
    <ul class="gallery__list" data-genre="other">
      <li class="gallery__item">
        <nuxt-link to="works/3dcg-vfx/showroom-office">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>TABIPPO2015ショートムービー</p>
              <p>AfterEffects / CINEMA 4D</p>
            </figcaption>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item">
        <nuxt-link to="works/3dcg-vfx/showroom-office">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>CREATORS AUDITION ポスター</p>
              <p>Illustrator / Photoshop</p>
            </figcaption>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item">
        <nuxt-link to="works/3dcg-vfx/showroom-office">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>第52回宣伝会議賞 協賛企業賞</p>
              <p>Copywriting</p>
            </figcaption>
          </figure>
        </nuxt-link>
      </li>
    </ul>

  </div>
</template>

<style lang="scss">
@import "~assets/sass/module/gallery";
.gallery__list{
  &[data-genre="3dcg-vfx"]{
    .gallery__item{
      &:nth-child(1) .gallery__thumb{
        background-image: url("~assets/image/works/3dcg-vfx/showroom-office/1.jpg");
      }
      &:nth-child(2) .gallery__thumb{
        background-image: url("~assets/image/works/3dcg-vfx/showroom-office/1.jpg");
      }
    }
  }
}

</style>
