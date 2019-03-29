<template>
  <div class="gallery">
    <h2>GALLERY</h2>
    <h3>3DCG/VFX</h3>
    <ul class="gallery__list" data-genre="3dcg-vfx">
      <li class="gallery__item">
        <nuxt-link to="works/3dcg-showroom-office">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>(株)SHOWROOM荒井ビルオフィスのモデリング</p>
              <p>Maya</p>
            </figcaption>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item">
        <figure>
          <div class="gallery__thumb"></div>
          <figcaption class="gallery__caption">
            <p>(株)SHOWROOM荒井ビルオフィスのモデリング</p>
            <p>Maya</p>
          </figcaption>
        </figure>
      </li>
      <li class="gallery__item">
        <figure>
          <div class="gallery__thumb"></div>
          <figcaption class="gallery__caption">
            <p>(株)SHOWROOM荒井ビルオフィスのモデリング</p>
            <p>Maya</p>
          </figcaption>
        </figure>
      </li>
      <li class="gallery__item">
        <figure>
          <div class="gallery__thumb"></div>
          <figcaption class="gallery__caption">
            <p>(株)SHOWROOM荒井ビルオフィスのモデリング</p>
            <p>Maya</p>
          </figcaption>
        </figure>
      </li>
    </ul>
    <h3>VR</h3>
    <ul class="gallery__list">
      <li class="gallery__item">

      </li>
    </ul>
    <h3>Web Front-End</h3>
    <ul class="gallery__list">
      <li class="gallery__item">

      </li>
    </ul>
    <h3>Other</h3>
    <ul class="gallery__list">
      <li class="gallery__item">

      </li>
    </ul>
  </div>
</template>

<style lang="scss">
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
