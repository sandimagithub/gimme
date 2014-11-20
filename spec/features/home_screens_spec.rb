require 'rails_helper'

feature "HomeScreens", :type => :feature do
  scenario "visiting the home page" do
    #1.)  set up phase-- provdie the page what we want to exist on the page
  	# factor girl provides a "create method"--this instantiates a new "wishlist" item in DB.
    wishlists = []
    3.times do |i|
      wishlists << create(:wishlist, title: "My Wishlist Title #{i}")
    end	

  	#2.)  exercise phase
    visit root_path

  	#3.) verification phase
    expect(page).to have_text("Current Wishlists")

    wishlists.each do |wish|
      expect(page).to have_text(wish.title)
    end
  end

  scenario "creating a wishlist from the  home screen" do
   	#1.) setup phase (user needs to go to that page before they can fill in a form)
    visit new_wishlist_path

  	#2.)  exercise phase (user is filling in something to a form now- from the capybara gem, we use "fill_in")
    fill_in "wishlist_title", with: "Wishlist #1"
    click_button "Create"  
  	#submitting the form is equivalent to "click_button"

  	#3.) verification phase
    expect(page).to have_text("Wishlist #1")

  end

end



