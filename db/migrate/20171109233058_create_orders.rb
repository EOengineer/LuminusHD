class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.integer :user_id, null: false, index: true
      t.money :total, null: false
      t.integer :payment_type_id, null: false, index: true

      t.timestamps
    end
  end
end
