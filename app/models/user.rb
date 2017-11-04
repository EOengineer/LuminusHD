class User < ApplicationRecord
  has_secure_password

  validates :email, :password, presence: true, confirmation: true, length: { minimum: 8 }
end
