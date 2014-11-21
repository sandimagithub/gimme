// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
// Namespace
var Wishes = {};

Wishes.loadItems= function(wishlist_id){
	window.id = wishlist_id;
		$.ajax({
			url: "/items",
			data: {"item":
				{ 
					wishlist_id: id,  
				}
			},
			error: function(){
				console.log("error");
			},
			success: function(items){
				console.log("success");
				items.forEach(function(item){Wishes.addItem(item);});
				getListLength();
			}
		});
	// items.forEach(function(){
	// 	console.log(items);
	// 	var itemHTML = HandlebarsTemplates["new_item"]
	// });
	Wishes.addItemSlot();
};

Wishes.addItemSlot = function(){
	var list = $(".forms");
	var formHTML = HandlebarsTemplates["new_form"];
	list.append(formHTML);
};

Wishes.addItem = function(item){
	console.log(item);
	var list = $(".items");
	var itemHTML = HandlebarsTemplates["new_item"]({name:item.title, pic:item.img_url, description:item.description, url:item.url});
	list.append(itemHTML);
};


Wishes.submitItem = function(itemId){
	console.log(itemId);
	console.log("you got inside of submitItem");
	var name = $("#name").val();
	var url = $("#url").val();
	var pic = $("#pic").val();
	var description = $("#description").val();
	console.log(id,name,pic);
		$.ajax({
			method: "post",
			url: "/items",
			data: {"item":
				{ 
					wishlist_id: id,  
					title: name,
					description: description,
					url: url, 
					img_url: pic
				}
			},
			error: function(){
				console.log("error");
			},
			success: function(){
				console.log("success");
				Wishes.addItem({title:name,img_url:pic});
			}
		});
	$("#name").val("");
	$("#pic").val("");
	$("#description").val("");
	$("#url").val("");
};

function getListLength() {
		var itemlist = document.getElementsByClassName('listitem');
		console.log(itemlist.length);
	}
 
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