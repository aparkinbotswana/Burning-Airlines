# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  name        :integer
#  date        :date
#  to          :string
#  from        :string
#  seats       :integer
#  airplane_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Flight < ApplicationRecord
  belongs_to :airplane

  has_many :users, through: :reservations
  has_many :reservations
end
