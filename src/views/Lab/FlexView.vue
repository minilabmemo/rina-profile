<template>
  <div class="app">
    <header>
      <!-- Your header content here -->
      <div class="header-box">
        <h1>Header Content</h1>
        <h5>Header Content</h5>
        <h5>Header Content</h5>
        <h5>Header Content</h5>
      </div>

    </header>
    <main>
      <!-- Your main content here -->
      <p class="h-75">Main Content</p>
      <p class="h-75">Main Content</p>
      <p>Main Content</p>
    </main>
    <footer>
      <!-- Your footer content here -->
      <p>Footer Content</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* Ensure full viewport height */
}

main {
  flex: 1;
  /* Main content fills remaining space 设置一个元素的弹性增长因子（flex grow factor）为 1。这个属性告诉浏览器，该元素应该尽可能地填充父容器中剩余的空间 */
  /* flex: 1 0 auto; 与 flex: 1; 的效果基本相同 */
  /* flex-grow: 这个值定义了项目的放大比例，即当父容器有剩余空间时，项目如何分配。如果所有的子元素都是 flex-grow: 1;，它们将等分剩余空间。在 flex: 1 0 auto; 中，flex-grow 的值为 1，表示这个项目会尽可能地填满剩余空间。 */
  overflow-y: auto;
  /* Add scrollbar if content exceeds viewport */
}

header,
footer {
  background-color: #2d2727;
  color: #2687a4;
  padding: 20px;
}

header {
  /* Sticky header with dynamic height */
  position: sticky;
  top: 0;
}

footer {
  /* Sticky footer */
  margin-top: auto;
  /* Push footer to the bottom */
}

.header-box {
  display: flex;
  flex-wrap: wrap;
}
</style>
