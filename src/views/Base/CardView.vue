<template>
  <div class="container  ">
    <h1>bootstrap + flex 卡片排版</h1>
    <h2>圖片卡片</h2>
    <ul>
      <li>row 預設 ` --bs-gutter-x: 1.5rem; --bs-gutter-y: 0; gy 要自己設定` </li>
      <li>給有可能會超出的一個“合理的固定高度”，大約是兩倍文字再加上行高 來達到對字體上的對齊，注意不要太小會爆版` </li>
    </ul>
    <div class="w-50  ">
      <div class="row  gy-2  align-items-stretch  ">
        <div class="col-3 bg-orange-100  d-flex flex-column p-2 ">

          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="" style="height: 5rem">標題固定空間</div>
          <div class="">內容</div>
        </div>
        <div class="col-3 bg-orange-100 d-flex flex-column   p-2">
          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="flex-fill " style="height: 5rem">標題：很多標題的描述會超過換行</div>
          <div class="">內容</div>
        </div>
        <div class="col-3 bg-orange-100 d-flex flex-column   p-2 ">
          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="flex-fill">標題</div>
          <div class="">內容：很多標題的描述會超過換</div>
        </div>
        <div class="col-3  bg-orange-100 d-flex flex-column  p-2">
          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="flex-fil">標題</div>
          <div class="">內容</div>
        </div>
        <div class="col-3">
          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="">標題</div>
          <div class="">內容</div>
        </div>
      </div>
    </div>


    <hr>

    <h2>圖片卡片</h2>
    <ul>
      <li> justify-content-center 置中</li>
      <li>align-items-end ` </li>
      <li>align-content-around 子项为多行的情况 整體在空間高度上的分配 高度需要設定很高才看得出來 ` </li>

    </ul>
    <div class="w-25  bg-400   " style="height: 600px">
      <div class="row  h-100    justify-content-center align-items-end   align-content-around  ">
        <div class=" col-3 bg-orange-100  d-flex flex-column p-2 ">

          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="" style="height: 5rem">標題固定空間</div>
          <div class="">內容</div>
        </div>
        <div class=" col-3 bg-orange-100 d-flex flex-column   p-2">
          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="flex-fill " style="height: 5rem">標題：很多標題的描述會超過換行</div>
          <div class="">內容</div>
        </div>
        <div class=" col-3 bg-orange-100 d-flex flex-column   p-2 ">
          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="flex-fill">標題</div>
          <div class="">內容：很多標題的描述會超過換</div>
        </div>
        <div class=" col-3  bg-orange-100 d-flex flex-column  p-2">
          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="flex-fil">標題</div>
          <div class="">內容 </div>
        </div>
        <div class=" col-3">
          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="">標題</div>
          <div class="">內容 sssssss</div>
        </div>
        <div class=" col-3  ">
          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="">標題</div>
          <div class="">內容</div>
        </div>

      </div>
    </div>

    <hr>
    <h2>圖片卡片</h2>
    <ul>
      <li> item:last-child 設定 margin-right auto 可以快速解決最後一行？靠左「文章說會有問題？暫時看不出來」</li>


    </ul>
    <div class="w-25  bg-400   ">
      <div class="row    justify-content-center   ">
        <div class="item col-3 bg-orange-100  d-flex flex-column p-2 ">

          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="" style="height: 5rem">標題固定空間</div>
          <div class="">內容</div>
        </div>
        <div class="item col-3 bg-orange-100 d-flex flex-column   p-2">
          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="flex-fill " style="height: 5rem">標題：很多標題的描述會超過換行</div>
          <div class="">內容</div>
        </div>
        <div class="item col-3 bg-orange-100 d-flex flex-column   p-2 ">
          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="flex-fill">標題</div>
          <div class="">內容：很多標題的描述會超過換</div>
        </div>
        <div class="item col-3  bg-orange-100 d-flex flex-column  p-2">
          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="flex-fil">標題</div>
          <div class="">內容 </div>
        </div>
        <div class="item col-3">
          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="">標題</div>
          <div class="">內容 sssssss</div>
        </div>
        <div class="item col-3  ">
          <div class=""><img src="https://picsum.photos/200/300" alt="fake" srcset="" class="img-fluid "></div>
          <div class="">標題</div>
          <div class="">內容</div>
        </div>

      </div>
    </div>
  </div>

</template>



<style lang="css" scoped>
/* //如何实现 CSS 中 flex 布局最后一行左对齐？https: //juejin.cn/post/7070007213732921380 */
/* .item:last-child:nth-child(4n - 1) {
  margin-right: calc(66px + 12px);
}

.item:last-child:nth-child(4n - 2) {
  margin-right: calc(66px + 66px + 12px + 12px);
} */
/* //似乎將最後一個設定這樣就好了 但文章說有缺陷？ */
.item:last-child {
  margin-right: auto;
}
</style>