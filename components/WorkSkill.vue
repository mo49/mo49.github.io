<template>
  <section class="skill" data-bg="odd">
    <h2>{{ $t('WORK_HEADLINE_SKILL') }}</h2>
    <p>{{ skill }}</p>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  skill: string,
}>()
</script>
