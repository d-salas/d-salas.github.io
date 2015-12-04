// jshint undef:false 

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
	$("#down-icon").click(function(){
    	$("#menu-icon").toggleClass("down"); 
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
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/alphabet-letter.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/alphabet-letter.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Ampersand") { 
  			statImg.fadeOut();
  			loader.css("display", "block");

  			// statImg.attr("src", "./img/cards/ampersand.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/ampersand.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Ballerina Mouse") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/ballerina-mouse.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/ballerina-mouse.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Beauty (Chinese characters)") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/chinese-beauty.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/chinese-beauty.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Bicycle") { 
  			statImg.fadeOut(10);
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/bicycle.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/bicycle.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Books") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/books.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/books.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Bowtie") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/bowtie.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/bowtie.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Dress") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/dress.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/dress.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Frog") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/frog.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/frog.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Gold Mouse") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/mouse.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/mouse.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Lion") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/lion.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/lion.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Mermaid") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/mermaid.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/mermaid.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Nest") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/nest.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/nest.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Pocketwatch") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/pocketwatch.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/pocketwatch.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Roadster") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/roadster.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/roadster.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
				loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Sailboat") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/sailboat.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/sailboat.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Savannah Tree") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/savannahtree.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/savannahtree.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Skyline") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/skyline.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/skyline.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Tent") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/tent.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/tent.png");}, 500);
			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Turtle") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/turtle.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/turtle.png");}, 500);
  			window.setTimeout(function(){
				statImg.fadeIn();
				loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Wreath") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/wreath.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/wreath.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Yoga Pose") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			// statImg.attr("src", "./img/cards/yogapose.png");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/yogapose.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}
  		if (pic === "Zebra") { 
  			statImg.fadeOut();
  			loader.css("display", "block");
  			window.setTimeout(function(){ statImg.attr("src", "./img/cards/zebra.png");}, 500);
  			window.setTimeout(function(){
	  			statImg.fadeIn();
	  			loader.fadeOut();
  			}, 800);
  		}  		
	});  	

	//Correspondence type
	var celeb = $('option:contains(Celebration invitation)');
	var shower = $('option:contains(Shower invitation)');
	var ack = $('option:contains(Acknowledgement)');
	var announce = $('option:contains(Announcement)');
	var date = $('option:contains(Save the date)');
	var gift = $('option:contains(Gift acknowledgement)');
	var invite = $('option:contains(Invitation)');

	//Correspondence images
	var alphabetLetter = $('option:contains(Alphabet Letter)');
	var ampersand = $('option:contains(Ampersand)');
	var ballerina = $('option:contains(Ballerina Mouse)');
	var chinese = $('option:contains(Chinese)');
	var bicycle = $('option:contains(Bicycle)');
	var books = $('option:contains(Books)');
	var bowtie = $('option:contains(Bowtie)');
	var dress = $('option:contains(Dress)');
	var frog = $('option:contains(Frog)');
	var goldMouse = $('option:contains(Gold Mouse)');
	var lion = $('option:contains(Lion)');
	var mermaid = $('option:contains(Mermaid)');
	var nest = $('option:contains(Nest)');
	var pocketwatch = $('option:contains(Pocketwatch)');
	var roadster = $('option:contains(Roadster)');
	var sailboat = $('option:contains(Sailboat)');
	var tree = $('option:contains(Savannah Tree)');
	var skyline = $('option:contains(Skyline)');
	var tent = $('option:contains(Tent)');
	var turtle = $('option:contains(Turtle)');
	var wreath = $('option:contains(Wreath)');
	var yoga = $('option:contains(Yoga Pose)');
	var zebra = $('option:contains(Zebra)');
	var noimage = $('option:contains(No image)');

	// var eventForm = $('#event-form');
	// var typeForm = $('#type-form');
	// var fontForm = $('#font-form');
	// var stationeryForm = $('#stationery-form');
	// var calligraphyForm = $('#calligraphy-form');

	var cardImgs = $('.card-images');

	noimage.attr('disabled', '');

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
			event = "nothing";
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

			// Which images to show:
			ballerina.removeAttr('disabled');
			tent.removeAttr('disabled');
			frog.removeAttr('disabled');
			lion.removeAttr('disabled');
			mermaid.removeAttr('disabled');
			goldMouse.removeAttr('disabled');
			alphabetLetter.removeAttr('disabled');
			turtle.removeAttr('disabled');
			zebra.removeAttr('disabled');


			// Which images to hide:
			ampersand.attr('disabled', '');
			chinese.attr('disabled', '');
			bicycle.attr('disabled', '');
			books.attr('disabled', '');
			bowtie.attr('disabled', '');
			dress.attr('disabled', '');
			nest.attr('disabled', '');
			pocketwatch.attr('disabled', '');
			roadster.attr('disabled', '');
			sailboat.attr('disabled', '');
			tree.attr('disabled', '');
			skyline.attr('disabled', '');
			wreath.attr('disabled', '');
			yoga.attr('disabled', '');
			noimage.attr('disabled', '');

			// What else to hide
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

			// Which images to show:
			ampersand.removeAttr('disabled');
			chinese.removeAttr('disabled');
			skyline.removeAttr('disabled');
			alphabetLetter.removeAttr('disabled');
			nest.removeAttr('disabled');
			wreath.removeAttr('disabled');
			roadster.removeAttr('disabled');

			// Which images to hide:
			ballerina.attr('disabled', '');
			bicycle.attr('disabled', '');
			books.attr('disabled', '');
			bowtie.attr('disabled', '');
			dress.attr('disabled', '');
			frog.attr('disabled', '');
			goldMouse.attr('disabled', '');
			lion.attr('disabled', '');
			mermaid.attr('disabled', '');
			pocketwatch.attr('disabled', '');
			sailboat.attr('disabled', '');
			tree.attr('disabled', '');
			tent.attr('disabled', '');
			turtle.attr('disabled', '');
			yoga.attr('disabled', '');
			zebra.attr('disabled', '');
			noimage.attr('disabled', '');

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

			// No images shown. If necessary, use the ones from engagement.
			noimage.removeAttr('disabled');
			$('.stationery-picker').val("No image");

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
			// console.log("bar bat mitzvah");

			$('.stationery-picker').prop('disabled',false);
			announce.removeAttr('disabled');
			celeb.removeAttr('disabled');
			gift.removeAttr('disabled');
			invite.removeAttr('disabled');
			statImg.css("display", "block");
			cardImgs.css("display", "block");

			// Which images to show:
			bowtie.removeAttr('disabled');
			skyline.removeAttr('disabled');
			books.removeAttr('disabled');
			alphabetLetter.removeAttr('disabled');
			chinese.removeAttr('disabled');
			dress.removeAttr('disabled');
			yoga.removeAttr('disabled');

			// Which images to hide:
			ampersand.attr('disabled', '');
			ballerina.attr('disabled', '');
			bicycle.attr('disabled', '');
			frog.attr('disabled', '');
			goldMouse.attr('disabled', '');
			lion.attr('disabled', '');
			mermaid.attr('disabled', '');
			nest.attr('disabled', '');
			pocketwatch.attr('disabled', '');
			roadster.attr('disabled', '');
			sailboat.attr('disabled', '');
			tree.attr('disabled', '');
			tent.attr('disabled', '');
			turtle.attr('disabled', '');
			wreath.attr('disabled', '');
			zebra.attr('disabled', '');
			noimage.attr('disabled', '');

			shower.attr('disabled', '');
			ack.attr('disabled', '');
			date.attr('disabled', '');
			$(".wedding-notice").hide();

			$('.stationery-picker').selectpicker('refresh');
          	$('.service-picker').selectpicker('refresh');
		}
		if (event.indexOf("Birthday") >= 0) { 
			// console.log("birthday");

			$('.stationery-picker').prop('disabled',false);
			announce.removeAttr('disabled');
			celeb.removeAttr('disabled');
			gift.removeAttr('disabled');
			invite.removeAttr('disabled');
			statImg.css("display", "block");
			cardImgs.css("display", "block");

			// Which images to show:
			ballerina.removeAttr('disabled');
			tent.removeAttr('disabled');
			frog.removeAttr('disabled');
			lion.removeAttr('disabled');
			mermaid.removeAttr('disabled');
			goldMouse.removeAttr('disabled');
			alphabetLetter.removeAttr('disabled');
			turtle.removeAttr('disabled');
			zebra.removeAttr('disabled');
			chinese.removeAttr('disabled');
			nest.removeAttr('disabled');
			skyline.removeAttr('disabled');
			wreath.removeAttr('disabled');
			tree.removeAttr('disabled');
			bowtie.removeAttr('disabled');
			books.removeAttr('disabled');
			pocketwatch.removeAttr('disabled');
			sailboat.removeAttr('disabled');
			dress.removeAttr('disabled');
			mermaid.removeAttr('disabled');
			yoga.removeAttr('disabled');
			bicycle.removeAttr('disabled');

			// Which images to hide:
			ampersand.attr('disabled', '');
			roadster.attr('disabled', '');
			noimage.attr('disabled', '');

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

			// Which images to show:
			chinese.removeAttr('disabled');
			nest.removeAttr('disabled');
			skyline.removeAttr('disabled');
			wreath.removeAttr('disabled');
			alphabetLetter.removeAttr('disabled');
			ampersand.removeAttr('disabled');

			// Which images to hide:
			ballerina.attr('disabled', '');
			bicycle.attr('disabled', '');
			books.attr('disabled', '');
			bowtie.attr('disabled', '');
			dress.attr('disabled', '');
			frog.attr('disabled', '');
			goldMouse.attr('disabled', '');
			lion.attr('disabled', '');
			mermaid.attr('disabled', '');
			pocketwatch.attr('disabled', '');
			roadster.attr('disabled', '');
			sailboat.attr('disabled', '');
			tree.attr('disabled', '');
			tent.attr('disabled', '');
			turtle.attr('disabled', '');
			yoga.attr('disabled', '');
			zebra.attr('disabled', '');
			noimage.attr('disabled', '');

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

			// Which images to show:
			chinese.removeAttr('disabled');
			skyline.removeAttr('disabled');
			dress.removeAttr('disabled');
			alphabetLetter.removeAttr('disabled');
			yoga.removeAttr('disabled');
			bowtie.removeAttr('disabled');
			skyline.removeAttr('disabled');
			books.removeAttr('disabled');
			pocketwatch.removeAttr('disabled');
			roadster.removeAttr('disabled');

			// Which images to hide:
			ampersand.attr('disabled', '');
			ballerina.attr('disabled', '');
			bicycle.attr('disabled', '');
			frog.attr('disabled', '');
			goldMouse.attr('disabled', '');
			lion.attr('disabled', '');
			mermaid.attr('disabled', '');
			nest.attr('disabled', '');
			sailboat.attr('disabled', '');
			tree.attr('disabled', '');
			tent.attr('disabled', '');
			turtle.attr('disabled', '');
			wreath.attr('disabled', '');
			zebra.attr('disabled', '');
			noimage.attr('disabled', '');

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

			// Which images to show:
			chinese.removeAttr('disabled');
			nest.removeAttr('disabled');
			lion.removeAttr('disabled');
			zebra.removeAttr('disabled');
			skyline.removeAttr('disabled');
			alphabetLetter.removeAttr('disabled');
			roadster.removeAttr('disabled');

			// Which images to hide:
			ampersand.attr('disabled', '');
			ballerina.attr('disabled', '');
			bicycle.attr('disabled', '');
			books.attr('disabled', '');
			bowtie.attr('disabled', '');
			dress.attr('disabled', '');
			frog.attr('disabled', '');
			goldMouse.attr('disabled', '');
			mermaid.attr('disabled', '');
			pocketwatch.attr('disabled', '');
			sailboat.attr('disabled', '');
			tree.attr('disabled', '');
			tent.attr('disabled', '');
			turtle.attr('disabled', '');
			wreath.attr('disabled', '');
			yoga.attr('disabled', '');
			noimage.attr('disabled', '');

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
		var service = "";
		if ( $(this).val() !== null) {
			service = $(this).val().toString().replace(/[^a-z0-9\s]/gi, '');
		}
		else {
			service = "nothing";
		}

		// if (service === "Announcement" || service === "Celebration invitation" || service === "Invitation" || service === "Save the date" || service === "Shower invitation"){
		// 	// console.log("one of those");
		// 	$('.calligraphy-picker').prop('disabled',false);
		// 	$('.calligraphy-picker').selectpicker('refresh');
		// }
		// else {
		// 	// console.log("not one of those");	
		// 	$('.calligraphy-picker').prop('disabled',true);
		// 	$('.calligraphy-picker').selectpicker('refresh');
		// }

		if (service === "nothing"){
			// console.log("null service");
		// 	$('.calligraphy-picker').prop('disabled',false);
		// 	$('.calligraphy-picker').selectpicker('refresh');
		}
		else {
		// 	// console.log("not one of those");	
		// 	$('.calligraphy-picker').prop('disabled',true);
		// 	$('.calligraphy-picker').selectpicker('refresh');
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
		if($('.event-picker').val() === null || $('.service-picker').val() === null || $('.service-picker').val().length < 1 || $('.service-picker').val() === "null" || $('.stationery-picker').val() === null) {
			$(".alert").alert("close");
			$("#required").after(
				'<div class="alert alert-danger text-center">' +
                    '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' +
		            '<strong>Uh oh!</strong> Please make sure all available options of the Customizer are filled out before placing your order.' +
				'</div>');


			$('html, body').animate({
	            scrollTop: $("#customizers").offset().top - 50
	        }, 1000);
			e.preventDefault();
		}

		$('#paypal-name-hidden').val("Name: " + name.val() + "; Event: " + $('.event-picker').val() + "; Type: " + $('.service-picker').val() + "; Font: " + $('.font-picker').val() + "; Image: " + $('.stationery-picker').val());
		console.log($('#paypal-name-hidden').val());
	});

});