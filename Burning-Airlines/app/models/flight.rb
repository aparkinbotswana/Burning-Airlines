class Flight < ApplicationRecord
  belongs_to :airplane

  has_and_belongs_to_many :users, through: :reservations
end
