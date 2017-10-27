class Album < ApplicationRecord

  belongs_to :artist
  belongs_to :label

  has_many :album_tracks, -> { order('position ASC') }
  has_many :tracks, through: :album_tracks

  has_many :album_genres
  has_many :genres, through: :album_genres

  validates :title,
            :description,
            :image_url,
            :artist_id,
            :label_id, presence: true

  validates :title, uniqueness: { scope: :artist_id }
end
