class AlbumsController < ApplicationController

  def show
    @album = Album.find(params[:id])

    render json: @album,
            include: {
              artist: { only: :name },
              label: { only: :name },
              tracks: { only: [:id, :title, :time, :single]},
              genres: { only: :title }
            }

  end

end
