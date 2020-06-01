const triangle = document.querySelector('.triangle');
const touchInfo = document.querySelector('.touch-info');
const mobVerHeaderText = document.querySelector('.mob-ver__header-text');
const mobVerHeaderList = document.querySelector('.mob-ver__header-list');
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');
const touchInfoRight = document.querySelector('.touch-info--right');
const touchInfoLeft = document.querySelector('.touch-info--left');
const header = document.querySelector('.header');
const banner = document.querySelector('.banner');

AOS.init({
  offset: 230,
  anchorPlacement: 'top-bottom'
});


body.addEventListener('click', (event) => {
    if 
    (
        event.target.classList.contains('touch-info__inner--left')
     || event.toElement.classList === 'touch-info--left'
     || event.toElement.className === 'triangle-left'
     || event.toElement.className === 'touch-info--left-title'
     || event.toElement.className === 'touch-info--left-text'
     
    ) 

    {
        touchInfoLeft.classList.toggle('touch-sliding--left')
    }


    if 
    (
        event.target.classList.contains('touch-info__inner-right')
     || event.toElement.className === 'triangle-right'
     || event.target.classList.contains('touch-info--right')
     || event.toElement.className === 'touch-info--right-title'
     || event.toElement.className === 'touch-info--right-text'
     
    ) 

    {
        touchInfoRight.classList.toggle('touch-sliding--right');
    }
});
 
const burgerHandler = function() {
    headerBurger.classList.toggle('active');
    mobVerHeaderList.classList.toggle('visiable');
    mobVerHeaderText.classList.toggle('unvisiable');
};

headerBurger.addEventListener('click', burgerHandler);



$(document).ready(function(){
    $(".header__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 130;
        $('body,html').animate({scrollTop: top}, 700);
    });
});

$(document).ready(function(){
    $(".mob-ver__header-list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 130;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

const windowListener = function(event) {
    header.classList.add('scrolled');

    if(banner.getBoundingClientRect().y === 0) {
        header.classList.remove('scrolled')
    };

};

window.addEventListener('scroll', windowListener);

$(document).ready(function(){
    $(".banner__carousel").owlCarousel({
        nav: false,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        loop: true,
        items: 1,
        center: true,
        autoWidth: false,
        margin: 100,
    });
  });

  $(document).ready(function(){
    $(".mob-ver__carousel").owlCarousel({
        nav: false,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        loop: true,
        items: 1,
        center: true,
        autoWidth: false,
        margin: 100,
    });
  });

  $(document).ready(function(){
    $(".certificates-carousel").owlCarousel({
        nav: false,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        loop: true,
        items: 1,
        center: true,
        autoWidth: false,
        stagePadding: 100,
        // merge: true,
        margin: 0,
        margin: 60,
        dots: true
    });
  });