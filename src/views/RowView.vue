<template>
  <div class="container  ">
    <h1>bootstrap 格線系統練習</h1>
    <code>先在最外層包container, 下一層不一定要row</code>

    <hr>
    <h3>[練習] 內容物，縮小視窗，是否會撐開</h3>
    <h5>單純塞多個簡單子元素？</h5>
    <code>看起來不會，但沒空間會換行</code>
    <div class="row bg-success ">
      <div class="col-1">col-1 <i class="bi bi-alarm"></i><i class="bi bi-airplane"></i><i class="bi bi-archive"></i>
      </div>
      <div class="col-1">col-1 <i class="bi bi-alarm"></i><i class="bi bi-airplane"></i><i class="bi bi-archive"></i>
      </div>
      <div class="col-1">col-1 <i class="bi bi-alarm"></i><i class="bi bi-airplane"></i><i class="bi bi-archive"></i>
      </div>
      <div class="col-1">col-1 <i class="bi bi-alarm"></i><i class="bi bi-airplane"></i><i class="bi bi-archive"></i>
      </div>
      <div class="col-1">col-1 <i class="bi bi-alarm"></i><i class="bi bi-airplane"></i><i class="bi bi-archive"></i>
      </div>
      <div class="col-1">col-1 <i class="bi bi-alarm"></i><i class="bi bi-airplane"></i><i class="bi bi-archive"></i>
      </div>
      <div class="col-1">col-1 <i class="bi bi-alarm"></i><i class="bi bi-airplane"></i><i class="bi bi-archive"></i>
      </div>
      <div class="col-1">col-1 <i class="bi bi-alarm"></i><i class="bi bi-airplane"></i><i class="bi bi-archive"></i>
      </div>
      <div class="col-1">col-1 <i class="bi bi-alarm"></i><i class="bi bi-airplane"></i><i class="bi bi-archive"></i>
      </div>
      <div class="col-1">col-1 <i class="bi bi-alarm"></i><i class="bi bi-airplane"></i><i class="bi bi-archive"></i>
      </div>
      <div class="col-1">col-1 <i class="bi bi-alarm"></i><i class="bi bi-airplane"></i><i class="bi bi-archive"></i>
      </div>
      <div class="col-1">col-1 <i class="bi bi-alarm"></i><i class="bi bi-airplane"></i><i class="bi bi-archive"></i>
      </div>
    </div>
    <hr>
    <h5>單純塞 div 簡單子元素？</h5>
    <code>看起來不會，但沒空間會換行</code>
    <div class="row  ">
      <div class="col-1 bg-success ">
        <div class=""> <i class="bi bi-alarm"></i> <span>air</span><i class="bi bi-airplane"></i><i
            class="bi bi-archive"></i> </div>
      </div>
    </div>

    <hr>
    <h5 class="text-danger ">col 下一層塞 div d-flex justify-content-center 元素？</h5>
    <code>縮到最小看，竟然爆版了，還跑出視窗外面0.0!</code>
    <div class="row  ">
      <div class="col-1 bg-danger">
        <div class="d-flex justify-content-center align-items-center ">
          <i class="bi bi-alarm"></i> <span>air</span><i class="bi bi-airplane"></i><i class="bi bi-archive"></i>
        </div>
      </div>
    </div>
    <hr>
    <h5 class="text-success ">（修正 1）把 d-flex justify-content-center 放到 col 上？</h5>
    <code>這樣就可以置中了</code>
    <code>col必須要有d-flex,才有置中效果！</code>
    <div class="row  ">
      <div class="col-1 bg-success d-flex justify-content-center align-items-center">
        <div class=" "> <i class="bi bi-alarm"></i> <span>air</span><i class="bi bi-airplane"></i><i
            class="bi bi-archive"></i>
        </div>
      </div>
    </div>
    <hr>
    <h5 class="text-success ">（修正 2）把 div d-flex 加上 flex-wrap</h5>
    <code>這樣就沒事了,看起來跟上面一樣</code>
    <div class="row  ">
      <div class="col-1 bg-success ">
        <div class="d-flex justify-content-center align-items-center flex-wrap ">
          <i class="bi bi-alarm"></i> <span>air</span><i class="bi bi-airplane"></i><i class="bi bi-archive"></i>
        </div>
      </div>
    </div>
    <hr>
    <h5>把 justify-content-center 放到 row 上？</h5>
    <code>row 不用打d-flex,本身就有display:flex</code>
    <div class="row  justify-content-center align-items-center">
      <div class="col-1 bg-success d-flex justify-content-center align-items-center">
        <div class=" "> <i class="bi bi-alarm"></i> <span>air</span><i class="bi bi-airplane"></i><i
            class="bi bi-archive"></i>
        </div>
      </div>
    </div>
    <hr>
    <h5 class="text-danger ">row 帶有絕對定位？</h5>
    <div> <code>row 整個變小了, 內容雖然沒有爆版，但空間太小換行了。</code></div>
    <div> <code>绝对定位的，它不会占用文档流中的空间，因此它的宽度将根据内容的大小而定，而不是父容器的大小</code></div>


    <div class="row bg-danger   justify-content-center align-items-center position-absolute start-0">
      <div class="col-1 bg-primary  d-flex justify-content-center align-items-center">
        <div class=" "> <i class="bi bi-alarm"></i> <span>air</span><i class="bi bi-airplane"></i><i
            class="bi bi-archive"></i>
        </div>
      </div>
    </div>
    <hr>

    <h5 class="text-success ">(修正)row 帶有絕對定位，所以要加上 w-100</h5>
    <code>row 整個變小了, 內容雖然沒有爆版，但空間太小換行了。</code>
    <div class="row  bg-info justify-content-center align-items-center position-absolute start-0 w-100">
      <div class="col-1 bg-success d-flex justify-content-center align-items-center">
        <div class=" "> <i class="bi bi-alarm"></i> <span>air</span><i class="bi bi-airplane"></i><i
            class="bi bi-archive"></i>
        </div>
      </div>
    </div>

  </div>

</template>
