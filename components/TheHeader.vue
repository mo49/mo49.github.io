<template>
  <header class="header">
    <div class="header__container">
      <nuxt-link :to="('/')">
        <div class="header__logo" />
      </nuxt-link>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  position: relative;

  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 3px;

    @include grad-line;

    position: absolute;
    bottom: -3px;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    @include pc-layout {
      width: $pc_min_width;
      margin: 0 auto;
    }
  }

  &__logo {
    background-image: url("~/assets/image/logo.png");

    @include bg-image(30,30);

    display: inline-block;
    vertical-align: middle;
  }
}
</style>
