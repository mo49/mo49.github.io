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
        'a24aec12cbb2f75fca805f4f92323458',
        'f103a3e8ede29f9c921e7f1d51924d37',
        '74175fe7aa907e1df68c8c216ed61cc0',
        '8945bd8787835c788f1270bd9ac55c46',
        '5c576d13c787b50490680f78a04ad968',
        '3ca1156c7d0c3bd8d6321aef4a936038',
        '2220e5fa64b976c9c967f0dc2b62170a',
        'b95dce2a38381034fd178e0613167f19',
        '2220e5fa64b976c9c967f0dc2b62170a',
        'b95dce2a38381034fd178e0613167f19',
        'a24aec12cbb2f75fca805f4f92323458',
        'f103a3e8ede29f9c921e7f1d51924d37',
        '5c576d13c787b50490680f78a04ad968',
        '3ca1156c7d0c3bd8d6321aef4a936038',
        '74175fe7aa907e1df68c8c216ed61cc0',
        '8945bd8787835c788f1270bd9ac55c46',
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
    @media (max-width: 1500px) {
      column-count: 4;
    }
    @media (max-width: 1200px) {
      column-count: 3;
    }
    @media (max-width: 960px) {
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

