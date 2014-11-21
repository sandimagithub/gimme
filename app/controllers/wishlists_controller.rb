class WishlistsController < ApplicationController

	def index
    @wishlists = Wishlist.all
    @new_wishlist = Wishlist.new
	end

	def new
		if (session[:user_id] == nil)
			redirect_to signup_path
		else
			@wishlist = Wishlist.new
			@pic = session[:pic]
		end
	end

	def create
		if (session[:user_id] == nil)
			redirect_to signup_path
		else
			@wishlist = Wishlist.new(get_wishlist_params)
			if @wishlist.save
				redirect_to @wishlist
				@wishlist.user = User.find(session[:user_id])
				@wishlist.save
			else
				redirect_to Wishlist
			end
		end
	end

	def show
		if (session[:user_id] == nil)
			redirect_to "signup_path"
		else
			@wishlist = Wishlist.find(params[:id])
			@this_items = @wishlist.items
			@belongstouser = false
			if session[:user_id] == @wishlist.user_id
				@belongstouser = true
			else
				@wishlistowner = User.find(@wishlist.user_id)
				@user_id = session[:user_id]
			end
		end
	end

def destroy
	wishlist = Wishlist.find(params[:id])
	wishlist.destroy
	redirect_to wishlists_path
end

	private

	def get_wishlist_params
		params.require(:wishlist).permit(:title, :date, :description, :kind)
	end
end
