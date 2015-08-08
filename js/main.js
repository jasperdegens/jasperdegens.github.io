$(document).ready(function() {

  $('.navbar').stalker();
  // $('.section-title').stalker({'offset': '50px'});
  // $(window).on('scroll', function(e){
  //   if ($(this).scrollTop() > 71){
  //     nav.addClass("nav-fixed");
  //   } else {
  //     nav.removeClass("nav-fixed");
  //   }
  // });
  $('.icon').on('click', function(e){
    $('.splash').addClass('full-size');
  })
});