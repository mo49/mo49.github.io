<template>
  <PageContainer page="work" :title="$t(`${WORK_NAME}_TITLE`)">
    <WorkContainer ref="workContainer">
      <WorkAbout :desc="$t(`${WORK_NAME}_DESC`)">
        <a class="link-hover" href="https://www.showroom-live.com/" target="_blank">https://www.showroom-live.com/</a>
      </WorkAbout>
      <WorkImage>
        <FigureImage :figcaption="$t(`${WORK_NAME}_CAP1`)" />
        <FigureImage :figcaption="$t(`${WORK_NAME}_CAP2`)" />
      </WorkImage>
      <WorkSkill skill="Nuxt.js / Composition API / PixiJS / Cypress / Sentry" />
      <WorkProductionTime :production-time="$t(`${WORK_NAME}_PRODUCTION_TIME`)" />
    </WorkContainer>
  </PageContainer>
</template>

<script lang="ts" setup>
const WORK_NAME = 'WORK_SHOWROOM'
const workContainer = ref(null)
</script>
