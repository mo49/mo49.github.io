<template>
  <section class="container" data-page="index">
    <h1 class="index__title">PORTFOLIO SITE</h1>
    <profile data-bg="odd"/>
    <history data-bg="even" />
    <gallery data-bg="odd" />
    <social-accounts data-bg="even" />
  </section>
</template>

<script>
import Profile from '~/components/Profile.vue'
import History from '~/components/History.vue'
import Gallery from '~/components/Gallery.vue'
import SocialAccounts from '~/components/SocialAccounts.vue'

export default {
  components: {
    Profile,
    History,
    Gallery,
    SocialAccounts
  }
}
</script>

<style lang="scss">
@import "~assets/sass/page/index";
</style>

