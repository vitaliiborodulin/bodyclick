var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    // mousewheel: true,
    simulateTouch: true,
    autoplay: {
        delay: 5000,
    },
    preloadImages: false,
    lazy: true,
    watchSlidesProgress: true,
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

    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

});

var swiperBottom = new Swiper('.slider-testimonials', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    // mousewheel: true,
    // autoplay: {
    //     delay: 5000,
    // },
    preloadImages: false,
    lazy: true,
    // watchSlidesProgress: true,
    breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 20,
            // centeredSlides: true
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        type: 'fraction'
    },

});

// awards
var swiperBottom = new Swiper('.slider-awards', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    // mousewheel: true,
    // autoplay: {
    //     delay: 5000,
    // },
    preloadImages: false,
    lazy: true,
    // watchSlidesProgress: true,
    breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 20,
            // centeredSlides: true
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});