<template>
  <PageContainer page="index" title="Portfolio Site">
    <TopProfile />
    <TopGallery />
  </PageContainer>
</template>

<style lang="scss">
section[data-page="index"] {
  @include sp-layout {
    overflow: hidden;
  }

  h1 {
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 20px;
    opacity: 0;
  }

  .title {
    text-align: center;
    display: block;
    position: absolute;
    color: #fff;

    h2 {
      color: #fff;
      font-size: 2.5rem;
    }

    @include pc-layout {
      top: 0;
    }

    @include sp-layout {
      top: 0;
    }
  }

  h3 {
    margin-bottom: 15px;
  }

  & > div {
    padding: 30px 20px;
    margin-bottom: 20px;
    position: relative;

    @include pc-layout {
      margin: 50px 0 100px;
      padding-top: 100px;
    }

    @include sp-layout {
      margin: 50px 0 100px;
      padding-top: 100px;
    }
  }

  canvas {
    position: absolute;
  }
}
</style>
