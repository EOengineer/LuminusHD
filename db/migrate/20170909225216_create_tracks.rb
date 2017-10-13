class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :time, null: false
      t.boolean :single, default: false
      t.text :description

      t.timestamps
    end
  end
end
