<template>
  <div class="card-container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div class="card" :style="cardStyle">
      <div class="card-content">
        <!-- 卡片的內容放在這裡 -->
        <h3>這是一張卡片</h3>
        <p>當滑鼠移動到卡片上時，卡片會根據滑鼠的位置旋轉。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardStyle: {
        transform: 'rotateY(0deg) rotateX(0deg)'
      }
    }
  },
  methods: {
    handleMouseMove(event) {
      const card = event.currentTarget.querySelector('.card')
      const rect = card.getBoundingClientRect()
      const x = event.clientX - rect.left // 滑鼠在卡片上的 X 座標
      const y = event.clientY - rect.top // 滑鼠在卡片上的 Y 座標
      const halfWidth = rect.width / 2
      const halfHeight = rect.height / 2
      const rotateX = ((y - halfHeight) / halfHeight) * 15 // 旋轉角度，可以調整最大旋轉角度
      const rotateY = ((x - halfWidth) / halfWidth) * 15 // 旋轉角度，可以調整最大旋轉角度

      this.cardStyle = {
        transform: `rotateY(${rotateY}deg) rotateX(${-rotateX}deg)`
      }
    },
    handleMouseLeave() {
      this.cardStyle = {
        transform: 'rotateY(0deg) rotateX(0deg)'
      }
    }
  }
}
</script>

<style scoped>
.card-container {
  perspective: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 可以根據需要調整容器高度 */
}

.card {
  width: 300px; /* 卡片寬度 */
  height: 200px; /* 卡片高度 */
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out;
}

.card-content {
  padding: 20px;
  text-align: center;
}
</style>
