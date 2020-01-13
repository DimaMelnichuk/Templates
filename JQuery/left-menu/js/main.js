$(function(){

   /***************** Menu-btn ********************/
   $(".menu__burger").on('click', function(e){
      e.preventDefault();
     $(".menu__burger,.menu").toggleClass("active");
     $(".content").toggleClass("content_active");
     });




});