<template>
  <header class="header">
    <div class="header__container">
      <nuxt-link :to="$i18n.path('')">
        <h1 class="header__logo">logo</h1>
      </nuxt-link>
      <LocaleButtons class="locale-buttons" />
    </div>
  </header>
</template>

<script>
import LocaleButtons from '~/components/LocaleButtons'
export default {
  components: {
    LocaleButtons,
  }
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  position: relative;
  &:after{
    display: block;
    content: '';
    width: 100%;
    height: 3px;
    @include grad-line();
    position: absolute;
    bottom: -3px;
  }
  &__container{
    @include pc-layout{
      width: $pc_min_width;
      margin: 0 auto;
    }
  }
  h1{
    @include image(30,30);
    display: inline-block;
    vertical-align: middle;
  }
}

.header__container{
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.header__logo{
  background-image: url("~assets/image/logo.png");
}

</style>
