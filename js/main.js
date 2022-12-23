$(function(){

    $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt="arrow-right"></button>',

    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

});