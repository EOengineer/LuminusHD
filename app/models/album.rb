class Album < ApplicationRecord

  belongs_to :artist
  belongs_to :label

  has_many :album_tracks
  has_many :tracks, through: :album_tracks

  has_many :album_genres
  has_many :genres, through: :album_genres

  validates :title,
            :description,
            :artist_id,
            :label_id, presence: true
end
