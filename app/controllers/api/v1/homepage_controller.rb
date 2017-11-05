module Api::V1

  class HomepageController < ApiController
    skip_before_action :authenticate_api_request

    def index
      @new_releases = Album.take(10)
    end

    def carousels
      @carousels = {}
      @carousels[:newReleases] = Album.last(12)
      @carousels[:featuredReleases] = Album.all.sample(12)
      @carousels[:acclaimedReleases] = Album.all.sample(12)
      @carousels[:because_1] = Album.all.sample(12)
      @carousels[:because_2] = Album.all.sample(12)
      @carousels[:because_3] = Album.all.sample(12)

      render json: @carousels
    end
  end
end
