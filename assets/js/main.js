//To controle the navbar background once scrolled

$(window).scroll(function () {

  $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});
