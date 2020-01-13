$(function(){

  /***************** Tab-menu ********************/
   $(".tab_container:first").show()
   $(".tab_nav li:first").addClass('active');

  $(".tab_nav li").click(function(event) {
    index = $(this).index();
    $(".tab_nav li").removeClass('active');
    $(this).addClass('active');
    $('.tab_container').hide();
    $('.tab_container').eq(index).show();
  });


});