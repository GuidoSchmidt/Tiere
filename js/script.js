$(document).ready(function() {
  var currentScreenshot = 1;
  var newPos = $('.screenshot').css('background-position');

  $(window).on('scroll', function() {
    var scrollOffset = 120 * $(window).scrollTop()/$(window).height() - 50;
    newPos = '0% ' + scrollOffset + '%';
    $('.screenshot').css('background-position', newPos);
  });

  window.setInterval(function(){
    if(currentScreenshot === 0) {
      $('.screenshot').css('background-image', 'url(./img/screenshotA.png)');
      $('.screenshot').css('background-size', 'cover');
      currentScreenshot = 1;
    }
    else {
      $('.screenshot').css('background-image', 'url(./img/screenshotB.png)');
      $('.screenshot').css('background-size', 'cover');
      currentScreenshot = 0;
    }
  }, 10000); 
});