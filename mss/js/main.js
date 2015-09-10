/*jshint undef:false */

$( document ).ready(function() {

	var letters = ['img/letter-1.png', 'img/letter-2.png', 'img/letter-3.png'];
        var index = 0,
        $img = $('#letter-img');

    $('#letter-div').height($img.height());
	
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

	$("#menu-icon").click(function(){
    	$(this).toggleClass("down"); 
	});

	// ("#my_image").attr("src", "first.jpg")

	function rotateImage()
	{
		$img.fadeOut('fast', function()
		{
			$(this).attr('src', letters[index]);

			$(this).fadeIn('fast', function()
			{
				if (index === letters.length-1)
				{
					index = 0;
				}
				else
				{
					index++;
				}
			});
		});
	}
	setInterval (rotateImage, 2500);

	// for the window resize
	// $(window).resize(function() {
	//     $('#letter-div').height($img.height());
	// });


	// FOR CUSTOMIZER DROPDOWNS
	$('.selectpicker').selectpicker();
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    	$('.selectpicker').selectpicker('mobile');
	}

  	// CHANGE FONTS BASED ON DROPDOWN SELECTION
  	$(".font-picker").change(function() {
    	$("#sample-letter>p").css("font-family", $(this).val());
	});

  	var statImg = $("#stationery-img");
	// CHANGE STATIONERY IMAGE BASED ON DROPDOWN SELECTION
  	$(".stationery-picker").change(function() {
  		var pic = $(this).val();

  		if (pic === "Ampersand") { 
  			statImg.attr("src", "./img/ampersand.jpg");
  		}
  		if (pic === "Wreath") { 
  			statImg.attr("src", "./img/wreath.jpg");
  		}
  		if (pic === "Roadster") { 
  			statImg.attr("src", "./img/roadster.jpg");
  		}
  		if (pic === "Savannah tree") { 
  			statImg.attr("src", "./img/savannahtree.jpg");
  		}
	});  	

	var celeb = $('option:contains(Celebration invitation)');
	var shower = $('option:contains(Shower invitation)');
	var ack = $('option:contains(Acknowledgement)');
	var announce = $('option:contains(Announcement)');
	var date = $('option:contains(Save the date)');
	var gift = $('option:contains(Gift acknowledgement)');
	var invite = $('option:contains(Invitation)');

	$('.service-picker').prop('disabled',true);
	$('.stationery-picker').prop('disabled',true);
	$('.calligraphy-picker').prop('disabled',true);

	$('.service-picker').selectpicker('refresh');
	$('.stationery-picker').selectpicker('refresh');
	$('.calligraphy-picker').selectpicker('refresh');

	$(".event-picker").change(function() {
		$('.service-picker').prop('disabled',false);
		var event = $(this).val();
		// console.log(event);
		if (event.indexOf("Baby") >= 0) { // SHOW SHOWER, ANNOUNCE, AND GIFT. STATIONERY
			// What to show
			$('.stationery-picker').prop('disabled',false);
			shower.removeAttr('disabled');
			announce.removeAttr('disabled');
			gift.removeAttr('disabled');
			statImg.css("display", "block");

			// What to hide
			celeb.attr('disabled', '');
			ack.attr('disabled', '');
			date.attr('disabled', '');
			invite.attr('disabled', '');
			$(".wedding-notice").hide();

			//Refresh
          	$('.stationery-picker').selectpicker('refresh');
          	$('.service-picker').selectpicker('refresh');
		}
		if (event.indexOf("Engagement") >= 0) { //SHOW ANNOUNCE, CELEB, & GIFT. STATIONERY
			$('.stationery-picker').prop('disabled',false);
			announce.removeAttr('disabled');
			celeb.removeAttr('disabled');
			gift.removeAttr('disabled');
			statImg.css("display", "block");

			shower.attr('disabled', '');
			ack.attr('disabled', '');
			invite.attr('disabled', '');
			date.attr('disabled', '');
			$(".wedding-notice").hide();

          	$('.stationery-picker').selectpicker('refresh');
          	$('.service-picker').selectpicker('refresh');
		}
		if (event.indexOf("Wedding") >= 0) { //SHOW ANNOUNCE, DATE, INVITE, & GIFT. NO STATIONERY
			announce.removeAttr('disabled');
			date.removeAttr('disabled');
			invite.removeAttr('disabled');
			gift.removeAttr('disabled');
			$(".wedding-notice").show();

			$('.stationery-picker').prop('disabled',true);
			celeb.attr('disabled', '');
			shower.attr('disabled', '');
			ack.attr('disabled', '');
			statImg.css("display", "none");

          	$('.stationery-picker').selectpicker('refresh');
          	$('.service-picker').selectpicker('refresh');
		}
		if (event.indexOf("Bridal") >= 0) { //SHOW INVITE & GIFT. STATIONERY
			$('.stationery-picker').prop('disabled',false);
			invite.removeAttr('disabled');
			gift.removeAttr('disabled');
			statImg.css("display", "block");

			shower.attr('disabled', '');
			ack.attr('disabled', '');
			announce.attr('disabled', '');
			date.attr('disabled', '');
			celeb.attr('disabled', '');
			$(".wedding-notice").hide();

          	$('.stationery-picker').selectpicker('refresh');
          	$('.service-picker').selectpicker('refresh');
		}
		if (event.indexOf("Graduation") >= 0) { //SHOW ANNOUNCE, CELEB, & GIFT. STATIONERY
			$('.stationery-picker').prop('disabled',false);
			announce.removeAttr('disabled');
			celeb.removeAttr('disabled');
			gift.removeAttr('disabled');
			statImg.css("display", "block");

			shower.attr('disabled', '');
			ack.attr('disabled', '');
			date.attr('disabled', '');
			invite.attr('disabled', '');
			$(".wedding-notice").hide();

          	$('.stationery-picker').selectpicker('refresh');
          	$('.service-picker').selectpicker('refresh');
		}
		if (event.indexOf("Memorial") >= 0) { //SHOW ANNOUNCE, ACK. STATIONERY
			$('.stationery-picker').prop('disabled',false);
			announce.removeAttr('disabled');
			ack.removeAttr('disabled');
			statImg.css("display", "block");

			shower.attr('disabled', '');
			gift.attr('disabled', '');
			celeb.attr('disabled', '');
			date.attr('disabled', '');
			invite.attr('disabled', '');
			$(".wedding-notice").hide();

          	$('.stationery-picker').selectpicker('refresh');
          	$('.service-picker').selectpicker('refresh');
		}
	});

	// GOTTA ENABLE CALLIGRAPHY BASED ON EVENT TYPE
	$(".service-picker").change(function() {
		var service = $(this).val();
		// console.log(service);
		if (service === "Announcement" || service === "Celebration invitation" || service === "Invitation" || service === "Save the date" || service === "Shower invitation"){
			// console.log("one of those");
			$('.calligraphy-picker').prop('disabled',false);
			$('.calligraphy-picker').selectpicker('refresh');
		}
		else {
			// console.log("not one of those");	
			$('.calligraphy-picker').prop('disabled',true);
			$('.calligraphy-picker').selectpicker('refresh');
		}
	});


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