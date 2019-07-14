<template>
  <section class="container" data-page="gists">
    <div class="gallery">
      <a v-for="id in ids" :key="id" :href="gist_link(id)" target="_blank">
        <script :src="`https://gist.github.com/mo49/${id}.js`"></script>
      </a>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      ids: [
        'd4f37f9b93b7859162d18d21553eaadd',
        'd5dccbb27a3016afb4543961282c5866',
        '8f043feeeeb710abe701314d6bf34a64',
        'afedd914135ac082e257c420dc374a6b',
        '386d21550624e25951da2a9ff4bf9064',
        '1bb5888ee47063412bf60798b04a5a32',
        '2dba23046aa0a79cacd6a587bb901111',
        '336a8c2904c304211cdaf7a1c06370eb',
        'a3ce0a4a085e58f31ff4143da17e496b',
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
    },
    gist_link(id) {
      return 'https://gist.github.com/mo49/' + id
    },
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
.container[data-page="gists"]{
  word-break: break-all;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
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
    a{
      display: block;
    }
  }
  iframe{
    touch-action: none;
    pointer-events: none;
    overflow: hidden;
    break-inside: avoid;
    border-style: inherit;
    width: 100%;
    max-width: 100%;
    border-bottom: 3px #ccc dotted;
    @include pc-layout{
      max-height: 800px;
      padding: 20px 10px 30px;
    }
    @include sp-layout{
      max-height: 500px;
      padding: 50px 0 50px;
    }
  }
}
</style>

