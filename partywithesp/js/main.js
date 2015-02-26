/*jshint undef:false */

$( document ).ready(function() {

	//// Affix the navbar ////
	$('#esp-nav').affix({
		offset: {
			top: 10
		}
	});

	//// Rotating text in div ////

	var text = ['Private parties', 'Fundraisers', 'Product launches', 'Holiday parties', 'Bar/Bat Mitvahs', 'Galas', 'Trade shows'];
        var i = 0,
        $div = $('#services');
    
    setInterval(function ()
    {
        $div.fadeOut(function ()
        {
            $div.text(text[i++ % text.length]).fadeIn();
        });
    }, 1500);


    //// STELLAR / SKROLLR ////

    // var s = skrollr.init();

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