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

	$('.secondwishbutton').click(function() {
		console.log('doin it again');
		$('.firstwishbutton').removeClass('hide');
		$('#newcontainer').addClass('hide');
	});

	$('#listhead').click(function() {
		console.log("clicked");
		$(this).find('#listinfo').removeClass('hide');
	});

	// $('#loginbutton').click(function() {
	// var newWindow = window.open('', '_self', ''); //open the current window
 //    window.close(url);
	// });

});
// close document ready