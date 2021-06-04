//= ../../node_modules/swiper/swiper-bundle.min.js

//= components/modal.js

var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  mousewheel: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});
