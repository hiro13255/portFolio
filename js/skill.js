const swiper = new Swiper(".swiper", {
  // pagination: {
  //     el: ".swiper-pagination"
  //   },
  //   effect: "coverflow",
  //   grabCursor: true,
  //   centeredSlides: true,
  //   slidesPerView: "2",

  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true
  //   },

  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev"
  //   }
  // });

  slidesPerView: 1.9, //画像を何枚表示するか
  spaceBetween: 20, //何ピクセル画像の間隔をあけるか
  centeredSlides: true, //見切らせたい場合メイン画像をセンターにもってくるか
  
  //ページネーションをつける場合
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  //左右のナビゲーションをつける場合
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
