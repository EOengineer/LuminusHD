class CreateAlbumTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :album_tracks do |t|
      t.integer :album_id, index: true
      t.integer :track_id, index: true
      t.integer :position

      t.timestamps
    end
  end
end
