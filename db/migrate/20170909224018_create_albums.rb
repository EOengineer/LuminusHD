class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.string :subtitle
      t.string :image_url, null: false
      t.text :description, null: false
      t.text :subdescription
      t.datetime :release_date
      t.integer :artist_id, null: false
      t.integer :label_id, null: false, index: true
      t.boolean :available, default: false

      t.timestamps
    end
    add_index :albums, [:title, :artist_id], unique: true
  end
end
