<template>
  <div class="profile">
    <Ameba :width="450" :height="450" :color="'#00C8FF'" />
    <div class="title">
      <h2>PROFILE</h2>
    </div>
    <div class="profile__content">
      <div class="profile__left">
        <p class="profile__thumb"></p>
      </div>
      <div class="profile__right">
        <h3 class="profile__name">{{ $t('TOP_PROFILE_NAME') }} | 1989.04.09</h3>
        <p class="profile__desc">{{ $t('TOP_PROFILE_ROLL') }}</p>
      </div>
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
    left: 0;
  }
  @include sp-layout{
    left: 20px;
  }
}
canvas{
  top: -80px;
  left: -180px;
}
.profile{
  &__content{
    display: flex;
    flex-wrap: wrap;
  }
  &__left{
    margin-right: 20px;
    @include sp-layout{
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 15px;
    }
  }
  &__right{
    @include pc-layout{
      display: flex;
      flex-flow: column;
      justify-content: center;
    }
    p{
      margin: 5px 0;
    }
  }
  &__thumb{
    @include pc-layout{
      @include image(150,150);
    }
    @include sp-layout{
      @include image(180,180);
    }
    // border-radius: 50%;
  }
  &__name{
    color: $font-color-sub;
    font-weight: bold;
  }
  &__desc{
  }
}
.profile__thumb{
  background-image: url("~assets/image/profile.png");
}
</style>
