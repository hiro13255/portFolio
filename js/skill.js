const swiper = new Swiper(".swiper", {
  initialSlide: 1,
  pagination: {
      el: ".swiper-pagination"
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "2.5",
    clickable: true,
    spaceBetween:-250,

    breakpoints: {
      100: {
        slidesPerView: 2,
        spaceBetween:-200,
      },
      // 画面幅が767px以上の場合
      767: {
        slidesPerView: 2.3,
        spaceBetween:-280,
      },
      // 画面幅が1279px以上の場合
      1279: {
        slidesPerView: 2.5,
        spaceBetween:-250,
      },
    },


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
