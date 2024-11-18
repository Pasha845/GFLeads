const programSwiper = new Swiper('.program__slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: ".program__next",
    prevEl: ".program__prev"
  },
  scrollbar: {
    hide: true
  }
});

const clientSwiper = new Swiper('.client__slider', {
  slidesPerView: 2,
  spaceBetween: 28,
  navigation: {
    nextEl: ".client__next",
    prevEl: ".client__prev"
  },
  scrollbar: {
    hide: true
  }
});