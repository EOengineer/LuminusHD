class Admin::AlbumsController < ApplicationController
  before_action :get_album, only: [:show, :edit, :update, :destroy]

  def index
    @albums = Album.all
  end

  def show
  end

  def create
    @album = Album.create(album_params)

    if @album.save
      redirect_to admin_album_path(@album)
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @album.update(album_params)
      redirect_to admin_album_path(@album)
    else
      render :edit
    end
  end


  private

  def get_album
    @album = Album.find(params[:id])
  end

  def album_params
    params.require(:album).permit(:title, :subtitle, :description, :subdescription, :release_date, :artist_id, :label_id, :available, track_ids: [])
  end

end
