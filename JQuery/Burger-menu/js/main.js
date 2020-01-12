$(function(){

   /***************** Menu-btn ********************/
   $(".menu__burger").click(function(event){
     $(".menu__burger,.header-menu").toggleClass("active");
     });

   /***************** Header BG Scroll ******************/

  $(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 20) {
        $('.header').addClass('fixed');
      } else {
        $('.header').removeClass('fixed');
      }
    });
  });


});