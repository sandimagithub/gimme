class WishlistsController < ApplicationController

	def index
    @wishlists = Wishlist.all
    @new_wishlist = Wishlist.new

  end

	def new
		@pic = session[:pic]
		@wishlist = Wishlist.new
	end

	def create
		@wishlist = Wishlist.create(get_wishlist_params)
		redirect_to wishlist_path(@wishlist.id)
	end

	def show
		@wishlist = Wishlist.find(params["id"])
	end


	private

	def get_wishlist_params
		params.require(:wishlist).permit(:title, :date, :description, :kind)
	end
end
