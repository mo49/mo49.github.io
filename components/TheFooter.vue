<template>
  <footer class="footer">
    <small>&copy; Kazuki Mochizuki</small>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-top: 100px;
  position: relative;

  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 3px;

    @include grad-line(270);

    position: absolute;
    top: -3px;
  }
}

</style>
