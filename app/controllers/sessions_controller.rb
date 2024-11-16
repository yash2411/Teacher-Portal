class SessionsController < ApplicationController
  
  def new
    @user = User.new
  end

  def create
    user = User.find_by(email: params[:user][:email])
    if user&.authenticate(params[:user][:password])
      session[:id] = user.id
      flash[:success] = "You have logged in succesfully!"
      redirect_to root_path
    else
      flash[:error] = 'Invalid user credentials'
      redirect_to new_session_path
    end
  end

  def destroy
    if current_user
      session.destroy
      redirect_to new_session_path
    end
  end

  private

  def current_user
    user = User.find_by(id: session[:id])
  end

end
