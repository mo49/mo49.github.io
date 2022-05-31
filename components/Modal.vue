<template>
  <div class="modal" v-if="showModal" @click="closeModal">
    <img :src="modalSrc">
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      modalSrc: ''
    }
  },
  methods: {
    openModal(evt) {
      this.showModal = true
      this.modalSrc = evt.target.src
    },
    closeModal() {
      this.showModal = false
      this.modalSrc = ''
    },
  },
}
</script>

<style lang="scss">
.modal{
  z-index: index($z, modal);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(#000, .8);
  overflow: scroll;
  img{
    width: 100%;
    max-width: $wrapper_width;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
