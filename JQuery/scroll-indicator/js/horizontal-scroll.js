   $(document).ready(function() {
      var docHeight = $(document).height(),
      windowHeight = $(window).height(),
      scrollPercent;

      $(window).scroll(function() {
        scrollPercent = $(window).scrollTop() / (docHeight - windowHeight) * 100;
        $('#myBar').width(scrollPercent + '%');
       });
    });


// JS When the user scrolls the page, execute myFunction
/*window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}*/