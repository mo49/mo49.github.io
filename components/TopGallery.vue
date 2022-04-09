<template>
  <div class="gallery">
    <MovingAmeba :width="900" :height="900" color="#FFDE00" />
    <div class="title">
      <h2>GALLERY</h2>
    </div>

    <h3>Web</h3>
    <ul class="gallery__list" data-genre="web">
      <li class="gallery__item" data-name="showstage" data-label="business" data-is-lock="false">
        <nuxt-link :to="'/works/web/showstage'">
          <figure>
            <div class="gallery__thumb" />
            <figcaption class="gallery__caption">
              <p>{{ $t('WORK_SHOWSTAGE_TITLE') }}</p>
              <p>Nuxt.js</p>
            </figcaption>
          </figure>
        </nuxt-link>
      </li>
    </ul>

    <h3>CG / VR</h3>
    <ul class="gallery__list" data-genre="3dcg-vfx" />

    <h3>Other</h3>
    <ul class="gallery__list" data-genre="other" />
  </div>
</template>

<style lang="scss" scoped>
* {
  position: relative;
}

.title {
  @include pc-layout {
    right: 0;
  }

  @include sp-layout {
    right: 20px;
  }
}

canvas {
  top: -100px;

  @include pc-layout {
    right: -450px;
  }

  @include sp-layout {
    right: -450px;
  }
}

.gallery {
  &__list {
    margin-bottom: 20px;

    @include sp-layout {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  &__item {
    list-style: none;
    position: relative;
    overflow: hidden;
    text-shadow: 0 0 3px #000;

    @include hover;

    @include pc-layout {
      width: 230px;
      margin: 0 4px 8px;
      display: inline-block;
    }

    @include sp-layout {
      width: 49%;
      margin-bottom: 10px;
    }

    svg {
      display: none;
      position: absolute;
      right: 15px;
      top: 8px;
      color: #fff;
    }

    &[data-is-lock="true"] {
      svg {
        display: block;
      }
    }

    &[data-name="showstage"] {
      .gallery__thumb {
        background-image: url("~/assets/image/works/web/showstage/1.png");
      }
    }

    &[data-label="business"] {
      .gallery__caption::after {
        content: "business";
        background-color: rgba($label-color-business, 0.6);
      }
    }

    &[data-label="private"] {
      .gallery__caption::after {
        content: "private";
        background-color: rgba($label-color-private, 0.6);
      }
    }
  }

  &__thumb {
    @include flex-image(1,1);

    background-size: cover;
    background-position: center;
  }

  &__caption {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(#000, 0.5);
    color: #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include pc-layout {
      font-size: 14px;
      padding: 30px;
    }

    @include sp-layout {
      font-size: 12px;
      padding: 10px;
    }

    &::after {
      content: "private";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      font-weight: bold;
      text-shadow: none;

      @include pc-layout {
        font-size: 14px;
        padding: 10px 15px;
      }

      @include sp-layout {
        font-size: 12px;
        padding: 5px 8px;
      }
    }

    p:nth-child(1) {
      font-weight: bold;
    }
  }
}
</style>
