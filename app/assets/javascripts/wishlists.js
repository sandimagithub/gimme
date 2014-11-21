// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
// Namespace
var Wishes = {};

Wishes.loadItems= function(wishlistId, userId){
	window.wishlistId = wishlistId;
	window.userId = userId;
	//this allows us to acces the id's of the wishlist and the loged in user
	// anywhere in our javascript


		//this is the ajax call to get the items from the server
		$.ajax({
			url: "/items",
			data: {"item":
				{ 
					//it sends the wishlist id so as to get the items associated 
					//with the current wishlist
					wishlist_id: wishlistId,  
				}
			},
			error: function(){
				console.log("load_items error");
				debugger
			},
			success: function(items){
				//if the ajax query succeds add each item to the page
				console.log("load items success");
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
	console.log("item is ",item);
	var claimName = "123";
	if(item.user_id){
		Wishes.getClaimName(item.user_id, function(claimName){
			console.log("claimName is",claimName);
			var list = $(".items");
			var itemHTML = HandlebarsTemplates["new_item"]({name:item.title, pic:item.img_url, description:item.description, url:item.url, userId:userId, itemId: item.id, claimName:claimName});
			list.append(itemHTML);
		});
	}else{
		var list = $(".items");
		var itemHTML = HandlebarsTemplates["new_item"]({name:item.title, pic:item.img_url, description:item.description, url:item.url, userId:userId, itemId: item.id});
		list.append(itemHTML);
	}
};



Wishes.getClaimName = function(user_id, callback){
	$.ajax({
			url: "/sessions/user",
			data: {
				user_id: user_id
			},
			error: function(){
				console.log("find user error");
			},
			success: function(user){
				callback(user.name);
			}
		});
};







Wishes.submitItem = function(itemId){
	$('.firstwishbutton').removeClass('hide');
	$('#newcontainer').addClass('hide');
	console.log(itemId);
	console.log("you got inside of submitItem");
	console.log(wishlistId);
	var name = $("#name").val();
	var url = $("#url").val();
	var pic = $("#pic").val();
	var description = $("#description").val();
	console.log(wishlistId,name,pic,description,url);
		$.ajax({
			method: "post",
			url: "/items",
			data: {"item":
				{ 
					wishlist_id: wishlistId,  
					title: name,
					description: description,
					url: url, 
					img_url: pic
				}
			},
			error: function(){
				console.log("error");
			},
			success: function(item){
				console.log("submit success");
				console.log(item);
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

	Wishes.claim = function(itemId, userId){
		clickedLi = $("#"+itemId);
		var classes = clickedLi.attr('class').split(" ");
		if(classes.indexOf("claimed") === -1){
			console.log("claiming list item ",clickedLi);
			clickedLi.addClass("claimed");
			$.ajax({
				method: "post",
				url: "/items/claim",
				data: {"item":
					{ 
						user_id: userId,  
						item_id: itemId,
					}
				},
				error: function(){
					console.log("claim error");
				},
				success: function(){
					console.log("claim success");
				}
			});		
		}else{
			console.log("already claimed");
		}
	};

// function isUnclaimed(clickedLi) {
// 	for (var cls in clickedLi.classList) {
// 		if (cls === "claimed") {
// 			return false;
// 		}
// 	}
// }

function getListLength() {
		var itemlist = document.getElementsByClassName('listitem');
		console.log("list length is ",itemlist.length);
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



var count = function(){
	var index = 0;
	count = function(){
		index++;
		console.log(index);
	};
	count();
};








