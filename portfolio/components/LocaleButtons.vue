<template>
  <div>
    <NuxtLink :to="`/en` + $route.fullPath" :class="{'is-active': !$isJa()}" exact>
      {{ $t('links.english') }}
    </NuxtLink>
    <NuxtLink :to="$route.fullPath.replace(/^\/[^\/]+/, '')" :class="{'is-active': $isJa()}" exact>
      {{ $t('links.japanese') }}
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
