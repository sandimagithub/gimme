class SessionsController < ApplicationController


  def signup
    if (session[:user_id] != nil) 
      redirect_to new_wishlist_path
    end
    @user = User.new
  end

  def login

  end
  
  def create
  	auth = env['omniauth.auth']
    user = User.omniauth(auth)
    session[:user_id] = user.id
    session[:pic] = auth.info.image
    redirect_to '/wishlists/new'
  end

  def logout
    session[:user_id] = nil
    redirect_to signup_path
  end


	private 
end