// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
// Namespace
var Wishes = {};


Wishes.loadItems= function(wishlistId, userId){
	window.wishlistId = wishlistId;
	//userId is only passed in if the user isn't the owner
	window.userId = userId;
	//this allows us to acces the id's of the wishlist and the logged in user
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
			},
			success: function(items){
				//if the ajax query succeds add each item to the page
				console.log("load items success");
				items.forEach(function(item){Wishes.addItem(item);});

//===   change the color gradient here   ====
//=======  must be in hexcode form  =======
				addColors("#324D5B", "#AFBEC0");
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
	//because userId is only passed in if the user isn't the owner, 
	//if userId is around that means we want to see claimed items
	//and we only want to get the name of the person who claimed it if the item has 
	//been claimed if item doesn't have a user ID we can give it defualt formating
	if(item.user_id && userId){
		Wishes.getClaimName(item.user_id, function(user){
			claimName = user.name;
			console.log("claimName is",claimName);
			if(item.user_id === user.id){
				//unclaimable
				var itemHTML = HandlebarsTemplates["new_item"]({name:item.title, pic:item.img_url, description:item.description, url:item.url, userId:userId, itemId: item.id, claimName:claimName, unclaim:true});
			}else{
				//someone else claimed it
				var itemHTML = HandlebarsTemplates["new_item"]({name:item.title, pic:item.img_url, description:item.description, url:item.url, userId:userId, itemId: item.id, claimName:claimName});
			}
			var list = $(".items");
			
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
				callback(user);
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



Wishes.delete = function(itemId){
	var item = $("#"+itemId);
	item.remove();
	$.ajax({
		method: "delete",
		url: "/items/"+itemId,
		error: function(){
			console.log("delete item error");
		},
		success: function(data){
			console.log(data);
			console.log("delete item success");
		}
	});		
};

// function isUnclaimed(clickedLi) {
// 	for (var cls in clickedLi.classList) {
// 		if (cls === "claimed") {
// 			return false;
// 		}
// 	}
// }

function addColors(color, color2) {
	var litems = document.getElementsByClassName('listitem');
	var color3 = color;
	var gradient = setGradient(litems.length);
	document.getElementById('fix').style.backgroundColor = color;
	console.log("beginning gradient effect");
	console.log(gradient);
	for (var i=0; i<litems.length; i++) {
		color3 = shadeBlend(gradient, color, color2);
		color = color3;
		console.log(color);
		litems[i].style.backgroundColor = (color3);
	}
}

function setGradient(length) {
	if (length < 3) {
		return 0.5;
	} else if (length < 9) {
		return 0.2;
	} else if (length < 14) {
		return 0.09;
	} else {
		return 0.07;
	}
}

function shadeBlend(p,c0,c1) {
    var n=p<0?p*-1:p,u=Math.round,w=parseInt;
    if(c0.length>7){
        var f=c0.split(","),t=(c1?c1:p<0?"rgb(0,0,0)":"rgb(255,255,255)").split(","),R=w(f[0].slice(4)),G=w(f[1]),B=w(f[2]);
        return "rgb("+(u((w(t[0].slice(4))-R)*n)+R)+","+(u((w(t[1])-G)*n)+G)+","+(u((w(t[2])-B)*n)+B)+")"
    }else{
        var f=w(c0.slice(1),16),t=w((c1?c1:p<0?"#000000":"#FFFFFF").slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF;
        return "#"+(0x1000000+(u(((t>>16)-R1)*n)+R1)*0x10000+(u(((t>>8&0x00FF)-G1)*n)+G1)*0x100+(u(((t&0x0000FF)-B1)*n)+B1)).toString(16).slice(1)
    }
}







Wishes.loadUsersItems = function(userId){
	window.userId = userId;
		$.ajax({
			url: "/user/"+userId+"/json",
			data: {"id": userId
			},
			error: function(){
				console.log("load_items error");
			},
			success: function(items){
				//if the ajax query succeds add each item to the page
				console.log("load items success");
				items.forEach(function(item){Wishes.addItem(item);});
				getListLength();
				addColors();
			}
		});
};





Wishes.unclaim = function(itemId, page){
		var item = $("#"+itemId);
	if(page === "my items"){
		item.remove();
	}else{
		item.removeClass("claimed");
	}
	$.ajax({
		method: "delete",
		url: "/items/claim",
		data: {"item":
			{ 
				item_id: itemId,
			}
		},
		error: function(){
			console.log("unclaim error");
		},
		success: function(){
			console.log("unclaim success");
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


