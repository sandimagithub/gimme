// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
// Namespace
var Wishes = {};

Wishes.loadItems= function(wishlist_id, user_id){
	window.wishlist_id = wishlist_id;
	window.user_id = user_id;
	//this allows us to acces the id's of the wishlist and the loged in user
	// anywhere in our javascript


		//this is the ajax call to get the items from the server
		$.ajax({
			url: "/items",
			data: {"item":
				{ 
					//it sends the wishlist id so as to get the items associated 
					//with the current wishlist
					wishlist_id: wishlist_id,  
				}
			},
			error: function(){
				console.log("error");
			},
			success: function(items){
				//if the ajax query succeds add each item to the page
				console.log("success");
				items.forEach(function(item){Wishes.addItem(item);});
				getListLength();
			}
		});

	//adds the form to add more items
	//if the current user isn't the owner they won't find .forms and 
	//so this function call won't do anything
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
	$('.firstwishbutton').removeClass('hide');
	$('#newcontainer').addClass('hide');
	console.log(itemId);
	console.log("you got inside of submitItem");
	var name = $("#name").val();
	var url = $("#url").val();
	var pic = $("#pic").val();
	var description = $("#description").val();
	console.log(wishlist_id,name,pic,description,url);
		$.ajax({
			method: "post",
			url: "/items",
			data: {"item":
				{ 
					wishlist_id: wishlist_id,  
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
				console.log("description is "+description);
				Wishes.addItem({title:name,img_url:pic,description:description,url:url});
				console.log("done adding");
			}
		});
	$("#name").val("");
	$("#pic").val("");
	$("#description").val("");
	$("#url").val("");
};

$('#listhead').click(function() {
		console.log("clicked");
		$(this).find('#listinfo').removeClass('hide');
	});

// PSUEDOCODE FOR CLAIMING AN ITEM
// need to get current user's id
// ==================================
// Wishes.claimItem = function(clickedLi, itemId, userId) {
// 	if (isUnclaimed(clickedLi)) {
// 		console.log("claiming list item "+clickedLi);
// 		clickedLi.addClass('claimed');
// 		var thisItem = Item.find_by_id(itemId);
// 		thisItem.user_id = userId;
// 	}
// };

// function isUnclaimed(clickedLi) {
// 	for (var cls in clickedLi.classList) {
// 		if (cls === "claimed") {
// 			return false;
// 		}
// 	}
// }

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