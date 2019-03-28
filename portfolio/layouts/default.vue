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
html {
  font-family: $font-family;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  outline: none;
}
body{
  width: 100%;
  min-height: 100vh;
  @include pc-layout{
    overflow-x: scroll;
  }
  @include pc-layout{
    font-size: $base-font-size--pc;
  }
  @include sp-layout{
    font-size: $base-font-size--sp;
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

