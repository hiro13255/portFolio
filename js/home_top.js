$(function(){
});

$('.hamburger_menu').click(function(){
    $('.fa-times').removeClass('d-none');
    $('.fa-bars').addClass('d-none');
    $('.header_hamburger_menu').fadeIn(1000);
  })
$('.close_hamburger_menu').click(function(){
    $('.fa-bars').removeClass('d-none');
    $('.fa-times').addClass('d-none');
    $('.header_hamburger_menu').fadeOut(1000);
  })


$(window).on('load', function(){
    $('.wrap').addClass('is-active').delay(500).queue(function() {
        $('.wrap2').addClass('is-active2').dequeue();
    });
});

$(window).scroll(function() {
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight){
            $(this).addClass('scrollin');
        }
    });
    $('.Headline').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight){
            $('.Headline3').addClass('headline').delay(500).queue(function() {
                $('.Headline2').addClass('headline').delay(500).queue(function() {
                    $('.Headline').addClass('headline').dequeue();
                });
            });
        }
    });
});