class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :set_current_user

  attr_reader :current_user
  helper_method :current_user

  private

  def authenticate_request
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end

  def set_current_user
    @current_user = AuthorizeApiRequest.call(request.headers, cookies).result
  end


  def protect_template
    redirect_to '/sign-in' unless @current_user
  end

end
