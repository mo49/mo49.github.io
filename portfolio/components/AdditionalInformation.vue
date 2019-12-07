<template>
  <div class="additional-information">
    <Ameba :width="500" :height="500" :color="'#9F73FF'" />
    <div class="title">
      <h2>OTHERS</h2>
      <p>{{ $t('others.ja-title') }}</p>
    </div>
    <div class="additional-information__content">
      <ul class="additional-information__list">
        <li class="additional-information__item">
          <p>
            <nuxt-link :to="$i18n.path('skillset')">{{ $t('others.skillset') }}</nuxt-link>
          </p>
        </li>
        <li class="additional-information__item">
          <p>
            <a class="link-hover" href="https://www.youracclaim.com/badges/2d19f647-3f90-47ba-84d9-3ac3a941ec84/" target="_blank">Unity Certified Developer</a>
          </p>
        </li>
        <li class="additional-information__item">
          <p>{{ $t('others.language') }}</p>
        </li>
        <li class="additional-information__item accordion-menu">
          <input type="checkbox" checked>
          <p class="accordion-menu__title">{{ $t('others.travel') }}</p>
          <i></i>
          <ul v-if="$isJa" class="accordion-menu__content">
            <li>{{ $t('others.country.china') }}</li>
            <li>{{ $t('others.country.korea') }}</li>
            <li>{{ $t('others.country.philippine') }}</li>
            <li>{{ $t('others.country.thailand') }}</li>
            <li>{{ $t('others.country.india') }}</li>
            <li>{{ $t('others.country.france') }}</li>
            <li>{{ $t('others.country.uk') }}</li>
            <li>{{ $t('others.country.italy') }}</li>
            <li>{{ $t('others.country.spain') }}</li>
            <li>{{ $t('others.country.netherlands') }}</li>
            <li>{{ $t('others.country.egypt') }}</li>
            <li>{{ $t('others.country.jordan') }}</li>
            <li>{{ $t('others.country.israel') }}</li>
            <li>{{ $t('others.country.usa') }}</li>
            <li>{{ $t('others.country.canada') }}</li>
            <li>{{ $t('others.country.mexico') }}</li>
            <li>{{ $t('others.country.peru') }}</li>
            <li>{{ $t('others.country.chile') }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Ameba from '~/components/Ameba.vue'
export default {
  components: {
    Ameba,
  }
}
</script>

<style lang="scss" scoped>
*{
  position: relative;
}
.title{
  @include pc-layout{
    left: 0px;
  }
  @include sp-layout{
    left: 20px;
  }
}
canvas{
  top: -80px;
  left: -200px;
}

.additional-information{
  margin-bottom: 200px;
  a{
    // @include link();
    color: $font-color-desc;
    &:visited{
      color: $font-color-desc;
    }
  }
  &__item{
    list-style: disc;
    margin-bottom: 5px;
    margin-left: 20px;
    ul{
      margin-left: 10px;
    }
    li{
      list-style-type: circle;
    }
  }
  .accordion-menu{
    @include accordion-menu('.accordion-menu__content', 2px);
    &__title{
      display: inline-block;
    }
    i{
      margin-top: 0;
      left: 12px;
      top: -11px;
      position: relative;
      display: inline-block;
    }
  }
}
</style>
