class SessionsController < ApplicationController
  def create
    user = User.omniauth(env['omniauth.auth'])
    session[:user_id] = user.id
    render plain: "hello user#{session[:user_id]}"
  end

  def destroy
    session[:user_id] = nil
  end


	private 
end