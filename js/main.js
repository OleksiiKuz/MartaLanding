$(function(){
   $('.header__burger').on('click', function (e) {
      e.preventDefault;
      $(this).toggleClass('header__burger-active')

   });

   $('.header__burger').on('click', function (e) {
      e.preventDefault;
      $('.header__navigation').slideToggle();

   });

   $('.header__burger').on('click', function (e) {
      e.preventDefault;
      $('.header__navigation').toggleClass('header__navigation-active')

   });

   $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();

      $('html, body').animate({
         scrollTop: $($(this).attr('href')).offset().top
      }, 1000, 'linear');
   });



});

$(document).ready(function () {
   $('.promo__slider').slick({
      dots: true,
      vertical: true,
      arrows: false,
      dotsClass: 'promo__dots'
  });
});

new WOW().init();
