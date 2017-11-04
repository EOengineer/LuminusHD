class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request

  def sign_in
    # a template for client side authentication form
  end

  def authenticate
    command = AuthenticateUser.call(params[:email], params[:password])

    if command.success?
      render json: { auth_token: command.result }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end

end
