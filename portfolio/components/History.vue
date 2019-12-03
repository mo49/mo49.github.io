<i18n>
{
  "ja": {
    "employment": "職歴",
    "company1": "面白法人カヤック",
    "company1-desc1": "フルタイム",
    "company1-desc2": "HTMLファイ部 | Webフロントエンドエンジニア",
    "company2": "SHOWROOM株式会社",
    "company2-desc1": "フルタイム",
    "company2-desc2": "xR事業部 | Unityディベロッパー，Webフロントエンドエンジニア",
    "education": "教育",
    "school1": "慶應義塾大学",
    "school1-desc1": "文学部人間科学専攻",
    "school1-desc2": "商学部開発経済学ゼミ",
    "school2": "デジタルハリウッド東京本校",
    "school2-desc1": "インタラクティブ・デザインコース",
    "school2-desc2": "3DCG/VFXコース，特待生"
  },
  "en": {
    "employment": "EMPLOYMENT",
    "company1": "KAYAC.INC",
    "company1-desc1": "Full-time",
    "company1-desc2": "Web Front-End Engineer",
    "company2": "SHOWROOM",
    "company2-desc1": "Full-time",
    "company2-desc2": "xR Div. | Unity Developer, Web Front-End Engineer",
    "education": "EDUCATION",
    "school1": "KEIO UNIVERSITY",
    "school1-desc1": "Bachelor of Arts in Human Science",
    "school1-desc2": "Development Economics Seminar",
    "school2": "DIGITAL HOLLYWOOD SCHOOL",
    "school2-desc1": "Interactive Design Course",
    "school2-desc2": "3DCG/VFX Course, a scholarship student"
  }
}
</i18n>

<template>
  <div class="history">
    <Ameba :width="600" :height="600" :color="'#E3170A'" />
    <div class="title">
      <h2>HISTORY</h2>
      <p v-if="$isJa">経歴</p>
    </div>
    <div class="history__content">
      <h3>{{ $t('employment') }}</h3>
      <ul class="history__list">
        <li class="history__item">
          <p class="history__year">2015 – 2018</p>
          <h4 class="history__name">{{ $t('company1') }}</h4>
          <ul class="history__desc">
            <li>{{ $t('company1-desc1') }}</li>
            <li>{{ $t('company1-desc2') }}</li>
          </ul>
        </li>
        <li class="history__item">
          <p class="history__year">2018 –</p>
          <h4 class="history__name">{{ $t('company2') }}</h4>
          <ul class="history__desc">
            <li>{{ $t('company2-desc1') }}</li>
            <li>{{ $t('company2-desc2') }}</li>
          </ul>
        </li>
      </ul>
      <h3>{{ $t('education') }}</h3>
      <ul class="history__list">
        <li class="history__item">
          <p class="history__year">2009 – 2013</p>
          <h4 class="history__name">{{ $t('school1') }}</h4>
          <ul class="history__desc">
            <li>{{ $t('school1-desc1') }}</li>
            <li>{{ $t('school1-desc2') }}</li>
          </ul>
        </li>
        <li class="history__item">
          <p class="history__year">2014 – 2015 / 2018 – 2019</p>
          <h4 class="history__name">{{ $t('school2') }}</h4>
          <ul class="history__desc">
            <li>{{ $t('school2-desc1') }} (2014 – 2015)</li>
            <li>{{ $t('school2-desc2') }} (2018 – 2019)</li>
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
