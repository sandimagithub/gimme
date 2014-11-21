class ItemsController < ApplicationController
	
	def create
		@item = Item.new(get_item_params)
		if @item.save
			@item.wishlist = Wishlist.find(params[:item][:wishlist_id])
    	render json: @item
		end
	end

	def index
		@items = Wishlist.find(params[:item][:wishlist_id]).items
    render json: @items
	end

	def destroy
		item = Item.find(params[:id])
		item.destroy
		redirect_to wishlist_path
	end

	private

	def get_item_params
		params.require(:item).permit(:title, :wishlist_id, :img_url, :description, :url)
	end
end
