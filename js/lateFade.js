$(function () {
});

$(window).on('load', function () {
    $('.wrap').addClass('is-active').delay(500).queue(function () {
        $('.wrap2').addClass('is-active2').dequeue();
    });
});

$(window).scroll(function () {
    $('.late_fadein').each(function () {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight) {
            $(this).addClass('scrollin');
        }
    });
});