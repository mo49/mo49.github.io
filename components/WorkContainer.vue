<template>
  <div class="work__container">
    <slot />
    <ImageModal ref="imageModal" />
  </div>
</template>

<script lang="ts" setup>
const imageModal = ref(null)
const openModal = (evt) => {
  imageModal.value.openModal(evt)
}
defineExpose({
  openModal
})
</script>

<style lang="scss">
.work__container {
  h2 {
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: dotted 1px $border-color;
  }

  p {
    margin-bottom: 1rem;
  }

  .en {
    color: $font-color-en;
  }

  h1 .en {
    display: block;
    font-size: 1rem;
    margin-top: 0.2rem;
  }

  p .en {
    display: block;
    font-size: 0.9rem;
    margin-top: 0.4rem;
    margin-bottom: 1.5rem;
  }

  a.link-hover {
    @include link;
  }

  div[data-bg],
  section[data-bg] {
    padding: 30px 20px;

    &:empty {
      display: none;
    }
  }

  .image__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    img {
      width: 100%;
      display: block;

      @include hover;
    }
  }

  .about {
    text-align: center;

    h2,
    p {
      text-align: left;
    }
  }

  .media,
  .award {
    ul {
      margin-left: 20px;
    }
  }

  .slideshare {
    $w: 595px;
    $h: 485px;

    @include pc-layout {
      width: $w;
      height: $h;
      margin-top: 30px;
    }

    @include sp-layout {
      width: calc($w / 1.5);
      height: calc($h / 1.5);
      margin-top: 20px;
    }
  }
}
</style>
