<template>
  <header class="header">
    <div class="header__container" />
  </header>
</template>

<script>
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
    background-image: url("~assets/image/logo.png");
  }

  h1 {
    @include bg-image(30,30);

    display: inline-block;
    vertical-align: middle;
  }
}
</style>
