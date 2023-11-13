(function ($) {
 "use strict";

    // WOW Js
    new WOW().init();
	
/*---------------------
 jQuery MeanMenu
--------------------- */
	jQuery('nav#dropdown').meanmenu();
	
/*---------------------
 mixItUp
--------------------- */	
	$('.portfolio-content').mixItUp();
	
	$("li:first-child.filter").addClass("active");
	
/*---------------------
 tooltip
--------------------- */	
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
/*--------------------------
 features-curosel
----------------------------*/
  $(".features-curosel").owlCarousel({
 
      autoPlay: false, 
	  slideSpeed:2000,
      items : 4,
	  pagination:false,
	  navigation:true,
	  margin: 30,
	  loop: true,
	  nav:true,
	  responsive:{
        0:{
            items:1
        },
		480: {
			items:2
		},
        979:{
            items:3
        },
        1000:{
            items:4
        }
    }
 
  });
  
/*--------------------------------
 top-sells-curosel
---------------------------------- */
  $(".top-sells-curosel").owlCarousel({
 
      autoPlay: false,
	  slideSpeed:2000,
      items : 4,
	  pagination:false,
	  navigation:true,
	  loop: true,
	  margin: 30,
	  nav:true,
	  responsive:{
        0:{
            items:1
        },
		480: {
			items:2
		},
        979:{
            items:3
        },
        1000:{
            items:4
        }
    }
 
  });
  
/*----------------------------
 latest-blog-curosel
------------------------------ */
  $(".latest-blog-curosel").owlCarousel({
 
      autoPlay: false,
	  slideSpeed:2000,
      items : 4,
	  pagination:false,
	  navigation:true,
	  margin: 30,
	  loop: true,
	  nav:true,
	  responsive:{
        0:{
            items:1
        },
		480: {
			items:2
		},
        979:{
            items:3
        },
        1000:{
            items:4
        }
    }
  });
  
/*------------------------------
 brand-curosel
-------------------------------- */
  $(".brand-curosel").owlCarousel({
 
      autoPlay: false,
	  slideSpeed:2000,
      items : 6,
	  pagination:false,
	  navigation:true,
	  margin: 30,
	  loop: true,
	  nav:true,
	  responsive:{
        0:{
            items:2
        },
		480: {
			items:2
		},
        979:{
            items:3
        },
        1000:{
            items:5
        }
    }
 
  });
  
/*------------------------------
 category-curosel
-------------------------------- */
  $(".category-curosel").owlCarousel({
 
      autoPlay: 3000,
	  slideSpeed:3000,
      items : 5,
	  pagination:false,
	  navigation:true,
	  margin: 0,
	  loop: true,
	  nav:true,
	  responsive:{
        0:{
            items:2
        },
		480: {
			items:2
		},
        979:{
            items:3
        },
        1000:{
            items:5
        }
    }
 
  });
  
/*------------------------------
 latest-deals-curosel
-------------------------------- */
  $(".latest-deals-curosel").owlCarousel({
 
      autoPlay: false,
      items : 1,
	  pagination:false,
	  navigation:false,
	  margin: 30,
	  loop: true,
	  nav:true,
	  responsive:{
        0:{
            items:1
        },
    }
 
  });
  
/*------------------------------
 top-sellers-curosel
-------------------------------- */
  $(".top-sellers-curosel").owlCarousel({
 
      autoPlay: false,
	  slideSpeed:2000,
      items : 4,
	  pagination:false,
	  navigation:true,
	  margin: 20,
	  loop: true,
	  nav:true,
	  responsive:{
        0:{
            items:1
        },
		480: {
			items:2
		},
        979:{
            items:3
        },
        1000:{
            items:4
        }
    }
 
  }); 
  
/*------------------------------
 new-product-curosel
-------------------------------- */
  $(".new-product-curosel").owlCarousel({
 
      autoPlay: false,
	  slideSpeed:2000,
      items : 2,
	  pagination:false,
	  navigation:true,
	  margin: 30,
	  loop: true,
	  nav:true,
	  responsive:{
        0:{
            items:1
        },
		480: {
			items:2
		},
        979:{
            items:2
        },
        1000:{
            items:2
        }
    }
 
  });
  
/*------------------------------
 blog-curosel-home-3
-------------------------------- */
  $(".blog-curosel-home-3").owlCarousel({
 
      autoPlay: false,
	  slideSpeed:2000,
      items : 2,
	  pagination:true,
	  navigation:false,
	  margin: 30,
	  loop: true,
	  responsive:{
        0:{
            items:1
        },
		480: {
			items:2
		},
        979:{
            items:2
        },
        1000:{
            items:2
        }
    }
 
  });  
  
/*------------------------------
 post-slider
-------------------------------- */
  $(".post-slider").owlCarousel({
 
      autoPlay: 3000,
	  slideSpeed:2000,
      items : 1,
	  pagination:false,
	  navigation:true,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
	  itemsTablet: [600,1],
	  itemsMobile : [767,1]
 
  });  
  
/* --------------------------------------------------------
   payment-accordion
* -------------------------------------------------------*/ 
	// $(".payment-accordion").collapse({
	// 	accordion:true,
	//   open: function() {
	// 	this.slideDown(550);
	//   },
	//   close: function() {
	// 	this.slideUp(550);
	//   }		
	// });  
  
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 
	
/*-------------------------
  showlogin toggle function
--------------------------*/
	 $( '#showlogin' ).on('click', function() {
        $( '#checkout-login' ).slideToggle(900);
     }); 
	
/*-------------------------
  showcoupon toggle function
--------------------------*/
	 $( '#showcoupon' ).on('click', function() {
        $( '#checkout_coupon' ).slideToggle(900);
     });
	 
/*-------------------------
  Create an account toggle function
--------------------------*/
	 $( '#cbox' ).on('click', function() {
        $( '#cbox_info' ).slideToggle(900);
     });
	 
/*-------------------------
  Create an account toggle function
--------------------------*/
	 $( '#ship-box' ).on('click', function() {
        $( '#ship-box-info' ).slideToggle(1000);
     });	
		 
	

/*---------------------
 countdown
--------------------- */
	$('[data-countdown]').each(function() {
	  var $this = $(this), finalDate = $(this).data('countdown');
	  $this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
	  });
	});	

/*---------------------
 price slider
--------------------- */  
	$(function() {
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - £" + $( "#slider-range" ).slider( "values", 1 ) );
	});	

/*---------------------
 fancybox
--------------------- */	
	$('.fancybox').fancybox();	
	
/*---------------------
 about-counter
--------------------- */	
    $('.about-counter').counterUp({
        delay: 50,
        time: 3000
    });
	

})(jQuery);