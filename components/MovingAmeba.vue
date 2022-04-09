<template>
  <canvas />
</template>

<script>
// 座標の計算
const Point = function (c, r, rota) {
  this.x = 0
  this.y = 0
  this.centerX = c.x
  this.centerY = c.y
  this.radian = rota * (Math.PI / 180)
  this.radius = r

  this.speed = Math.random() * 2 + 2
  this.r = Math.random() * 0.5
  this.rota = 0

  this.update = function () {
    const plus = Math.cos(this.rota * (Math.PI / 180)) * this.r

    this.radius += plus

    const cos = Math.cos(this.radian) * this.radius
    const sin = Math.sin(this.radian) * this.radius

    this.x = cos + this.centerX
    this.y = sin + this.centerY

    this.rota += this.speed

    if (this.rota > 360) { this.rota -= 360 }
  }
}

export default {
  props: {
    width: Number,
    height: Number,
    color: String
  },
  data () {
    return {
      dpr: 2,
      vertexs_num: 10,
      radius: 0,
      circles: [
        {
          point: []
        }
      ]
    }
  },
  mounted () {
    this.init()
    this.setPoints()
    requestAnimationFrame(this.tick)
  },
  methods: {
    init () {
      this.$el.width = this.width * this.dpr
      this.$el.height = this.height * this.dpr
      this.ctx = this.$el.getContext('2d')
      this.ctx.scale(this.dpr, this.dpr)
      this.$el.style.width = this.width + 'px'
      this.$el.style.height = this.height + 'px'
    },
    setPoints () {
      const rota = Math.floor(360 / this.vertexs_num)
      for (let i = 0; i < this.circles.length; i++) {
        for (let j = 0; j < this.vertexs_num; j++) {
          this.circles[i].point[j] = new Point({ x: this.width / 2, y: this.height / 2 }, this.width / 2, rota * j)
        }
      }
    },
    tick () {
      for (let i = 0; i < this.circles.length; i++) {
        for (let j = 0; j < this.vertexs_num; j++) {
          this.circles[i].point[j].update()
        }
      }
      this.draw()
      requestAnimationFrame(this.tick)
    },
    draw () {
      this.ctx.clearRect(0, 0, this.$el.width, this.$el.height)
      for (let i = 0; i < this.circles.length; i++) {
        this.drawCircle(this.color, this.circles[i].point, 0.75)
      }
    },
    drawCircle (color, point, alpha) {
      this.ctx.fillStyle = color
      this.ctx.globalAlpha = alpha

      this.ctx.beginPath()

      const xc1 = (point[0].x + point[this.vertexs_num - 1].x) / 2
      const yc1 = (point[0].y + point[this.vertexs_num - 1].y) / 2
      this.ctx.moveTo(xc1, yc1)
      for (let i = 0; i < this.vertexs_num - 1; i++) {
        const xc = (point[i].x + point[i + 1].x) / 2
        const yc = (point[i].y + point[i + 1].y) / 2
        this.ctx.quadraticCurveTo(point[i].x, point[i].y, xc, yc)
      }
      this.ctx.quadraticCurveTo(point[this.vertexs_num - 1].x, point[this.vertexs_num - 1].y, xc1, yc1)

      this.ctx.closePath()
      this.ctx.fill()
    }
  }
}
</script>

<style lang="scss" scoped>
canvas {
  pointer-events: none;
}
</style>
