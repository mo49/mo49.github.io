<template>
  <li :class="[isFull ? 'size-full' : '', 'item']">
    <figure>
      <slot />
      <figcaption>
        {{ figcaption }}
      </figcaption>
    </figure>
  </li>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
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
}
</style>
