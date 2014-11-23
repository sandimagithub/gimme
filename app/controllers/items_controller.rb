class ItemsController < ApplicationController
	
	def index
		@items = Wishlist.find(params[:item][:wishlist_id]).items
    render json: @items
	end

	def create

		@item = Item.new(get_item_params)

		if @item.save
			@item.wishlist = Wishlist.find(params[:item][:wishlist_id])
    	render json: @item
		end
	end


	def update
		item = Item.find(params[:id])
		@item.update(item_params)
		redirect_to item_path

	def claim
		item = Item.find(params[:item][:item_id])
		item.user = User.find(params[:item][:user_id])
		item.save
		render json: item
	end

	def index
		@items = Wishlist.find(params[:item][:wishlist_id]).items
    render json: @items

	end

	def destroy
		item = Item.find(params[:id])
		item.destroy
		redirect_to item_path
	end

	private

	def get_item_params
		params.require(:item).permit(:title, :wishlist_id, :img_url, :description, :url)
	end
	
end
