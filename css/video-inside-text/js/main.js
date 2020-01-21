$(function(){

  /***************** Popup ********************/


});

document.getElementById('popup').addEventListener('click', 
  function() {
    document.querySelector('.popup').style.display = 'flex';
  });

document.querySelector('.popup_close').addEventListener('click',
  function() {
    document.querySelector('.popup').style.display = 'none';
  });