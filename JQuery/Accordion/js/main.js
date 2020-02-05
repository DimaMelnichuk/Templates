$(function(){

   /***************** Accordion ********************/
   $(".title_block").click(function(event){
      if($(".title_block").hasClass("active_block")){
        $(".title_block").not($(this)).removeClass("active_block");
        $(".info").not($(this).next()).slideUp(300);
      }
      $(this).toggleClass("active_block").next().slideToggle(300);
   });

});