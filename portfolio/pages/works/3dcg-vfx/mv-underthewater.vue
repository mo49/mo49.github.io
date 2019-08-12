<template>
  <section class="container work" data-page="work">
    <h1 class="work__title">
      Music Video - Under The Water<br>
      <span class="en">
      </span>
    </h1>
    <div class="work-about" data-bg="odd">
      <h2>About</h2>
      <p>
        デジタルハリウッド本科3DCG/VFXコースの卒業制作。<br>
        <span class="en">
          Produced a graduation work of Digital Hollywood 3DCG/VFX course.
        </span>
      </p>
      <p>
        シーンに登場するCGモデルはすべてMayaで作成した。群体アルゴリズムに基づき泳ぐ魚群、トレイルの表現はGPGPUのコンピュートシェーダで実現。動画後半のワイヤーフレーム表現もシェーダーで実装して、Unity内のポストプロセスで発光させている。カメラワークはTimelineとCinemachineで作成し、シーンはほぼ一発撮りしている。AEでの調整は簡単なノイズ表現のみ。<br>
        <span class="en">
          All CG models in this video were created with Maya. GPGPU, compute shader is used to represent the fish school that swim based on the swarm algorithm and trail particle. The wire frame in the latter half of the video is also implemented with a shader, and it is emitted by the post process in Unity. And the camera work is created on Timeline and Cinemachine, and the scene is shot almost once. Finally what I adjusted on After Effects is simple noise expression only.
        </span>
      </p>
    </div>
    <div class="work-image" data-bg="even">
      <h2>Image / Movie</h2>
      <ul class="work-image__list">
        <li class="work-image__item size-full">
          <div class="youtube">
            <iframe src="https://www.youtube.com/embed/CXIC6aUPfmY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </li>
        <li class="work-image__item size-half">
          <img src="~assets/image/works/3dcg-vfx/mv-underthewater/1.png" @click="openModal">
        </li>
        <li class="work-image__item size-half">
          <img src="~assets/image/works/3dcg-vfx/mv-underthewater/2.png" @click="openModal">
        </li>
        <li class="work-image__item size-half">
          <img src="~assets/image/works/3dcg-vfx/mv-underthewater/3.png" @click="openModal">
        </li>
        <li class="work-image__item size-half">
          <img src="~assets/image/works/3dcg-vfx/mv-underthewater/4.png" @click="openModal">
        </li>
        <li class="work-image__item size-full">
          <img src="~assets/image/works/3dcg-vfx/mv-underthewater/5.png" @click="openModal">
        </li>
      </ul>
    </div>
    <div class="work-skill" data-bg="odd">
      <h2>Skill</h2>
      <p>Maya / Unity / ShaderLab / GPGPU / After Effects</p>
    </div>
    <div class="work-time" data-bg="even">
      <h2>Production Time</h2>
      <p>from July to August, 2019. (about 2months)</p>
    </div>
    <div class="work-media" data-bg="odd">
    </div>
    <modal ref="modal" />
  </section>
</template>

<script>
import Modal from "~/components/Modal"

export default {
  components: {
    Modal,
  },
  methods: {
    openModal(evt) {
      this.$refs.modal.openModal(evt);
    },
  },
}
</script>

<style lang="scss">
@import "~assets/sass/page/works";
</style>

