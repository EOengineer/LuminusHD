class HomeController < ApplicationController
  def index
    @new_releases = Album.take(10)
  end
end
