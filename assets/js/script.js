$(function(){  
    $('#chevron a').click(function(event) 
    {
        $('html, body').animate({scrollTop: $( $(this).attr('href')).offset().top}, 900);
        return false;
}); 
