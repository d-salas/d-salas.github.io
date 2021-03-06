 // REMOVE THIS BEFORE GOING LIVE
 /*jslint devel: true */

 $(document).ready(function(){
 	// repeat versing on click
 	$('.versing-title').on('click', function(){
 		var versing = $(this);
 		versing.append("<br>VERSING");
 	});

 	// Show or hide album embeds based on click
 	var albumEmbed = {
 		nirvanaCover: '#nirvana-embed',
 		tapeCover: '#tape-embed',
 		ndCover: '#nd-embed'
 	};

 	var previous = '';
 	var previousAlbum = '';

 	$('#album-covers img').on('click', function(){
 		var currentImage = $(this);
 		var current = this.id;

		if (current === previous) { // if the current one we're clicking is the same as the last one we clicked
			$(albumEmbed[current]).toggleClass('show');
			currentImage.toggleClass('active');
		}
		else {
			$(albumEmbed[current]).addClass('show');
			$(albumEmbed[previous]).removeClass('show');
			currentImage.addClass('active');
			if (previousAlbum) {
				previousAlbum.removeClass('active');
			}
		}
		previous = current;
		previousAlbum = currentImage;
 	});

 // 	if ($(window).width() > 768){
	//  	$('#cmoThumb').on('mouseover', function() {
	//  		$(this).attr('src', './img/videos/cmo.webp');
	//  	});
	// 	$('#cmoThumb').on('mouseleave', function() {
	//  		$(this).attr('src', './img/videos/cmo.jpg');
	//  	});

	//  	$('#vkThumb').on('mouseover', function() {
	//  		$(this).attr('src', './img/videos/vk.webp');
	//  	});
	// 	$('#vkThumb').on('mouseleave', function() {
	//  		$(this).attr('src', './img/videos/vk.jpg');
	//  	});

	//  	$('#kexpThumb').on('mouseover', function() {
	//  		$(this).attr('src', './img/videos/kexp.webp');
	//  	});
	// 	$('#kexpThumb').on('mouseleave', function() {
	//  		$(this).attr('src', './img/videos/kexp.jpg');
	//  	});
	// }

	// Show or hide video embeds based on click
 	var videoEmbed = {
 		cmoThumb: '#cmo-embed',
 		vkThumb: '#vk-embed',
 		kexpThumb: '#kexp-embed'
 	};

 	var previous2 = '';
 	var previousThumb = '';

 	$('#video-thumbs img').on('click', function(){
 		var currentThumb = $(this);
 		var current2 = this.className;
 		current2 = current2.split(" ");
 		current2 = current2[0];
 		console.log(currentThumb);
 		console.log(current2);
 		console.log( $(videoEmbed[current2]) );

		if (current2 === previous2) { // if the current one we're clicking is the same as the last one we clicked
			$(videoEmbed[current2]).toggleClass('show');
			currentThumb.toggleClass('active');
		}
		else {
			$(videoEmbed[current2]).addClass('show');
			$(videoEmbed[previous2]).removeClass('show');
			currentThumb.addClass('active');
			if (previousThumb) {
				previousThumb.removeClass('active');
			}
		}
		previous2 = current2;
		previousThumb = currentThumb;
 	});

 	function move() {
 		var link = $(this);

 		var footerWidth = $('footer').width();
 		var footerHeight = $('footer').height();

 		var linkHeight = link.height();
 		var linkWidth = link.width();
 		
 		var left = Math.floor(Math.random()*(footerWidth - linkWidth)) + "px";
        var top = Math.floor(Math.random()*(footerHeight - linkHeight)) + "px";

        // console.log("footer height: " + footerHeight);
        // console.log("top: " + top);

        link.css("left", left);
        link.css("top", top);
 	}

 	$("#moving-link").on('mouseover', move);
 	$("#moving-link").on('click', move);

 	// Fit YouTube video to screen width
 	$('.youtube-embed').fitVids();
 	$('.silver-dollar-embed').fitVids();

});