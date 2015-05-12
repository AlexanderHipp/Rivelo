$(window).load(function(){

  // Flexslider ditchling
  if ($('#ditchling').length > 0) {
    $('#ditchling-carousel').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,itemWidth: 300,itemMargin: 0,asNavFor: '#ditchling-slider'});
    $('#ditchling-slider').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,sync: "#ditchling-carousel"});
  }

  // Flexslider rosedale
  if ($('#rosedale').length > 0) {
    $('#rosedale-carousel').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,itemWidth: 300,itemMargin: 0,asNavFor: '#rosedale-slider'});
    $('#rosedale-slider').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,sync: "#rosedale-carousel"});
  }

  // Flexslider ranmore
  if ($('#ranmore').length > 0) {
    $('#ranmore-carousel').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,itemWidth: 300,itemMargin: 0,asNavFor: '#ranmore-slider'});
    $('#ranmore-slider').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,sync: "#ranmore-carousel"});
  }

  // Flexslider fairoak
  if ($('#fairoak').length > 0) {
    $('#fairoak-carousel').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,itemWidth: 300,itemMargin: 0,asNavFor: '#fairoak-slider'});
    $('#fairoak-slider').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,sync: "#fairoak-carousel"});
  }

});
