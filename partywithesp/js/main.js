
$( document ).ready(function() {


	$('#esp-nav').affix({
		offset: {
			top: 2
		}
	})

	////  ////

	var text = ['Fundraisers', 'Product launches', 'Holiday parties', 'Bar/Bat Mitvahs', 'Galas', 'Trade shows', 'Private parties'];
        i = 0,
        $div = $('#services');
    
    setInterval(function ()
    {
        $div.fadeOut(function ()
        {
            $div.text(text[i++ % text.length]).fadeIn();
        });
    }, 2000);


    //// STELLAR & SKROLLR ////

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