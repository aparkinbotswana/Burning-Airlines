class SessionController < ApplicationController

  def new
  end

  def create

    user = User.find_by email: params[:email]

    if user.present? and user.authenticate(params[:password])

      session[:user_id] = user.id # set the cookie to the user id
      # redirect_to root_path # redirect to user profile
      if user.is_admin
        redirect_to airplanes_path
      else
        redirect_to root_path
      end
    else
      #mitmatch/bad credentials
      flash[:error] = "Incorrect email address and/or password"
      redirect_to login_path
    end


  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end
end
