
  $('#chevron').click(function(){
    var intro = $(this).attr('href'); // Page cible
      $('html, body').animate( { scrollTop: $(intro).offset().top }, 800 ); // Go
      return false;
    });

