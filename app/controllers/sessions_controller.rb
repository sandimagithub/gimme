class SessionsController < ApplicationController
  def login
    
  end
  
  def create
  	auth = env['omniauth.auth']
    user = User.omniauth(auth)
    session[:user_id] = user.id
    session[:pic] = auth.info.image
    redirect_to new_wishlist_path
  end

  def destroy
    session[:user_id] = nil
  end


	private 
end