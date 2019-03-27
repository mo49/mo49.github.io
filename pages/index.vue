<template>
  <section class="container">
    <div>
      <h1 class="title">
        PORTFOLIO SITE
      </h1>
      <!-- <font-awesome-icon icon="coffee" /> -->
      <font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x"/>
      <font-awesome-icon :icon="['fab', 'twitter-square']" class="fa-2x"/>
      <font-awesome-icon :icon="['fab', 'instagram']" class="fa-2x"/>
      <font-awesome-icon :icon="['fab', 'github']" class="fa-2x"/>
      <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-2x"/>
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

<style>
</style>

