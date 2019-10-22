<template>
  <div class="history">
    <Ameba :width="600" :height="600" :color="'#E3170A'" />
    <div class="title">
      <h2>HISTORY</h2>
      <p>経歴</p>
    </div>
    <div class="history__content">
      <h3>EMPLOYMENT</h3>
      <ul class="history__list">
        <li class="history__item">
          <p class="history__year">2015 – 2018</p>
          <h4 class="history__name">KAYAC.INC</h4>
          <ul class="history__desc">
            <li>Full-time</li>
            <li>HTMLファイ部 | Web Front-End Engineer</li>
          </ul>
        </li>
        <li class="history__item">
          <p class="history__year">2018 –</p>
          <h4 class="history__name">SHOWROOM</h4>
          <ul class="history__desc">
            <li>Full-time</li>
            <li>xR Div. | Unity Developer, Web Front-End Engineer</li>
          </ul>
        </li>
      </ul>
      <h3>EDUCATION</h3>
      <ul class="history__list">
        <li class="history__item">
          <p class="history__year">2009 – 2013</p>
          <h4 class="history__name">KEIO UNIVERSITY</h4>
          <ul class="history__desc">
            <li>Bachelor of Arts in Human Science</li>
            <li>Development Economics Seminar</li>
          </ul>
        </li>
        <li class="history__item">
          <p class="history__year">2014 – 2015</p>
          <h4 class="history__name">DIGITAL HOLLYWOOD SCHOOL</h4>
          <ul class="history__desc">
            <li>Interactive Design Course</li>
            <li>G’s Academy Developer Course, a 3rd cohort</li>
          </ul>
        </li>
        <li class="history__item">
          <p class="history__year">2018 – 2019</p>
          <h4 class="history__name">DIGITAL HOLLYWOOD SCHOOL</h4>
          <ul class="history__desc">
            <li>3DCG/VFX Course, a scholarship student</li>
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
