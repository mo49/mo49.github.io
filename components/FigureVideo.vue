<template>
  <li :class="[isFull ? 'size-full' : '', 'item']">
    <figure>
      <div class="youtube">
        <iframe :src="src" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </div>
      <figcaption>
        {{ figcaption }}
      </figcaption>
    </figure>
  </li>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  src: string,
  figcaption?: string,
  isFull?: boolean,
}>(), {
  isFull: false
})
</script>

<style lang="scss" scoped>
.item {
  list-style: none;

  @include pc-layout {
    width: 49%;
    padding: 10px 0 25px;
  }

  @include sp-layout {
    width: 100%;
    padding: 5px 0 15px;
  }

  &.size-full {
    @include pc-layout {
      width: 100%;
    }
  }

  figcaption {
    display: block;
    text-align: center;
    font-size: 14px;
    font-style: italic;
    padding: 5px 0 10px;

    &:empty {
      display: none;
    }
  }

  .youtube {
    @include flex-image;

    position: relative;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
