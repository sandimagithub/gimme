class SessionsController < ApplicationController
  def create
  	auth = env['omniauth.auth']
    user = User.omniauth(auth)
    session[:user_id] = user.id
    session[:pic] = auth.info.image
    render :index
  end

  def destroy
    session[:user_id] = nil
  end


	private 
end