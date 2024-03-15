<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="row">
      <h2>button</h2>
      <div class="col ">
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>

        <button type="button" class="btn btn-link">Link</button>

      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2>Text</h2>
        <span class="text-primary"> primary text</span>
        <span class="text-secondary "> secondary text</span>
        <span class="text-danger "> secondary text</span>
        <h2>gray</h2>
        <span class="text-gray "> gray text</span>
        <span class="text-gray-gray "> gray text</span>
        <span class="text-gray-200 "> gray-200 text</span>
        <h2>orange</h2>
        <span class="text-orange "> orange text</span>
        <span class="text-orange-200 "> orange-200 text</span>
      </div>
    </div>
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
