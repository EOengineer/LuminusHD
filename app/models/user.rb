class User < ApplicationRecord
  has_secure_password

  validates :email,
            presence: true,
            format: {
              with: /(\A([a-z]*\s*)*\<*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\>*\Z)/i,
              message: " format is not valid."
            }

  validates :password, length: { minimum: 8 }
end
