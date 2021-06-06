var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  // mousewheel: true,
  // autoplay: {
  //   delay: 5000,
  // },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});