class HomeController < ApplicationController
   def index
    @wishlists = Wishlist.all
    @new_wishlist = Wishlist.new

  end
end
