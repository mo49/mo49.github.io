<template>
  <div class="profile">
    <h2>PROFILE</h2>
    <div class="profile__content">
      <div class="profile__left">
        <p class="profile__thumb"></p>
      </div>
      <div class="profile__right">
        <h3 class="profile__name">Kazuki Mochizuki | 1989.04.09</h3>
        <p class="profile__desc">Developer / Virtual Being / Backpacker / Anime Otaku</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "~assets/sass/module/profile";
.profile__thumb{
  background-image: url("~assets/image/profile.jpg");
}
</style>

