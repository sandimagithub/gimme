var Gimme = {};

$(document).ready(function () {

	$(function() {
		$( "#datepicker" ).datepicker();
	});



	// $('#loginbutton').click(function() {
	// var newWindow = window.open('', '_self', ''); //open the current window
 //    window.close(url);
	// });

});
// close document ready

Gimme.addNewItem = function() {
	console.log('doin it');
	$('.firstwishbutton').addClass('hide');
	$('#newcontainer').removeClass('hide');
	$('#name').focus();
};

var open=false;
Gimme.showMenu = function() {
	console.log(open);
	if (!open) {
		$('.menu').animate({'bottom': '0%'}, 400);
		open=true;
	} else {
		$('.menu').animate({'bottom': '-100%'}, 400);
		open=false;
	}
};