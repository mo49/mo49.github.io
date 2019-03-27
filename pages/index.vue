<template>
  <section class="container">
    <div>
      <h1 class="title">PORTFOLIO SITE</h1>

      <h2>PROFILE</h2>
      <p>photo.</p>
      <p>name.</p>

      <h2>HISTORY</h2>
      <h3>CAREER</h3>
      <h3>EDUCATION</h3>

      <h2>GALLERY</h2>
      <gallery />

      <h2>SOCIAL ACCOUNTS</h2>
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

