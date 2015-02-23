
$( document ).ready(function() {


	$('#esp-nav').affix({
		offset: {
			top: 2
		}
	});

	////  ////

	var text = ['Private parties', 'Fundraisers', 'Product launches', 'Holiday parties', 'Bar/Bat Mitvahs', 'Galas', 'Trade shows'];
        i = 0,
        $div = $('#services');
    
    setInterval(function ()
    {
        $div.fadeOut(function ()
        {
            $div.text(text[i++ % text.length]).fadeIn();
        });
    }, 1500);


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