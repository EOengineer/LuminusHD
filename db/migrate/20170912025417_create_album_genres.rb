class CreateAlbumGenres < ActiveRecord::Migration[5.1]
  def change
    create_table :album_genres do |t|
      t.integer :album_id, index: true
      t.integer :genre_id, index: true

      t.timestamps
    end
  end
end
