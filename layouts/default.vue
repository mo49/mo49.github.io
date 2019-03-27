<template>
  <div>
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
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body{
  @include pc-layout{
    font-size: $base-font-size--pc;
  }
  @include sp-layout{
    font-size: $base-font-size--sp;
  }
}
</style>

