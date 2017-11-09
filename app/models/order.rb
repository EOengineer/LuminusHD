class Order < ApplicationRecord
  belongs_to :user
  belongs_to :payment_type

  has_many :order_albums
  has_many :albums, through: :order_albums

  validates :user_id, :payment_type_id, :total, presence: true
end
