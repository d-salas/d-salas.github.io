
$( document ).ready(function() {

	var h = $('.jumbotron').outerHeight();

	$('#esp-nav').affix({
		offset: {
			top: 2
		}
	})

	/*$(window).scroll(function() {
		if ($(this).scrollTop() > 15){  
			$('navi').addClass("affix");
		}
		else{
			$('navi').removeClass("affix");
		}
	});*/

	

	if(!Modernizr.touch){ 
    		$.stellar({
	  			horizontalScrolling: false,
	  			responsive: true
			});

			$( window ).resize(function() {
				$.stellar('refresh');
			});
		}

});