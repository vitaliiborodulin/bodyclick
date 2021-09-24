$('<div>').addClass('arrowUpBtn').attr('title', 'Вернуться к началу').appendTo('body');

var arrowUpBtn = $('.arrowUpBtn');

function scrollBtn() {
    var top = $(this).scrollTop();

    if (top > 300) {
        arrowUpBtn.fadeIn(500);
    } else {
        arrowUpBtn.fadeOut(500);
    }
    // $(this).scrollTop() > 300 ? $('.arrowUpBtn').fadeIn() : $('.arrowUpBtn').fadeOut();
}

scrollBtn();

$(window).on('scroll', scrollBtn);

arrowUpBtn.on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
})