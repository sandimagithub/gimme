var Gimme = {};

$(document).ready(function () {

//calendar selector
	$(function() {
		$( "#datepicker" ).datepicker();
	});
});
// close document ready



//when you click the add item button this function opens up the form, 
//hides the button and shows a button that will submit the form

// Called when '+new item' is pressed
Gimme.addNewItem = function() {
	console.log('doin it');
	$('.firstwishbutton').addClass('hide');
	$('#newcontainer').removeClass('hide');
	$('#name').focus();
};

// Called when 'More' footer button is pressed
var open=false;
Gimme.showMenu = function() {
	if (!open) {
		$('.menu').animate({'bottom': '0%'}, 400);
		open=true;
	} else {
		$('.menu').animate({'bottom': '-100%'}, 400);
		open=false;
		$('.morebutton').removeClass('ui-btn-active');
	}
};
