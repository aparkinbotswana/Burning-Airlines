class User < ApplicationRecord
  has_many :reservations
  has_secure_password

  has_many :flights, through: :reservations
end
