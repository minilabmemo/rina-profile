<template>
  <div class="dialogue-box">
    <div class="typing-container">
      <span>{{ displayedText }}</span>
      <span class="cursor">|</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const texts = ['Welcome Here!', "Hi, I'm a software engineer."]
    const displayedText = ref('')
    const index = ref(0)
    const currentTextIndex = ref(0)
    const isDeleting = ref(false)

    const type = () => {
      const fullText = texts[currentTextIndex.value]
      if (isDeleting.value) {
        displayedText.value = fullText.substring(0, index.value - 1)
        index.value--
      } else {
        displayedText.value = fullText.substring(0, index.value + 1)
        index.value++
      }

      let timeout = 100
      if (!isDeleting.value && index.value === fullText.length) {
        timeout = 2000 // 等待 2 秒再開始刪除
        isDeleting.value = true
      } else if (isDeleting.value && index.value === 0) {
        isDeleting.value = false
        currentTextIndex.value = (currentTextIndex.value + 1) % texts.length
        timeout = 500 // 切換文字後稍微等待
      }

      setTimeout(type, timeout)
    }

    onMounted(() => {
      type()
    })

    return {
      displayedText
    }
  }
})
</script>

<style scoped>
.dialogue-box {
  min-width: 150px;
  position: relative;
  display: inline-block;
  padding: 8px 15px;
  background-color: rgba(var(--bs-orange-100-rgb), 0.5);

  border: 1px solid var(--bs-orange-900);
  border-radius: 10px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
}
/* 箭頭 */
.dialogue-box::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 20px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 15px solid var(--bs-orange-100);
  border-bottom: none;
}
/* 箭頭邊框 */
.dialogue-box::before {
  content: '';
  position: absolute;
  bottom: -16px;
  left: 18px;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 16px solid var(--bs-orange-900);

  border-bottom: none;
}

.typing-container {
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.15em solid orange;
}

.cursor {
  display: inline-block;
  width: 0.1em;
  background-color: black;
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  from,
  to {
    background-color: transparent;
  }
  50% {
    background-color: black;
  }
}
</style>
