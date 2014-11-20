// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
// Namespace
var Wishes = {};

// Fetch all items



// Add a book
Wishes.createWish = function(){
	var kind = undefined;
	$("input[name='kind']").each(function(x,y){
		if($(y).prop("checked")){
			kind = y.value;
		}
	});
	var title = $("#list_title").val();
	var date = $("#datepicker").val();
	console.log(kind, title, date);

	var id = $.ajax({
		method: "post",
		data: {"wishlist":
			{
				kind: kind, 
				title: title, 
				date: date
			}
		},
		error: function(){
			console.log("error");
		},
		success: function(){
			console.log("success");
			Wishes.addItemSlot();
		}
	});
	console.log("id is ",id.responseJSON,id);
};



// add Item slot is a closure index using function and as such on 
// it's first call it will redefine itself
// var count = function(){
//   var index = 0;
//   count = function(){
//     console.log(index);
//     index ++;
//   }
//   count()
// }

Wishes.addItemSlot = function(){
	var list = $(".items");
	var index = 0;
	Wishes.addItemSlot = function(){
		var itemHTML = HandlebarsTemplates["new_item"]({index: index});
		index++;
		list.append(itemHTML);
	};
	Wishes.addItemSlot();
};

Wishes.submitItem = function(id){
	var name = $("#"+id+"name");
	var pic = $("#"+id+"pic");
	debugger
		// $.ajax({
		// 	method: "post",
		// 	data: {"item":
		// 		{ 
		// 			wishlist_id: hi,  //needs to be implemented, will require getting the wishlist id through params
		// 			title: name, 
		// 			image_url: pic
		// 		}
		// 	},
		// 	error: function(){
		// 		console.log("error");
		// 	},
		// 	success: function(){
		// 		console.log("success");
		// 		Wishes.addItemSlot();
		// 	}
		// });
	Wishes.addItemSlot();
};
 
// // Delete a book
// Wishes.deleteBook = function(id) {
// 	console.log(id);
// 	$.ajax({
// 	    url: "/books/"+id,
// 	    type: 'DELETE',
// 	    success: function(result) {
// 	    	$("."+id).remove();
// 	    }
// 	});
// };