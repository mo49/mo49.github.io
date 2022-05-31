<template>
  <div>
    <NuxtLink :to="$route.fullPath.replace(/^\/[^\/]+/, '')" :class="{'is-active': !$isJa()}" exact>
      {{ $t('LOCALE_EN') }}
    </NuxtLink>
    <NuxtLink :to="`/ja` + $route.fullPath" :class="{'is-active': $isJa()}" exact>
      {{ $t('LOCALE_JA') }}
    </NuxtLink>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
a{
  color: $font-color-sub;
  text-decoration: none;
  // border: 1px solid $border-color;
  // border-radius: 50%;
  padding: 5px 10px;
  pointer-events: auto;
  &.is-active{
    background-color: $link-color;
    color: #fff;
    pointer-events: none;
  }
}
</style>
