<template>
  <div class="gallery">
    <Ameba :width="900" :height="900" :color="'#FFDE00'" />
    <div class="title">
      <h2>GALLERY</h2>
    </div>

    <h3>Web</h3>
    <ul class="gallery__list" data-genre="web">
      <!-- SHOWROOMと差し替え -->
      <li class="gallery__item" data-label="business" data-is-lock="false">
        <nuxt-link :to="$i18n.path('works/web/onepiece')">
          <figure>
            <div class="gallery__thumb" :style=" {'background-image': 'url('+img_onepiece+')' } "></div>
            <figcaption class="gallery__caption">
              <p>{{ $t('gallery.onepiece') }}</p>
              <p>D3.js / Canvas</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="business" data-is-lock="false">
        <nuxt-link :to="$i18n.path('works/web/kamakura-fireworks')">
          <figure>
            <div class="gallery__thumb" :style=" {'background-image': 'url('+img_kamakura_fireworks+')' } "></div>
            <figcaption class="gallery__caption">
              <p>{{ $t('WORK_KAMAKURA_TITLE') }}</p>
              <p>Canvas / JavaScript</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="business" data-is-lock="false">
        <nuxt-link :to="$i18n.path('works/web/hirameki')">
          <figure>
            <div class="gallery__thumb" :style=" {'background-image': 'url('+img_hirameki+')' } "></div>
            <figcaption class="gallery__caption">
              <p>{{ $t('gallery.hirameki') }}</p>
              <p>Bodymovin / Electron</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link :to="$i18n.path('works/web/mental-energy')">
          <figure>
            <div class="gallery__thumb" :style=" {'background-image': 'url('+img_mental_energy+')' } "></div>
            <figcaption class="gallery__caption">
              <p>{{ $t('gallery.mental-energy') }}</p>
              <p>PHP / MySQL / Canvas / CreateJS</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link :to="$i18n.path('works/web/webgl-world-heritage')">
          <figure>
            <div class="gallery__thumb" :style=" {'background-image': 'url('+img_webgl_world_heritage+')' } "></div>
            <figcaption class="gallery__caption">
              <p>{{ $t('gallery.world-heritage') }}</p>
              <p>Three.js</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
    </ul>

    <h3>CG / VR</h3>
    <ul class="gallery__list" data-genre="3dcg-vfx">
      <li class="gallery__item" data-label="business" data-is-lock="false">
        <nuxt-link :to="$i18n.path('works/unity-ue/srv-live2d')">
          <figure>
            <div class="gallery__thumb" :style=" {'background-image': 'url('+img_readyyy+')' } "></div>
            <figcaption class="gallery__caption">
              <p>{{ $t('gallery.readyyy') }}</p>
              <p>Unity / Live2D</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link :to="$i18n.path('works/3dcg-vfx/showroom-office')">
          <figure>
            <div class="gallery__thumb" :style=" {'background-image': 'url('+img_showroom_office+')' } "></div>
            <figcaption class="gallery__caption">
              <p>{{ $t('gallery.office') }}</p>
              <p>Maya</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link :to="$i18n.path('works/3dcg-vfx/mv-underthewater')">
          <figure>
            <div class="gallery__thumb" :style=" {'background-image': 'url('+img_mv_underthewater+')' } "></div>
            <figcaption class="gallery__caption">
              <p>{{ $t('gallery.mv') }}</p>
              <p>Maya / Unity / ShaderLab / GPGPU / After Effects</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link :to="$i18n.path('works/vr/tele-magic')">
          <figure>
            <div class="gallery__thumb" :style=" {'background-image': 'url('+img_tele_magic+')' } "></div>
            <figcaption class="gallery__caption">
              <p>{{ $t('gallery.tele-magic') }}</p>
              <p>Unity / FOVE / Theta V</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link :to="$i18n.path('works/vr/gracity')">
          <figure>
            <div class="gallery__thumb" :style=" {'background-image': 'url('+img_gracity+')' } "></div>
            <figcaption class="gallery__caption">
              <p>{{ $t('gallery.gracity') }}</p>
              <p>Unity / Vive / PUN / VRTK</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
    </ul>

    <h3>Other</h3>
    <ul class="gallery__list" data-genre="other">
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link :to="$i18n.path('works/other/tabippo2015')">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>{{ $t('gallery.tabippo') }}</p>
              <p>AfterEffects / CINEMA 4D</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link :to="$i18n.path('works/other/creators-audition')">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>{{ $t('gallery.poster') }}</p>
              <p>Illustrator / Photoshop</p>
            </figcaption>
            <font-awesome-icon :icon="['fas', 'lock']" class="fa-2x"/>
          </figure>
        </nuxt-link>
      </li>
      <li class="gallery__item" data-label="private" data-is-lock="false">
        <nuxt-link :to="$i18n.path('works/other/sendenkaigi')">
          <figure>
            <div class="gallery__thumb"></div>
            <figcaption class="gallery__caption">
              <p>{{ $t('gallery.copywriting') }}</p>
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
      img_onepiece: require('@/assets/image/works/web/onepiece/1.png'),
      img_kamakura_fireworks: require('@/assets/image/works/web/kamakura-fireworks/1.png'),
      img_hirameki: require('@/assets/image/works/web/hirameki/3.jpg'),
      img_showstage: require('@/assets/image/works/web/showstage/1.png'),
      img_mental_energy: require('@/assets/image/works/web/mental-energy/2.png'),
      img_webgl_world_heritage: require('@/assets/image/works/web/webgl-world-heritage/1.png'),
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
