<template>
  <section class="container">
    <div>
      <h1 class="title">
        PORTFOLIO SITE
      </h1>
      <gallery />
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
import Gallery from '~/components/Gallery.vue'

export default {
  components: {
    Gallery
  }
}
</script>

<style>
</style>

