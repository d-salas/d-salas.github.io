 $(document).ready(function(){

 	// Show or hide album embeds based on click
 	var albumEmbed = {
 		nirvanaCover: '#nirvana-embed',
 		tapeCover: '#tape-embed',
 		ndCover: '#nd-embed'
 	};

 	var previous = '';
 	var change = true;

 	$('#album-covers img').on('click', function(){
 		var currentImage = $(this);
 		var current = this.id;
 		console.log("current is " + current);

 		if( (previous === current) && change ) {
 			console.log("previous is also current");
 			$(albumEmbed[current]).removeClass('show');
 			currentImage.removeClass('active');
 			change = false;
 		} else {
 			console.log("showing " + current);
 			$(albumEmbed[current]).addClass('show');
 			$(albumEmbed[previous]).removeClass('show');
 			currentImage.addClass('active');
 		}
 		previous = current;
 	});

});