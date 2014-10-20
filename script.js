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
			evn.preventDefault(); // Don't change the URL when these buttons are clicked
			var width = $(window).width();

			$('#main').show("fast",function() {
				if(width>500) {$('.section2').height(height+navheight);}
				else $('.section2').height(height+navheight+(contentheight/1.5));
				$(window).scrollTo($('#main'), 500);
			});
		});

		//style="text-align:center; width:45%;
		if( width > 700){
			$(".block").css("width","45%")
		}
		else
		{
			$(".block").css("width","100%")	
		}

		$('.totop').click(function(evn)
		{
			evn.preventDefault(); 

			$(window).scrollTo($('#resumenav'), 300);
		});

		$(function () { 
			$("[data-toggle='tooltip']").tooltip(); 
		});

		$(".fancybox").fancybox({
			openEffect	: 'none',
			closeEffect	: 'none'
		});

		// This fixes the nav-justified bug in webkit browsers
		$(window).bind('resize', function(){
    		var w = $(this).width(),
        	threshold = 768;

        	if(w < threshold){
            $('.nav-justified').hide().fadeIn();
        }
		});
	});