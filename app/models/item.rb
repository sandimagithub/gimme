class Item < ActiveRecord::Base
	belongs_to :user
	belongs_to :wishlist
	validates :wishlist, 
		presence: true
	validates :title,
		presence: true
end
