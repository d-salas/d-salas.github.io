$( document ).ready(function() {

		//////// SIZING FIXES //////////

		var h = $("#info").outerHeight(); 
		var w = $("#info").outerWidth();
		$("#amyimg").css('height', h);
		$("#amyimg").css('width', w-1);

		var o = $("#topnav").height(); //offset for topnav
		o = o * (-1);

		$( window ).resize(function() {
			var h2 = $("#info").outerHeight(); 
			var w2 = $("#info").outerWidth();
			$("#amyimg").css('height', h2);
			$("#amyimg").css('width', w2-1);

			var o = $("#topnav").height();
			o = o * (-1); //recalculates offset for topnav on resize
		});

		//////// "SCROLL TO" FUNCTIONALITY /////////
		$('.abt').click(function(evn)
		{
			evn.preventDefault(); 

			$(window).scrollTo($('#about'), 700, { offset: o });
		});
		$('.pfol').click(function(evn)
		{
			evn.preventDefault(); 

			$(window).scrollTo($('#portfolio'), 700, { offset: o });
		});
		$('.totop').click(function(evn)
		{
			evn.preventDefault(); 

			$(window).scrollTo($('#top'), 700);
		});
		$('.serv').click(function(evn)
		{
			evn.preventDefault(); 

			$(window).scrollTo($('#services'), 700, { offset: o });
		});
		$('#down').click(function(evn)
		{
			evn.preventDefault(); 

			$(window).scrollTo($('#about'), 700, { offset: o });
		});
		$('.cont').click(function(evn)
		{
			evn.preventDefault(); 

			$(window).scrollTo($('#contact'), 700, { offset: o });
		});
		$('#inf-down').click(function(evn)
		{
			evn.preventDefault(); 

			$(window).scrollTo($('#portfolio'), 700, { offset: o });
		});


		//////// STICKY NAVBAR ////////
		$('#topnav').affix({
			offset: {
				top: 0
			}
		});

		////// PORTFOLIO SLIDESHOW ///////

		$("#portfolio").backstretch([
			"./img/port1.jpg",
			"./img/port2.jpg",
			"./img/port3.jpg",
			"./img/port4.jpg",
			"./img/port6.jpg",
			// "./img/port3.jpg",
			], {
				fade: 500,
				duration: 5000
			});

		$('#next-btn').click(function(evn)
		{
			evn.preventDefault();

			$("#portfolio").backstretch("next");
		});

		$('#prev-btn').click(function(evn)
		{
			evn.preventDefault(); 
			
			$("#portfolio").backstretch("next");
		});		

		///// PARALLAX ///////

		//$("#services").backstretch("./img/salon.jpg");

		var width1 = $(window).width();

		
		$.stellar({
  			horizontalOffset: 100,
	  		horizontalScrolling: false,
	  		responsive: true
		});

		$( window ).resize(function() {
			$.stellar('refresh');
		});

	});