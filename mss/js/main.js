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
	var mssLogo = $('#mss-logo-top>img');
	function setPosition(){
		var logoTop = mssLogo.offset().top; 
		var logoLeft = mssLogo.offset().left;
		typed.css("top", logoTop);
		typed.css("left", logoLeft-35);
	}
	setPosition();
	$(window).resize(setPosition);

	$("#typed").typed({
        strings: ["\n    Thank You!", "So glad you \ncould make it...", "I was thrilled to \nbe able to celebrate...", "\nMerci, Grazie, Xiè xie!", "\n      It's a Boy!", "We are thrilled to\nannounce..."],
        typeSpeed: 50,
        backDelay: 500,
        loop: true,
        contentType: 'html', // or text
        loopCount: false,
    });

	// FOR CUSTOMIZER DROPDOWNS
	$('.selectpicker').selectpicker({
		hideDisabled: 'true'
	});

  	// CHANGE FONTS BASED ON DROPDOWN SELECTION
  	$(".font-picker").change(function() {
    	$("#sample-letter>p").css("font-family", $(this).val());
	});

  	var statImg = $("#stationery-img");
  	var loader = $("#loading-icon");
  	// var imgOffset = statImg.offset();
  	// console.log(imgOffset);
  	// console.log(statImg);
  	// loader.css("top", imgOffset.top);
	// CHANGE STATIONERY IMAGE BASED ON DROPDOWN SELECTION
  	$(".stationery-picker").change(function() {
  		var pic = $(this).val();

		if (pic === "Alphabet Letter") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/alphabet-letter.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/alphabet-letter.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Ampersand") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/ampersand.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/ampersand.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Ballerina Mouse") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/ballerina-mouse.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/ballerina-mouse.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Beauty (Chinese characters)") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/chinese-beauty.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/chinese-beauty.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Bicycle") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/bicycle.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/bicycle.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Books") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/books.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/books.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Bowtie") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/bowtie.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/bowtie.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Dress") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/dress.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/dress.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Frog") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/frog.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/frog.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Gold Mouse") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/mouse.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/mouse.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Lion") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/lion.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/lion.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Mermaid") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/mermaid.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/mermaid.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Nest") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/nest.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/nest.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Pocketwatch") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/pocketwatch.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/pocketwatch.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Roadster") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/roadster.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/roadster.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
				loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Sailboat") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/sailboat.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/sailboat.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Savannah Tree") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/savannahtree.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/savannahtree.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Skyline") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/skyline.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/skyline.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Tent") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/tent.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/tent.png");}, 250);
			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Turtle") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/turtle.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/turtle.png");}, 250);
  			window.setTimeout(function(){
				statImg.fadeIn();
				loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Wreath") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/wreath.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/wreath.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Yoga Pose") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			// statImg.attr("src", "./img/cards/yogapose.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/yogapose.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}
  		if (pic === "Zebra") { 
  			statImg.fadeOut();
  			loader.fadeIn();
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/zebra.png");}, 250);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 2000);
  		}  		
	});  	

	var celeb = $('option:contains(Celebration invitation)');
	var shower = $('option:contains(Shower invitation)');
	var ack = $('option:contains(Acknowledgement)');
	var announce = $('option:contains(Announcement)');
	var date = $('option:contains(Save the date)');
	var gift = $('option:contains(Gift acknowledgement)');
	var invite = $('option:contains(Invitation)');

	// var eventForm = $('#event-form');
	// var typeForm = $('#type-form');
	// var fontForm = $('#font-form');
	// var stationeryForm = $('#stationery-form');
	// var calligraphyForm = $('#calligraphy-form');

	var cardImgs = $('.card-images');

	$('.service-picker').prop('disabled',true);
	$('.stationery-picker').prop('disabled',true);
	$('.calligraphy-picker').prop('disabled',true);

	$('.service-picker').selectpicker('refresh');
	$('.stationery-picker').selectpicker('refresh');
	$('.calligraphy-picker').selectpicker('refresh');

	$(".event-picker").change(function() {
		$('.service-picker').prop('disabled',false);
		quantpick.prop('disabled',false);
		quantpick.selectpicker('refresh');

		var event = $(this).val();
		if (event !== null) {
			$('#hide-on-select').css('display', 'none');
		}
		else {
			$('#hide-on-select').css('display', 'inline');
		}
		// console.log(event);
		if (event.indexOf("Baby") >= 0) { // SHOW SHOWER, ANNOUNCE, AND GIFT. STATIONERY
			// What to show
			$('.stationery-picker').prop('disabled',false);
			shower.removeAttr('disabled');
			announce.removeAttr('disabled');
			gift.removeAttr('disabled');
			statImg.css("display", "block");
			cardImgs.css("display", "block");

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
			cardImgs.css("display", "block");

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
			cardImgs.css("display", "none");

          	$('.stationery-picker').selectpicker('refresh');
          	$('.service-picker').selectpicker('refresh');
		}
		if (event.indexOf("Bar/Bat Mitzvah") >= 0) { 
			console.log("bar bat mitzvah");

			$('.stationery-picker').prop('disabled',false);
			announce.removeAttr('disabled');
			celeb.removeAttr('disabled');
			gift.removeAttr('disabled');
			invite.removeAttr('disabled');
			statImg.css("display", "block");
			cardImgs.css("display", "block");

			shower.attr('disabled', '');
			ack.attr('disabled', '');
			date.attr('disabled', '');
			$(".wedding-notice").hide();

			$('.stationery-picker').selectpicker('refresh');
          	$('.service-picker').selectpicker('refresh');
		}
		if (event.indexOf("Bridal") >= 0) { //SHOW INVITE & GIFT. STATIONERY
			$('.stationery-picker').prop('disabled',false);
			invite.removeAttr('disabled');
			gift.removeAttr('disabled');
			statImg.css("display", "block");
			cardImgs.css("display", "block");

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
			cardImgs.css("display", "block");

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
			cardImgs.css("display", "block");

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
		var service = $(this).val().toString().replace(/[^a-z0-9\s]/gi, '');
		// var replaced = service.replace(/[^a-z0-9\s]/gi, '');
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
	var paybtn = $('.paypal-btn');
	var paybtn1 = $('#paypal-btn1');
	var paybtn2 = $('#paypal-btn2');
	var quantpick = $('.quantity-picker');
	var addpick = $('.addon-picker');

	addpick.prop('disabled',true);
	addpick.selectpicker('refresh');

	quantpick.prop('disabled',true);
	quantpick.selectpicker('refresh');

	paybtn.click(function(e) {
		if($(this).hasClass('disabled')) {
		   e.preventDefault();
		}
	});

	quantpick.change(function() {
		var quantity = $(this).val();
		if (name.val().trim().length >= 3) {
			paybtn1.removeClass('disabled');
			$(this).unbind('click');
			addpick.prop('disabled',false);
			addpick.selectpicker('refresh');
		}
		if(quantity === null) {
			paybtn1.addClass('disabled');
			paybtn2.addClass('disabled');
			addpick.prop('disabled',true);
			addpick.selectpicker('refresh');
		}
	});

	name.on('input', function(){
		if (quantpick.val() === null && name.val().trim().length < 3) {
			paybtn1.addClass('disabled');
			paybtn2.addClass('disabled');
			addpick.prop('disabled',true);
			addpick.selectpicker('refresh');
		}
		else if(quantpick.val() !== null && name.val().trim().length >= 3) {
			paybtn1.removeClass('disabled');
			$(this).unbind('click');
			addpick.prop('disabled',false);
			addpick.selectpicker('refresh');
		}
		else {
			paybtn1.addClass('disabled');
			paybtn2.addClass('disabled');
		}
	});

	paybtn1.click(function(){
		if(!paybtn1.hasClass('disabled')) {
			paybtn2.removeClass('disabled');
			addpick.prop('disabled',false);
			addpick.selectpicker('refresh');
		}
	});

	$('#quantity-form').submit(function(e){
		if($('.event-picker').val() === null || $('.service-picker').val() === null || $('.service-picker').val().length < 1 || $('.service-picker').val() === "null") {
			alert("Please make sure all available options of the Customizer are filled out before placing your order.");
			e.preventDefault();
		}
		$('#paypal-name-hidden').val("Name: " + name.val() + "; Event: " + $('.event-picker').val() + "; Type: " + $('.service-picker').val() + "; Font: " + $('.font-picker').val() + "; Image: " + $('.stationery-picker').val() + "; Calligraphy: " + $('.calligraphy-picker').val());
		console.log($('#paypal-name-hidden').val());
	});

});