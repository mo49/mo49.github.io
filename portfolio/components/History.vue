<template>
  <div class="history">
    <Ameba :width="600" :height="600" :color="'#E3170A'" />
    <div class="title">
      <h2>HISTORY</h2>
      <p>{{ $t('history.ja-title') }}</p>
    </div>
    <div class="history__content">
      <h3>{{ $t('history.employment') }}</h3>
      <ul class="history__list">
        <li class="history__item">
          <p class="history__year">2015 – 2018</p>
          <h4 class="history__name">{{ $t('history.company1') }}</h4>
          <ul class="history__desc">
            <li>{{ $t('history.company1-desc2') }}</li>
            <li>{{ $t('history.company1-desc1') }}</li>
          </ul>
        </li>
        <li class="history__item">
          <p class="history__year">2018 –</p>
          <h4 class="history__name">{{ $t('history.company2') }}</h4>
          <ul class="history__desc">
            <li>{{ $t('history.company2-desc2') }}</li>
            <li>{{ $t('history.company2-desc1') }}</li>
          </ul>
        </li>
      </ul>
      <h3>{{ $t('history.education') }}</h3>
      <ul class="history__list">
        <li class="history__item">
          <p class="history__year">2009 – 2013</p>
          <h4 class="history__name">{{ $t('history.school1') }}</h4>
          <ul class="history__desc">
            <li>{{ $t('history.school1-desc1') }}</li>
            <li>{{ $t('history.school1-desc2') }}</li>
          </ul>
        </li>
        <li class="history__item">
          <p class="history__year">2014 – 2015 / 2018 – 2019</p>
          <h4 class="history__name">{{ $t('history.school2') }}</h4>
          <ul class="history__desc">
            <li>{{ $t('history.school2-desc1') }} (2014 – 2015)</li>
            <li>{{ $t('history.school2-desc2') }} (2018 – 2019)</li>
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
  left: 50%;
  transform: translateX(-50%);
}
canvas{
  top: -80px;
  @include pc-layout{
    left: 110px;
  }
  @include sp-layout{
    left: -120px;
  }
}
.history{
  $padding-left: 5px;

  &__content{
    // padding-left: $padding-left;
  }

  h3{
  }

  &__list{
    padding-left: $padding-left;
    margin-bottom: 30px;
  }
  &__item{
    list-style: none;
  }
  &__year{
    font-weight: bold;
    color: $font-color-sub;
    margin-top: 20px;
  }
  &__name{
    font-weight: bold;
    color: $font-color-sub;
    padding-left: $padding-left;
  }
  &__desc{
    padding-left: 30px;
    li{
      list-style-type: disc;
    }
  }
}

</style>
