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




//when you click the add item button this function opens up the form 
//and hides the button and shows a button that will submit the form

Gimme.addNewItem = function() {
	console.log('doin it');
	$('.firstwishbutton').addClass('hide');
	$('#newcontainer').removeClass('hide');
	$('#name').focus();
};