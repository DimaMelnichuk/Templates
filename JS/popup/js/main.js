	
	document.getElementById('popup').addEventListener('click', 
	  function(e) {
	    document.querySelector('.popup').style.display = 'flex';
	  });

	document.querySelector('.popup__close').addEventListener('click',
	  function(e) {
		document.querySelector('.popup').style.display = 'none';
	 });

	window.onclick = function(event) {
	  if (event.target == document.getElementById("popup")) {
	    document.getElementById("popup").style.display = "none";
	  }
	}