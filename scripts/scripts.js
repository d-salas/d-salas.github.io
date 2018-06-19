$(document).ready(function(){
	if(window.console) {
		var console = window.console;
	}

	var previous = $('#previous-work');
	var contact = $('#contact');

	previous.on('click', function(){
		// console.log('clicked the menu');
		previous.toggleClass('menu-open');
		$('.work-menu').toggleClass('menu-open');

		contact.removeClass('menu-open');
		$('.contact-menu').removeClass('menu-open');
	});


	contact.on('click', function(){
		contact.toggleClass('menu-open');
		$('.contact-menu').toggleClass('menu-open');

		previous.removeClass('menu-open');
		$('.work-menu').removeClass('menu-open');
	});
});