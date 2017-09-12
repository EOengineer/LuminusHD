class Album < ApplicationRecord

  belongs_to :artist
  belongs_to :label

  has_many :album_tracks
  has_many :tracks, through: :album_tracks

  validates :title,
            :description,
            :artist_id,
            :label_id, presence: true
end
