<template>
  <div class="gallery">
    <Ameba :width="900" :height="900" :color="'#FFDE00'" />
    <div class="title">
      <h2>GALLERY</h2>
      <p>作品集</p>
    </div>
    <h3>CG / VR</h3>
    <ul class="gallery__list" data-genre="3dcg-vfx">
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link to="works/3dcg-vfx/mv-underthewater">
          <figure>
            <div class="gallery__thumb" :style=" {'background-image': 'url('+img_mv_underthewater+')' } "></div>
            <figcaption class="gallery__caption">
              <p>Music Video - Under The Water</p>
              <p>Maya / Unity / ShaderLab / GPGPU / After Effects</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link to="works/3dcg-vfx/showroom-office">
          <figure>
            <div class="gallery__thumb" :style=" {'background-image': 'url('+img_showroom_office+')' } "></div>
            <figcaption class="gallery__caption">
              <p>株式会社SHOWROOM,荒井ビルオフィス</p>
              <p>Maya</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="business" data-is-lock="false">
        <nuxt-link to="works/unity-ue/srv-live2d">
          <figure>
            <div class="gallery__thumb" :style=" {'background-image': 'url('+img_readyyy+')' } "></div>
            <figcaption class="gallery__caption">
              <p>SHOWROOM V - Readyyy!版</p>
              <p>Unity / Live2D</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link to="works/vr/tele-magic">
          <figure>
            <div class="gallery__thumb" :style=" {'background-image': 'url('+img_tele_magic+')' } "></div>
            <figcaption class="gallery__caption">
              <p>Tele-Magic</p>
              <p>Unity / FOVE / Theta V</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link to="works/vr/gracity">
          <figure>
            <div class="gallery__thumb" :style=" {'background-image': 'url('+img_gracity+')' } "></div>
            <figcaption class="gallery__caption">
              <p>Gracity</p>
              <p>Unity / Vive / PUN / VRTK</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>

    </ul>

    <h3>Web</h3>
    <ul class="gallery__list" data-genre="web">
      <!-- <li class="gallery__item" data-label="business" data-is-lock="true">
        <nuxt-link to="works/web/virtual-cheki" target="_blank">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>（仮）バーチャルチェキ</p>
              <p>WebSocket / Node.js / Canvas / GCP</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li> -->
      <li class="gallery__item" data-label="business" data-is-lock="false">
        <nuxt-link to="works/web/onepiece">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>ONE PIECE WCI編 テレビアニメ連動サイト</p>
              <p>D3.js / Canvas</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="business" data-is-lock="false">
        <nuxt-link to="works/web/kamakura-fireworks">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>第69回 鎌倉花火大会</p>
              <p>Canvas / JavaScript</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="business" data-is-lock="false">
        <nuxt-link to="works/web/hirameki">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>ひらめきエンジン</p>
              <p>Bodymovin / Electron</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <!-- <li class="gallery__item" data-label="business" data-is-lock="true">
        <nuxt-link to="works/web/obayashi" target="_blank">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>（仮）BIMシステム</p>
              <p>Three.js / Blender / WebGL / JavaScript</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li> -->
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link to="works/web/mental-energy">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>Mental Energy</p>
              <p>PHP / MySQL / Canvas / CreateJS</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link to="works/web/webgl-world-heritage">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>WebGL世界遺産</p>
              <p>Three.js</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
    </ul>

    <h3>Other</h3>
    <ul class="gallery__list" data-genre="other">
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link to="works/other/tabippo2015">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>TABIPPO2015ショートムービー</p>
              <p>AfterEffects / CINEMA 4D</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link to="works/other/creators-audition">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>CREATORS AUDITION ポスター</p>
              <p>Illustrator / Photoshop</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link to="works/other/sendenkaigi">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>第52回宣伝会議賞 協賛企業賞</p>
              <p>Copywriting</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
    </ul>

  </div>
</template>

<script>
import Ameba from '~/components/Ameba.vue'
export default {
  components: {
    Ameba,
  },
  data() {
    return {
      img_mv_underthewater: require('@/assets/image/works/3dcg-vfx/mv-underthewater/1.png'),
      img_showroom_office: require('@/assets/image/works/3dcg-vfx/showroom-office/1.jpg'),
      img_tele_magic: require('@/assets/image/works/vr/tele-magic/1.png'),
      img_gracity: require('@/assets/image/works/vr/gracity/1.png'),
      img_readyyy: require('@/assets/image/works/unity-ue/readyyy/1.png'),
    }
  }
}
</script>

<style lang="scss" scoped>
*{
  position: relative;
}
.title{
  @include pc-layout{
    right: 0px;
  }
  @include sp-layout{
    right: 20px;
  }
}
canvas{
  top: -100px;
  @include pc-layout{
    right: -450px;
  }
  @include sp-layout{
    right: -450px;
  }
}

.gallery{
  &__list{
    margin-bottom: 20px;
    @include sp-layout{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  &__item{
    list-style: none;
    position: relative;
    overflow: hidden;
    text-shadow: 0px 0px 3px #000;
    @include hover();
    @include pc-layout{
      width: 230px;
      margin: 0 4px 8px;
      display: inline-block;
    }
    @include sp-layout{
      width: 49%;
      margin-bottom: 10px;
    }
    svg{
      display: none;
      position: absolute;
      right: 15px;
      top: 8px;
      color: #fff;
    }
    &[data-is-lock="true"]{
      svg{
        display: block;
      }
    }
  }

  &__thumb{
    @include flex-img(1,1);
    background-size: cover;
    background-position: center;
  }
  &__caption{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(#000, .5);
    color: #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include pc-layout{
      font-size: 14px;
      padding: 30px;
    }
    @include sp-layout{
      font-size: 12px;
      padding: 10px;
    }
    &:after{
      content: 'private';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      font-weight: bold;
      text-shadow: none;
      @include pc-layout{
        font-size: 14px;
        padding: 10px 15px;
      }
      @include sp-layout{
        font-size: 12px;
        padding: 5px 8px;
      }
    }
    p:nth-child(1){
      font-weight: bold;
    }
  }
  &__item{
    &[data-label="business"]{
      .gallery__caption:after{
        content:'business';
        background-color: rgba($label-color-business, .6);
      }
    }
    &[data-label="private"]{
      .gallery__caption:after{
        content:'private';
        background-color: rgba($label-color-private, .6);
      }
    }
  }
}

//////////////////////////////
// list
//////////////////////////////
.gallery__list{
  &[data-genre="web"]{
    .gallery__item{
      &:nth-child(1) .gallery__thumb{
        background-image: url("~assets/image/works/web/onepiece/1.png");
      }
      &:nth-child(2) .gallery__thumb{
        background-image: url("~assets/image/works/web/kamakura-fireworks/1.png");
      }
      &:nth-child(3) .gallery__thumb{
        background-image: url("~assets/image/works/web/hirameki/3.jpg");
      }
      &:nth-child(4) .gallery__thumb{
        background-image: url("~assets/image/works/web/mental-energy/2.png");
      }
      &:nth-child(5) .gallery__thumb{
        background-image: url("~assets/image/works/web/webgl-world-heritage/1.png");
      }
    }
  }
  &[data-genre="other"]{
    .gallery__item{
      &:nth-child(1) .gallery__thumb{
        background-image: url("~assets/image/works/other/tabippo2015/1.png");
      }
      &:nth-child(2) .gallery__thumb{
        background-image: url("~assets/image/works/other/creators-audition/1.png");
      }
      &:nth-child(3) .gallery__thumb{
        background-image: url("~assets/image/works/other/sendenkaigi/1.png");
      }
    }
  }
}

</style>
