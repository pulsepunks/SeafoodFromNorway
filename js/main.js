// ----------Slicker----------
$(function(){

    $('.header__slider-inner').slick({
        prevArrow: '<button type="button" class="slick-arrow arrow-up"><img src="/img/header/arrow-up.svg" alt="Arrow up"></button>',
        nextArrow: '<button type="button" class="slick-arrow arrow-down"><img src="/img/header/arrow-down.svg" alt="Arrow down"></button>',
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        vertical: true
    });

    
        
        $('.benefits__slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        vertical: true,
        asNavFor: '.benefits__nav',
        });
    $('.benefits__nav').slick({
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        speed: 700,
        asNavFor: '.benefits__slider',
        vertical: true,
        focusOnSelect: true
        
    });
    
    $('.burger').on('click', function () {
        $('.burger').toggleClass('active');
        $('.header__top').toggleClass('active');
    });


});