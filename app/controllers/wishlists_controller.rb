class WishlistsController < ApplicationController

	def index
		@wishlists = Wishlist.all
	end

	def new
		@wishlist = Wishlist.new
		@pic = session[:pic]
	end

	def create
		@wishlist = Wishlist.new(get_wishlist_params)
		if @wishlist.save
			redirect_to @wishlist
		else
			redirect_to Wishlist
		end
	end

	def show
		@wishlist = Wishlist.find(params[:id])
	end

	private

	def get_wishlist_params
		params.require(:wishlist).permit(:title, :date, :description, :kind)
	end
end
