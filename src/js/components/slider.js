var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    // mousewheel: true,
    simulateTouch: true,
    autoplay: true,
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
        dynamicBullets: true,
        type: 'bullets'
    },

    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

});


// отзывы
var swiperBottom = new Swiper('.slider-testimonials', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    // spaceBetween: 20,
    loop: true,
    // autoHeight: true,
    // mousewheel: true,
    // autoplay: {
    //     delay: 5000,
    // },
    preloadImages: false,
    lazy: true,
    // watchSlidesProgress: true,
    breakpoints: {
        1200: {
            slidesPerView: 4,
            // spaceBetween: 20,
            // centeredSlides: true
        },
        1080: {
            slidesPerView: 3,
            // spaceBetween: 20,
            // centeredSlides: true
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 20,
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        type: 'fraction'
    },

});

// var feedbackPrev = $('#feedbackPrev')
// var feedbackNext = $('#feedbackNext')

// feedbackPrev.on('click', function() {
//     swiperBottom.slidePrev();
//     console.log(swiperBottom)
// })
// feedbackNext.on('click', function() {
//     swiperBottom.slideNext();
//     console.log(1)
// })


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