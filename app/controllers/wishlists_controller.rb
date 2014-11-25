class WishlistsController < ApplicationController

	def index
		@user_id = session[:user_id]
	   @wishlists = Wishlist.all
	   @new_wishlist = Wishlist.new
	end

	def new
		if (session[:user_id] == nil)
			redirect_to signup_path
		else
			@user_id = session[:user_id]
			@wishlist = Wishlist.new
			@pic = session[:pic]
		end
	end

	def create
		if (session[:user_id] == nil)
			redirect_to signup_path
		else
			wish_params = wishlist_params.merge(user_id: session[:user_id])

			@wishlist = Wishlist.new(wish_params)
			if @wishlist.save
				redirect_to wishlist_path(@wishlist.id)
				@wishlist.user = User.find(session[:user_id])
			else
				redirect_to wishlists_path
			end
		end
	end

	def show
		if (session[:user_id] == nil)
			redirect_to signup_path
		else
			@user_id = session[:user_id]
			@wishlist = Wishlist.find(params[:id])
			@this_items = @wishlist.items
			# ATTEMPT TO SORT???
			# @this_items.sort_by { |i| i[:id] }
			# @this_items.each do |i|
			# 	puts "HELLOOOOO"
			# 	puts(i.id)
			# end
			@kind = @wishlist.kind
			@belongstouser = false
			if session[:user_id] == @wishlist.user_id
				@belongstouser = true
			else
				@wishlistowner = User.find(@wishlist.user_id)
				@nn_user_id = session[:user_id]
			end
		end
	end

	def edit
		@wishlist = Wishlist.find(params[:id]) 
	end

def update
	wishlist = Wishlist.find(params[:id])
	wishlist.update(wishlist_params)
	redirect_to wishlists_path
end

def destroy
	wishlist = Wishlist.find(params[:id])
	wishlist.destroy
	redirect_to wishlists_path
end

	private

	def wishlist_params
		params.require(:wishlist).permit(:title, :date, :description, :kind)
	end
	
end
