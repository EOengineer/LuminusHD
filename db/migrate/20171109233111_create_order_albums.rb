class CreateOrderAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :order_albums do |t|
      t.integer :order_id, null: false, index: true
      t.integer :album_id, null: false, index: true
      t.money :price, null: false

      t.timestamps
    end
  end
end
