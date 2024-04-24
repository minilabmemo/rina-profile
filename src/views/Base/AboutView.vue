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
        <h2>gray <code>需注意預設沒有gray字眼</code></h2>

        <span class="text-200 "> text-200 </span>
        <span class="text-500 "> text-500 </span>
        <span class="bg-500 "> bg-500 </span>
        <h2>orange</h2>
        <span class="text-orange "> orange text</span>
        <span class="text-orange-200 "> orange-200 text</span>
        <span class="text-orange-500 "> orange-500 </span>
        <h2>custom-color</h2>
        <span class="text-custom-color "> custom-color</span>
      </div>
    </div>
    <div class="w-75">
      <div class="">
        <h5>width in content-box</h5>
        <ul>
          <li>外層 a：100 width *100 height padding 5px;border:5px</li>
          <li>內層 b：100％ width *100％ height padding 10px;border:10px</li>
        </ul>
      </div>
      <div class=" ">

        <div class="box-a">a
        </div>
        <div class="box-b">b</div>
        <div class="box-a">
          <div class="box-b">a contain b</div>
        </div>
      </div>
      <div>
        結果：
        <ul>
          <li>內層 100% =100px</li>
          <li>但是內層一但有了自己的 border/padding 就會溢出</li>
          <li>內層加了 margin 也會溢出</li>
        </ul>
      </div>
      <div class="">
        <h5>width in border-box </h5>
        <ul>
          <li>外層</li>
        </ul>
      </div>
      <div class=" ">

        <div class="box-c">c
        </div>
        <div class="box-d">d</div>
        <div class="box-c">
          <div class="box-d">c contain d</div>
        </div>
        <div>
          結果：
          <ul>
            <li>外層 100px*100px 內容 80px * 80px 內層寬高設定也變為 80px*80px 只不過內容是 40px*40px</li>
            <li> <code>所以 100% 是對應實際內容寬高，並非設定好的寬高</code></li>
            <li>不會溢出，但字數還是可能溢出，要注意</li>
            <li><code> 這是因為 border-box 計算的功用，但是不包含加上 margin 如果子元素加上 margin 還是會爆出來。</code></li>
          </ul>
        </div>
      </div>
    </div>
  </div>


</template>

<style>
.box-a {
  box-sizing: content-box;
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 5px black solid;
  background-color: blue;
}

.box-b {
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 10px pink solid;

  background-color: yellow;
}

.box-c {
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 5px black solid;
  background-color: blue;
}

.box-d {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 10px pink solid;

  background-color: yellow;
}


@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
