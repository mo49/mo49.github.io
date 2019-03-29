<template>
  <div class="wrapper">
    <common-header/>
    <nuxt/>
    <common-footer/>
  </div>
</template>

<script>
import CommonHeader from '~/components/CommonHeader'
import CommonFooter from '~/components/CommonFooter'
export default {
  components: {
    CommonHeader,
    CommonFooter,
  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  outline: none;
  line-height: 1.5;
}
html {
  font-family: $font-family;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: $font-color-desc;
}
body{
  width: 100%;
  min-height: 100vh;
  @include pc-layout{
    overflow-x: scroll;
  }
  @include pc-layout{
    font-size: $base-font-size--pc;
    line-height: $base-line-height--pc;
  }
  @include sp-layout{
    font-size: $base-font-size--sp;
    line-height: $base-line-height--sp;
  }
  p,div,ul,li,h1,h2,h3,h4,h5,h6,figure,figcaption{
    margin: 0;
    padding: 0;
  }
  h1{
    color: $font-color-main;
    @include pc-layout{
      font-size: $base-font-size--pc*1.5;
    }
    @include sp-layout{
      font-size: $base-font-size--sp*1.5;
    }
  }
  h2{
    color: $font-color-main;
    @include pc-layout{
      font-size: $base-font-size--pc*1.3;
    }
    @include sp-layout{
      font-size: $base-font-size--sp*1.3;
    }
  }
  h3{
    color: $font-color-main;
    @include pc-layout{
      font-size: $base-font-size--pc*1.1;
    }
    @include sp-layout{
      font-size: $base-font-size--sp*1.1;
    }
  }
}
.wrapper{
  margin: 0 auto;
  @include pc-layout{
    width: $pc_min_width;
  }
  @include sp-layout{
    width: 100%;
  }
}
div[data-bg="odd"]{
  background-color: $bg-color;
}
</style>

