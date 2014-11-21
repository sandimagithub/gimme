$(document).ready(function () {

	$(function() {
		$( "#datepicker" ).datepicker();
	});

	$('.firstwishbutton').click(function() {
		console.log('doin it');
		$('.firstwishbutton').addClass('hide');
		$('#newcontainer').removeClass('hide');
		$('#name').focus();
	});

	// $('#loginbutton').click(function() {
	// var newWindow = window.open('', '_self', ''); //open the current window
 //    window.close(url);
	// });

});
// close document ready