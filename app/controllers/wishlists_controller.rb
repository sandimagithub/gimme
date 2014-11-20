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
			redirect_to signup_path
		else
			@wishlist = Wishlist.find(params[:id])
			if session[:user_id] == @wishlist.user_id
				@this_items = @wishlist.items
			else
				redirect_to "/"
			end
		end
	end

	private

	def get_wishlist_params
		params.require(:wishlist).permit(:title, :date, :description, :kind)
	end
end
