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
	
  	$("span:contains(Wedding)").parent().click(function() {
		console.log("Wedding selected");
	    // $('.font-picker').find('[value=Rochester]').remove();
	    // $('.font-picker').selectpicker('refresh');
  	});

  	// This isn't really working
  	if ($("span:contains(Wedding)").parent().parent().hasClass('selected')) {
		console.log("Wedding");
		$('.calligraphy-picker').prop('disabled',false);
	    $('.calligraphy-picker').selectpicker('refresh');
  	} 
  	else {
  		$('.calligraphy-picker').prop('disabled',true);
	    $('.calligraphy-picker').selectpicker('refresh');
  	}

  	// CHANGE FONTS BASED ON DROPDOWN SELECTION
  	$(".font-picker").change(function() {
    	//alert($(this).val());
    	$("#sample-letter>p").css("font-family", $(this).val());
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