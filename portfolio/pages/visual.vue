<template>
  <section class="container" data-page="visual">
    <div class="gallery">
      <script
        v-for="id in ids" :key="id"
        :src="`https://gist.github.com/mo49/${id}.js`"></script>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      ids: [
        '2dba23046aa0a79cacd6a587bb901111',
        'a24aec12cbb2f75fca805f4f92323458',
        'f103a3e8ede29f9c921e7f1d51924d37',
        '276d4ab23c8ce1e01e9f7353371710fc',
      ]
    }
  },
  methods: {
    runScript () {
      const scripts = this.$el.querySelectorAll('script')
      scripts.forEach(script => {
        const parentNode = script.parentNode
        let alternativeNode
        if (script.src.indexOf('https://gist.github.com/') !== -1) {
          alternativeNode = document.createElement('iframe')
          alternativeNode.src = URL.createObjectURL(new Blob(['<!DOCTYPE html><title></title>' + script.outerHTML], {type: 'text/html'}))
          alternativeNode.onload = () => {
            alternativeNode.height = alternativeNode.contentDocument.body.scrollHeight + 50
          }
        } else {
          alternativeNode = document.createElement('script')
          alternativeNode.src = script.src
        }
        parentNode.replaceChild(alternativeNode, script)
      })
    }
  },
  mounted () {
    this.runScript()
  },
  updated () {
    this.runScript()
  }
}
</script>

<style lang="scss">
.container[data-page="visual"]{
  width: 100%;
  box-sizing: border-box;
  .gallery{
    width: 100%;
    column-gap: 0;
    column-count: 5;
    @media (max-width: 1800px) {
      column-count: 4;
    }
    @media (max-width: 1440px) {
      column-count: 3;
    }
    @media (max-width: 1080px) {
      column-count: 2;
    }
    @include sp-layout{
      column-count: 1;
    }
  }
  iframe{
    break-inside: avoid;
    border-style: inherit;
    width: 100%;
    border-bottom: 3px #ccc dotted;
    margin: 20px 10px 20px;
  }
}
</style>

