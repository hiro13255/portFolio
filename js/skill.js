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
        spaceBetween:-100,
      },
      // 画面幅が767px以上の場合
      767: {
        spaceBetween:-200,
      },
      // 画面幅が1279px以上の場合
      1279: {
        spaceBetween:-250,
      },
    },


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
