class WishlistsController < ApplicationController

	def new
		@pic = session[:pic]
		@wishlist = Wishlist.new
	end

	def create
		wishlist = Wishlist.create(get_wishlist_params)
		render json: wishlist
	end


	private

	def get_wishlist_params
		params.require(:wishlist).permit(:title, :date, :description, :kind)
	end
end
