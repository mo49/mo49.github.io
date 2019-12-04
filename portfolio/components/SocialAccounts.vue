<template>
  <div class="social-accounts">
    <Ameba :width="400" :height="400" :color="'#AFE84C'" />
    <div class="title">
      <h2>MEDIA</h2>
      <p>{{ $t('media.ja-title') }}</p>
    </div>
    <a href="https://github.com/mo49" target="_blank">
      <font-awesome-icon :icon="['fab', 'github']" class="fa-3x"/>
      <p>GitHub</p>
    </a>
    <a href="https://www.facebook.com/kazuki.mochizuki" target="_blank">
      <font-awesome-icon :icon="['fab', 'facebook']" class="fa-3x"/>
      <p>Facebook</p>
    </a>
    <a href="https://twitter.com/mczkzk" target="_blank">
      <font-awesome-icon :icon="['fab', 'twitter-square']" class="fa-3x"/>
      <p>Twitter</p>
    </a>
    <a href="https://www.linkedin.com/in/kazuki-mochizuki" target="_blank">
      <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-3x"/>
      <p>LinkedIn</p>
    </a>
    <a href="https://www.youtube.com/channel/UCqCO5VLG_VxhR3tQGhD_exQ" target="_blank">
      <font-awesome-icon :icon="['fab', 'youtube-square']" class="fa-3x"/>
      <p>YouTube</p>
    </a>
    <a href="https://www.instagram.com/mczkzk49/" target="_blank">
      <font-awesome-icon :icon="['fab', 'instagram']" class="fa-3x"/>
      <p>Instagram</p>
    </a>
    <a href="https://medium.com/@k.mochizuki.0409" target="_blank">
      <font-awesome-icon :icon="['fab', 'medium']" class="fa-3x"/>
      <p>Medium</p>
    </a>
    <a href="https://qiita.com/mczkzk" target="_blank">
      <font-awesome-icon :icon="['fas', 'blog']" class="fa-3x"/>
      <p>Qiita</p>
    </a>
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
  top: -100px;
  @include pc-layout{
    left: 180px;
  }
  @include sp-layout{
    left: 0px;
  }
}

.social-accounts{
  color: $font-color-main;
  a svg{
    // margin-right: 15px;
    // margin-bottom: 25px;
    margin: 0 auto;
  }
  a{
    width: 60px;
    height: 60px;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 25px;
    text-align: center;
    position: relative;
    text-decoration: none;
    color: $font-color-sub;
    &:visited{
      color: $font-color-sub;
    }
    p{
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 10px;
    }
  }
  .is-reverse svg{
    transform-origin:center; transform:rotate(180deg)
  }
}
</style>
