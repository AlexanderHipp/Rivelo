$(window).load(function(){

  // Flexslider holmfirth
  if ($('#holmfirth').length > 0) {
    $('#holmfirth-carousel').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,itemWidth: 300,itemMargin: 0,asNavFor: '#holmfirth-slider'});
    $('#holmfirth-slider').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,sync: "#holmfirth-carousel"});
  }

  // Flexslider hardknott
  if ($('#hardknott').length > 0) {
    $('#hardknott-carousel').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,itemWidth: 300,itemMargin: 0,asNavFor: '#hardknott-slider'});
    $('#hardknott-slider').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,sync: "#hardknott-carousel"});
  }

  // Flexslider bushcombe
  if ($('#bushcombe').length > 0) {
    $('#bushcombe-carousel').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,itemWidth: 300,itemMargin: 0,asNavFor: '#bushcombe-slider'});
    $('#bushcombe-slider').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,sync: "#bushcombe-carousel"});
  }

  // Flexslider barhatch
  if ($('#barhatch').length > 0) {
    $('#barhatch-carousel').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,itemWidth: 300,itemMargin: 0,asNavFor: '#barhatch-slider'});
    $('#barhatch-slider').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,sync: "#barhatch-carousel"});
  }

  // Flexslider water bottle
  if ($('#bottle').length > 0) {
    $('#waterbottle-carousel').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,itemWidth: 300,itemMargin: 0,asNavFor: '#waterbottle-slider'});
    $('#waterbottle-slider').flexslider({animation: "slide",controlNav: false,animationLoop: false,slideshow: false,sync: "#waterbottle-carousel"});
  }

});
