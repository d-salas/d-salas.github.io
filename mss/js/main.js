/*jshint undef:false */

$( document ).ready(function() {
	// For smooth scrolling
	$('a[href^="#"]').on('click', function(event) {
	    var target = $( $(this).attr('href') );
	    // console.log(target);
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top - 50
	        }, 1000);
	    }
	});
	
	// This is because Bootstrap's affix kind of sux.
	var nav = $("#mss-nav");
	var top = $("#mss-hero");
	var logo = $(".navbar-brand");
	// var logoImg = $("#mss-logo-navbar");
    if( $(this).scrollTop() > 10 ) {
	    nav.addClass("affix");
	    nav.removeClass("affix-top");
    }
    if( $(this).scrollTop() > top.outerHeight() ) {
    	logo.addClass("visible-logo");
    	// logoImg.fadeIn();
    }
	$(window).scroll(function() {
	    if( $(this).scrollTop() > 10 ) {
	      nav.addClass("affix");
	      nav.removeClass("affix-top");
	    } else {
	      nav.addClass("affix-top");
	      nav.removeClass("affix");
	    }
	    if( $(this).scrollTop() > (top.outerHeight() - 33) ) {
	    	logo.addClass("visible-logo");
	    	// logoImg.fadeIn();
	    }
	    else {
	    	logo.removeClass("visible-logo");
	    	// logoImg.fadeOut();
	    }
  	});

	// Animate the menu icon when it's clicked.
	$("#menu-icon").click(function(){
    	$(this).toggleClass("down"); 
	});

	// Logo typing shit
	var typed = $('#typed');
	// var typedContainer = $('.typed-wrap');
	var mssLogo = $('#mss-logo-top>img');
	function setPosition(){
		var logoTop = mssLogo.offset().top; 
		var logoLeft = mssLogo.offset().left;
		typed.css("top", logoTop+13);
		typed.css("left", logoLeft-35);
	}
	setPosition();
	$(window).resize(setPosition);

	$("#typed").typed({
        strings: ["Acknowledgements", "     Invitations", "  Announcements"],
        // stringsElement: $('#typed-strings'),
        typeSpeed: 50,
        backDelay: 500,
        loop: true,
        contentType: 'html', // or text
        loopCount: false,
    });



	// function setPosition() {
	// 	var typedHeight = $('.typed').outerHeight();
	// 	typedContainer.height(typedHeight);
	// 	// console.log(typedHeight);
	// }
	// setHeight();

	// for the window resize
	// $(window).resize(setHeight);



	// $(window).resize(setHeight);


	// FOR CUSTOMIZER DROPDOWNS
	$('.selectpicker').selectpicker();
	// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
 //    	$('.selectpicker').selectpicker('mobile');
	// }

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

	// GOTTA ENABLE/DISABLE CALLIGRAPHY BASED ON EVENT TYPE
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

	// PAYPAL FORM STUFF
	var name = $('#paypal-name');
	var paybtn = $('.paypal-img');
	var paybtn1 = $('#paypal-btn1');
	var paybtn2 = $('#paypal-btn2');
	paybtn.addClass('hidden');

	name.on('input', function(){
		if (name.val().trim().length === 0) {
			paybtn1.addClass('hidden');
		}
		else {
			paybtn1.removeClass('hidden');
		}
	});

	paybtn1.on('click', function(){
		paybtn2.removeClass('hidden');
	});

});


// var letters = ['img/letter-1.png', 'img/letter-2.png', 'img/letter-3.png'];
 //        var index = 0,
 //        $img = $('#letter-img');

 //    $('#letter-div').height($img.height());

	// ("#my_image").attr("src", "first.jpg")

	// function rotateImage()
	// {
	// 	$img.fadeOut('fast', function()
	// 	{
	// 		$(this).attr('src', letters[index]);

	// 		$(this).fadeIn('fast', function()
	// 		{
	// 			if (index === letters.length-1)
	// 			{
	// 				index = 0;
	// 			}
	// 			else
	// 			{
	// 				index++;
	// 			}
	// 		});
	// 	});
	// }
	// setInterval (rotateImage, 2500);