<template>
  <div v-if="showModal" class="modal" @click="closeModal">
    <img :src="modalSrc">
  </div>
</template>

<script lang="ts" setup>
const showModal = ref(false)
const modalSrc = ref('')
const openModal = (evt) => {
  showModal.value = true
  modalSrc.value = evt.target.src
}
const closeModal = () => {
  showModal.value = false
  modalSrc.value = ''
}
defineExpose({
  openModal
})
</script>

<style lang="scss" scoped>
.modal {
  z-index: index($z, modal);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(#000, 0.8);
  overflow: scroll;

  img {
    width: 100%;
    max-width: $wrapper_width;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
