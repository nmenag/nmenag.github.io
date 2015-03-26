// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').on('click', function(e) {
    var element = $(this);
    $('html, body').stop().animate({
        scrollTop: $(element.attr('href')).offset().top
     }, 1500, 'easeInOutExpo');

    e.preventDefault();
  });


  $('body').scrollspy({
    target: '.navbar-fixed-top'
  })

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse li a').click(function() {
    $('.navbar-toggle:visible').click();
  });
});
