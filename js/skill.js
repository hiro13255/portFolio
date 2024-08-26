const swiper = new Swiper(".swiper", {
  initialSlide: 1,
  pagination: {
      el: ".swiper-pagination"
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "2.5",
    clickable: true,
    spaceBetween:-250,

    breakpoints: {
      100: {
        slidesPerView: 1.5,
        spaceBetween:-100,
      },
      // 画面幅が676px以上の場合
      676: {
        slidesPerView: 2,
        spaceBetween:-180,
      },
      // 画面幅が1079px以上の場合
      1079: {
        slidesPerView: 2.5,
        spaceBetween:-250,
      },
    },

    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
