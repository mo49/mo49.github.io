<template>
  <section class="about" data-bg="odd">
    <h2>{{ $t('WORK_HEADLINE_ABOUT') }}</h2>
    <pre>{{ $t(desc) }}</pre>
    <p>
      <slot />
    </p>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  desc: string,
}>()
</script>
