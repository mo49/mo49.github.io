<template>
  <div class="history">
    <Ameba :width="600" :height="600" :color="'#E3170A'" />
    <div class="title">
      <h2>HISTORY</h2>
    </div>
    <div class="history__content">
      <h3>{{ $t('TOP_HISTORY_COMPANY') }}</h3>
      <ul class="history__list">
        <li class="history__item">
          <p class="history__year">2018 -</p>
          <h4 class="history__name">{{ $t('TOP_HISTORY_COMPANY_2') }}</h4>
          <ul class="history__desc">
            <li>{{ $t('TOP_HISTORY_COMPANY_2_DESC_1') }}</li>
            <li>{{ $t('TOP_HISTORY_COMPANY_2_DESC_2') }}</li>
          </ul>
        </li>
        <li class="history__item">
          <p class="history__year">2015 - 2018</p>
          <h4 class="history__name">{{ $t('TOP_HISTORY_COMPANY_1') }}</h4>
          <ul class="history__desc">
            <li>{{ $t('TOP_HISTORY_COMPANY_1_DESC_1') }}</li>
            <li>{{ $t('TOP_HISTORY_COMPANY_1_DESC_2') }}</li>
          </ul>
        </li>
      </ul>
      <h3>{{ $t('TOP_HISTORY_SCHOOL') }}</h3>
      <ul class="history__list">
        <li class="history__item">
          <p class="history__year">2014 - 2015 / 2018 - 2019</p>
          <h4 class="history__name">{{ $t('TOP_HISTORY_SCHOOL_2') }}</h4>
          <ul class="history__desc">
            <li>{{ $t('TOP_HISTORY_SCHOOL_2_DESC_1') }} (2014 - 2015)</li>
            <li>{{ $t('TOP_HISTORY_SCHOOL_2_DESC_2') }} (2018 - 2019)</li>
          </ul>
        </li>
        <li class="history__item">
          <p class="history__year">2009 - 2013</p>
          <h4 class="history__name">{{ $t('TOP_HISTORY_SCHOOL_1') }}</h4>
          <ul class="history__desc">
            <li>{{ $t('TOP_HISTORY_SCHOOL_1_DESC_1') }}</li>
            <li>{{ $t('TOP_HISTORY_SCHOOL_1_DESC_2') }}</li>
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
