class Track < ApplicationRecord
  has_many :album_tracks, ->  { order( position: :desc ) }
  has_many :albums, through: :album_tracks

  validates :title, presence: true
end
