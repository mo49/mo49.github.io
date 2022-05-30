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
            <a class="link-hover" href="https://www.youracclaim.com/badges/2d19f647-3f90-47ba-84d9-3ac3a941ec84/" target="_blank">Unity Certified Developer</a>
            / {{ $t('others.license') }}
          </p>
        </li>
        <li class="additional-information__item">
          <p>{{ $t('others.language') }}</p>
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
