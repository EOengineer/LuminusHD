module Api::V1
  class AlbumsController < ApiController
    skip_before_action :authenticate_api_request

    def new_releases
      @albums = Album.order(:created_at).limit(40)

      searchTerm = params[:q]

      if searchTerm.present?
        @albums = @albums.where('title ILIKE ?', "%#{searchTerm}%")
      end

      render json: @albums
    end


    def featured_releases
      @albums = Album.order(:created_at).limit(40)

      searchTerm = params[:q]

      if searchTerm.present?
        @albums = @albums.where('title ILIKE ?', "%#{searchTerm}%")
      end

      render json: @albums.reverse
    end

    def acclaimed_releases
      @albums = Album.order(created_at: :asc).limit(40)

      searchTerm = params[:q]

      if searchTerm.present?
        @albums = @albums.where('title ILIKE ?', "%#{searchTerm}%")
      end

      render json: @albums
    end



    def show
      @album = Album.includes(:artist, :label, :tracks, :genres).find(params[:id])

      render json: @album,
              include: {
                artist: { only: :name },
                label: { only: :name },
                tracks: { only: [:id, :title, :time, :single]},
                genres: { only: :title }
              }

    end
  end

end
