<template>
  <section class="container">
    <div>
      <h1 class="title">
        PORTFOLIO SITE
      </h1>
      <gallery />
      <social-accounts />
    </div>
  </section>
</template>

<script>
import Gallery from '~/components/Gallery.vue'
import SocialAccounts from '~/components/SocialAccounts.vue'

export default {
  components: {
    Gallery,
    SocialAccounts
  }
}
</script>

<style>
</style>

