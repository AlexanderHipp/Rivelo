// Sticky function
$(function() {
  var header = $("header");
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
          header.removeClass('not-sticky').addClass("sticky");
      } else {
          header.removeClass("sticky").addClass('not-sticky');
      }
  });
});

// Navigation scroll
$('a').click(function(event) {
    var id = $(this).attr("href");
    // margin top
    var offset = 150;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
