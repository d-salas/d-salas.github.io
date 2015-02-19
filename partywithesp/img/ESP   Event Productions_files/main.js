
$( document ).ready(function() {

	var h = $('.jumbotron').outerHeight();

	$('#esp-nav').affix({
		offset: {
			top: 2
		}
	})


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