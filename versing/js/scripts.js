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
 		var current = this.id;
 		console.log(current);
 		// console.log(albumEmbed);

 		if( (previous === current) && change ) {
 			$(albumEmbed[current]).css('display', 'none');
 			change = false;
 		} else {
 			$(albumEmbed[current]).css('display', 'block');
 			$(albumEmbed[previous]).css('display', 'none');
 		}
 		previous = current;
 	});

});