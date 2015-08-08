/*jshint undef:false */

$( document ).ready(function() {

	//// Affix the navbar ////
	// $('#esp-nav').affix({
	// 	offset: {
	// 		top: 10
	// 	}
	// });
	
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

	var letters = ['img/letter-1.png', 'img/letter-2.png', 'img/letter-3.png'];
        var index = 0,
        $img = $('#letter-img');

    $('#letter-div').height($img.height());

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
	$(window).resize(function() {
	    $('#letter-div').height($img.height());
	});

    
    // setInterval(function ()
    // {
    //     $div.fadeOut(function ()
    //     {
    //         $div.attr("src", letters[i]);

    //     });
    // }, 1500);



	// var overlayheight = $("overlay").height();
 //    $("#sidebar").height(bodyheight);

	// for the window resize
	// $(window).resize(function() {
	//     var bodyheight = $(document).height();
	//     $("#sidebar").height(bodyheight);
	// });


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