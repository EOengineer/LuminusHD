module Api::V1
  class ApiController < ApplicationController
    before_action :authenticate_api_request
  end
end
