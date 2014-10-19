$( document ).ready(function() {
		$('#main').hide();

		// Get some initial dimensions
		var height = $(window).height();
		var width = $(window).height();
		var navheight = $('.nav').height();
		var contentheight= $('#abtcnt').height();

		$('.section1').height(height); // Make each section fill the screen

		// Show the content at the proper size when the arrow is clicked
		$('#down').click(function(evn)
		{
			evn.preventDefault();
			var width = $(window).width();

			$('#main').show("fast",function() {
				if(width>500) {$('.section2').height(height+navheight);}
				else $('.section2').height(height+navheight+(contentheight/1.5));
				$(window).scrollTo($('#main'), 500);
			});
		});

		$('.totop').click(function(evn)
		{
			evn.preventDefault();

			$(window).scrollTo($('#resumenav'), 300);
		});

		$(function () { 
			$("[data-toggle='tooltip']").tooltip(); 
		});

		// This fixes the nav-justified bug in webkit
		$(window).bind('resize', function(){
    		var w = $(this).width(),
        	threshold = 768;

        	if(w < threshold){
            $('.nav-justified').hide().fadeIn();
        }
		});
	});