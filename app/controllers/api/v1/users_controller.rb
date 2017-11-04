module Api::V1

  class UsersController < ApplicationController


    def create
      @user = User.create(user_params)

      if @user.save
        token = AuthenticateUser.call(@user.email, @user.password).result

        render json: { auth_token: token }
      else
        render json: { errors: @user.errors }, status: 422
      end


    end


    private

    def user_params
      params.require(:users).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end

  end

end
