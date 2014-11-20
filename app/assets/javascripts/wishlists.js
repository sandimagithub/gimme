// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
// Namespace
var Wishes = {};




// create a wishlist
// Wishes.createWish = function(){
// 	var kind = undefined;
// 	$("input[name='kind']").each(function(x,y){
// 		if($(y).prop("checked")){
// 			kind = y.value;
// 		}
// 	});
// 	var title = $("#list_title").val();
// 	var date = $("#datepicker").val();
// 	console.log(kind, title, date);

// 	var id = $.ajax({
// 		method: "post",
// 		data: {"wishlist":
// 			{
// 				kind: kind, 
// 				title: title, 
// 				date: date
// 			}
// 		},
// 		error: function(){
// 			console.log("error");
// 		},
// 		success: function(){
// 			console.log("success");
// 			Wishes.addItemSlot();
// 		}
// 	});
// 	console.log("id is ",id.responseJSON,id);
// };



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

Wishes.addItemSlot = function(wishlist_id){
	var list = $(".forms");
	var index = 0;
	window.id = wishlist_id;
	Wishes.addItemSlot = function(){
		console.log("index is ",index);
		var itemHTML = HandlebarsTemplates["new_item"]({id: index});
		index++;
		list.append(itemHTML);
	};
	Wishes.addItemSlot();
};

Wishes.submitItem = function(itemId){
	console.log(itemId);
	console.log("you got inside of submitItem");
	var name = $("#"+itemId+"name").val();
	var pic = $("#"+itemId+"pic").val();
	console.log(id,name,pic);
		$.ajax({
			method: "post",
			url: "/items",
			data: {"item":
				{ 
					wishlist_id: id,  
					title: name, 
					img_url: pic
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