<template>
  <section class="time" data-bg="even">
    <h2>{{ $t('WORK_HEADLINE_PRODUCTION_TIME') }}</h2>
    <p>{{ $t(productionTime) }}</p>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  productionTime: string,
}>()
</script>
