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

Gimme.submitItem = function() {
	console.log('doin it again');
	$('.firstwishbutton').removeClass('hide');
	$('#newcontainer').addClass('hide');
};