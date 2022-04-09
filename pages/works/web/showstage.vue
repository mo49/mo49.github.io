<template>
  <PageContainer page="index" :title="$t(`${WORK_NAME}_TITLE`)">
    <WorkContainer ref="workContainer">
      <WorkAbout :desc="$t(`${WORK_NAME}_DESC`)" />
      <WorkImage>
        <FigureImage :figcaption="$t(`${WORK_NAME}_CAP1`)">
          <img src="~/assets/image/works/web/showstage/1.png" @click="openModal">
        </FigureImage>
        <FigureImage :figcaption="$t(`${WORK_NAME}_CAP2`)">
          <img src="~/assets/image/works/web/showstage/2.png" @click="openModal">
        </FigureImage>
        <FigureImage :figcaption="$t(`${WORK_NAME}_CAP3`)">
          <img src="~/assets/image/works/web/showstage/3.png" @click="openModal">
        </FigureImage>
        <FigureImage :figcaption="$t(`${WORK_NAME}_CAP4`)">
          <img src="~/assets/image/works/web/showstage/4.png" @click="openModal">
        </FigureImage>
        <FigureImage :figcaption="$t(`${WORK_NAME}_CAP5`)">
          <img src="~/assets/image/works/web/showstage/5.png" @click="openModal">
        </FigureImage>
        <FigureImage :figcaption="$t(`${WORK_NAME}_CAP6`)">
          <img src="~/assets/image/works/web/showstage/6.png" @click="openModal">
        </FigureImage>
      </WorkImage>
      <WorkSkill skill="Nuxt.js" />
      <WorkProductionTime :production-time="$t(`${WORK_NAME}_PRODUCTION_TIME`)" />
      <WorkMedia>
        <li><a class="link-hover" href="https://prtimes.jp/main/html/rd/p/000000315.000026205.html" target="_blank">SHOWROOM、VR空間で生ライブが楽しめるサービス「SHOWSTAGE β版」パフォーマーは有料配信が可能に</a></li>
      </WorkMedia>
    </WorkContainer>
  </PageContainer>
</template>

<script lang="ts" setup>
const WORK_NAME = 'WORK_SHOWSTAGE'
const workContainer = ref(null)
const openModal = (evt) => {
  workContainer.value.openModal(evt)
}
</script>
