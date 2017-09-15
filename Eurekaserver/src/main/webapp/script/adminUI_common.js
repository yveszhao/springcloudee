$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        //overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        $("#arrow-down").hide();
        isClosed = false;
      } else {   
        //overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        $("#arrow-down").show();
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });
  
  $('#funds').click(function () {
        $('#container').html("");
        $('#container').load("test.html");
  });

  $('[data-toggle="offcanvas"]').click();
});
