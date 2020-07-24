$(function(){

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