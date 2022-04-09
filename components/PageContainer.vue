<template>
  <section class="container" :data-page="page">
    <h1>{{ title }}</h1>
    <slot />
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  page: string,
  title: string,
}>()
</script>

<style lang="scss" scoped>
section {
  @include sp-layout {
    overflow: hidden;
  }

  h1 {
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 20px;
  }
}
</style>
