# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Item.destroy_all
Wishlist.destroy_all

items = Item.create([{title: 'shoe'}, {title: 'game', description: 'a cool game to play with your friends'}])
xmas = Wishlist.create(title: 'Christmas List')


items.each do |item|
	item.wishlist = xmas
end

xmas.user = User.first


##FFaker Example

# 1000.times do
# 	User.create(
# 		name: Faker.name,
# 		job: Faker.profession,
# 		location: Faker.city
# 	)
# end