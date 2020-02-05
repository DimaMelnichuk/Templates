$(function(){

   /***************** Checkbox-on-off ********************/
	/* $.each($(".checkmark"), function(index, val){
	   	if($(this).find('input').prop('checked')==true){
	   		$(this).addClass('active');
	   	}
	   });*/
  $('.checkmark').on('click', function(event) {
  	if($(this).hasClass('active')){
  		$(this).find('input').prop('checked',false);
  	}else{
  		$(this).find('input').prop('checked',true);
  	}
  	$(this).toggleClass('active');
  	return false;
  });

});