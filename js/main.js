$(function () {
   $('.header__slider').slick({
      prevArrow: '<button type="button" class="slick-prev"> <img src="images/icon/arrow-prev.png" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"> <img src="images/icon/arrow-next.png" alt=""></button>',
      fade: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      infinite: true,
   });

   $('.js-tabs .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.js-tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.js-tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.header__menu-btn').on('click', function () {
      $('.header__menu-btn').toggleClass('header__menu-btn-active');
      $('.header__list').toggleClass('active');
      
   });

   $('input[type="file"],input[type="checkbox"],input[type="radio"],select').styler();

   const WOW = require('wowjs');

   window.wow = new WOW.WOW();
   window.wow.init();

});