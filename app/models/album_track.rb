class AlbumTrack < ApplicationRecord
  belongs_to :album
  belongs_to :track

  acts_as_list scope: :album
end
