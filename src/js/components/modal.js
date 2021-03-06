// var btnOpen = document.querySelectorAll('.btn');
// var modalForm = document.getElementById('form');

// var overlayForm = document.querySelector('#form .overlay');
// var btnCloseForm = document.querySelector('#form .btn-close');

// for (var i = 0; i < btnOpen.length; i++) {
//   btnOpen[i].addEventListener('click', function (e) {
//     e.preventDefault();
//     modalForm.classList.add('active');
//   });
// }

// function closeModal() {
//   modalForm.classList.remove('active');
// }

// overlayForm.addEventListener('click', closeModal);
// btnCloseForm.addEventListener('click', closeModal);

const lightbox = GLightbox({
    touchNavigation: false,
    keyboardNavigation: false,
    draggable: false,
});

lightbox.on('open', function(){
    $('.gnext, .gprev').hide();
})

lightbox.on('close', function(){
    $('.gnext, .gprev').show();
})

const lightboxTopSlider = GLightbox({
    selector: '.glightbox2'
});

const lightboxAwardsSlider = GLightbox({
    selector: '.glightbox3'
});

const lightboxTestimonialsSlider = GLightbox({
    selector: '.glightbox4',
    loop: true,
    fixedNavigation: true
});