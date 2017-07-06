class UsersController < ApplicationController
  before_action :get_user, only: [:show, :edit, :update, :destroy]

  before_action :check_if_admin, only: [:index]

  def get_user
    @user = User.find params["id"]
  end

  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
    redirect_to new_user_path unless @current_user == @user
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.create user_params #weijia changed

    if @user.id.present?
      session[:user_id] = @user.id # log in using when making a new account
      redirect_to root_path   # /users/17
    else
      render :new
    end
  end







  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    @user = @current_user
    @user.update user_params
    redirect_to user_path(params['id'])

    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

    private
    def user_params

      params.require(:user).permit(:email, :name, :password, :password_confirmation)
    end
end
