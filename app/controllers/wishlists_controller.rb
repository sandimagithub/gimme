class WishlistsController < ApplicationController

	def index
    @wishlists = Wishlist.all
    @new_wishlist = Wishlist.new
	end

	def new
		@wishlist = Wishlist.new
		@pic = session[:pic]
	end

	def create
		@wishlist = Wishlist.new(get_wishlist_params)
		if @wishlist.save
			redirect_to @wishlist
			@wishlist.user = User.find(session[:user_id])
			@wishlist.save
		else
			redirect_to Wishlist
		end
	end

	def show
		@wishlist = Wishlist.find(params[:id])
		if session[:user_id] == @wishlist.user_id
			@this_items = @wishlist.items
		else
			redirect_to "/"
	end

	private

	def get_wishlist_params
		params.require(:wishlist).permit(:title, :date, :description, :kind)
	end
end
