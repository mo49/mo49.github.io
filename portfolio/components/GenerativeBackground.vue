<template>
  <div id="generative-canvas"></div>
</template>

<script>
export default {
  mounted() {
    const p5 = require('p5')
    const isSP = this.$ua.isFromSmartphone();

    var sketch = function(p) {

      var pointCount = isSP ? 500 : 1000 ;
      var lissajousPoints = [];
      var freqX = 4;
      var freqY = 7;
      var phi = 15;

      var modFreqX = 3;
      var modFreqY = 2;

      var lineWeight = 0.1;
      var lineColor;
      var lineAlpha = 0.5;

      var connectionRadius = 100;
      var connectionRamp = 6;

      const offset = Math.random()*0.8;
      let f = 0;

      p.setup = function() {
        var canvas = p.createCanvas(window.innerWidth,window.innerHeight);
        canvas.parent("generative-canvas");
        p.colorMode(p.RGB, 255, 255, 255, 255);
        p.noFill();

        lineColor = p.color(0, 0, 0);

        freqX += offset;
        freqY += offset;

        calculateLissajousPoints();
        drawLissajous();
      };

      p.draw = function() {
        // p.clear();
        // freqX = Math.sin(f*0.3)*4 + 5;
        // freqY = Math.cos(f*0.4)*2 + 3;
        // f += 0.001;

        // calculateLissajousPoints();
        // drawLissajous();
      }

      function calculateLissajousPoints() {
        for (var i = 0; i <= pointCount; i++) {
          var angle = p.map(i, 0, pointCount, 0, p.TAU);

          var x = p.sin(angle * freqX + p.radians(phi)) * p.cos(angle * modFreqX);
          var y = p.sin(angle * freqY) * p.cos(angle * modFreqY);
          x *= p.width / 2 - 30;
          y *= p.height / 2 - 30;

          lissajousPoints[i] = p.createVector(x,y);
        }
      }

      p.windowResized = function() {
        p.resizeCanvas(window.innerWidth,window.innerHeight);
        calculateLissajousPoints();
        drawLissajous();
      }

      function drawLissajous() {
        p.strokeWeight(lineWeight);
        p.push();
        p.translate(p.width / 2, p.height / 2);

        for (var i1 = 0; i1 < pointCount; i1++) {
          for (var i2 = 0; i2 < i1; i2++) {
            var d = lissajousPoints[i1].dist(lissajousPoints[i2]);
            var a = p.pow(1 / (d / connectionRadius + 1), 6);
            if (d <= connectionRadius) {
              p.stroke(`rgba(0%,0%,0%,${a * lineAlpha})`);
              p.line(
                lissajousPoints[i1].x,
                lissajousPoints[i1].y,
                lissajousPoints[i2].x,
                lissajousPoints[i2].y
              );
            }
          }
        }
        p.pop();
      }

    };

    const myp5 = new p5(sketch);

  }
}
</script>

<style lang="scss" scoped>
#generative-canvas{
  pointer-events: none;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  z-index: -1;
  canvas{
  }
}
</style>
