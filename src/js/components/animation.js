$.fn.visible = function(partial) {

    var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

};

$(function() {

    $(".title-animation-idle").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("activate-animation");
        }
    });

    $(window).scroll(function(event) {

        $(".title-animation-idle").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("activate-animation");
            }
        });

    });
});