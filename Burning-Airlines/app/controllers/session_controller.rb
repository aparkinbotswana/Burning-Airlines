class SessionController < ApplicationController
  def new

  end

  def create



    user = User.find_by email: params[:email]
    redirect_to user_path(user)
    # redirect_to user_path(user)

    # if user.present? and user.authenticate params[:password]
    #
    #   # new julian code -- not working
    #
    #   session[:user_id] = user.id # set the cookie to the user id
    #   redirect_to user_path(user) # redirect to user profile
    # else
    #   #mitmatch/bad credentials
    #   flash[:error] = "Incorrect email address and/or password"
    #   redirect_to login_path
    # end

    # end new julian code

  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end
