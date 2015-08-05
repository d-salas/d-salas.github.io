/*jshint undef:false */

$( document ).ready(function() {

	//// Affix the navbar ////
	// $('#esp-nav').affix({
	// 	offset: {
	// 		top: 10
	// 	}
	// });
	
	// This is because Bootstrap's affix kind of sux.
	var nav = $("#mss-nav");
	$(window).scroll(function() {
	    if( $(this).scrollTop() > 10 ) {
	      nav.addClass("affix");
	      nav.removeClass("affix-top");
	    } else {
	      nav.addClass("affix-top");
	      nav.removeClass("affix");
	    }
  	});





	// var overlayheight = $("overlay").height();
 //    $("#sidebar").height(bodyheight);

	// for the window resize
	// $(window).resize(function() {
	//     var bodyheight = $(document).height();
	//     $("#sidebar").height(bodyheight);
	// });


    //// STELLAR / SKROLLR ////

    // var s = skrollr.init();

	// if(!Modernizr.touch){ 
	// 	$.stellar({
 //  			horizontalScrolling: false,
 //  			responsive: true
	// 	});

	// 	$( window ).resize(function() {
	// 		$.stellar('refresh');
	// 	});
	// }

});