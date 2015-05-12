$(window).load(function(){

  // Flexslider pembridge
  if ($('#pembridge').length > 0) {
    $('#pembridge-carousel').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,itemWidth: 300,itemMargin: 0,asNavFor: '#pembridge-slider'});
    $('#pembridge-slider').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,sync: "#pembridge-carousel"});
  }

  // Flexslider newlands
  if ($('#newlands').length > 0) {
    $('#newlands-carousel').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,itemWidth: 300,itemMargin: 0,asNavFor: '#newlands-slider'});
    $('#newlands-slider').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,sync: "#newlands-carousel"});
  }

  // Flexslider kirkstone
  if ($('#kirkstone').length > 0) {
    $('#kirkstone-carousel').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,itemWidth: 300,itemMargin: 0,asNavFor: '#kirkstone-slider'});
    $('#kirkstone-slider').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,sync: "#kirkstone-carousel"});
  }

  // Flexslider honister
  if ($('#honister').length > 0) {
    $('#honister-carousel').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,itemWidth: 300,itemMargin: 0,asNavFor: '#honister-slider'});
    $('#honister-slider').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,sync: "#honister-carousel"});
  }

  // Flexslider honister
  if ($('#beaumont').length > 0) {
    $('#beaumont-carousel').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,itemWidth: 300,itemMargin: 0,asNavFor: '#beaumont-slider'});
    $('#beaumont-slider').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,sync: "#beaumont-carousel"});
  }

});
