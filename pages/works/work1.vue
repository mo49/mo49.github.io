<template>
  <section class="container work">
    <div>
      <app-logo/>
      <h1 class="title">
        work1
      </h1>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss">
.work{
  .title{
    @include pc-layout{
      color: $font-color-main;
    }
  }
}
</style>

