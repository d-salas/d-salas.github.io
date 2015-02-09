
$( document ).ready(function() {

	var h = $('.jumbotron').outerHeight();

	$('#navi').affix({
		offset: {
			top: function(){return $('#top').outerHeight();}
		}
	})

});