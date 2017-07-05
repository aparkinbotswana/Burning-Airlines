# == Schema Information
#
# Table name: airplanes
#
#  id         :integer          not null, primary key
#  name       :integer
#  row        :integer
#  column     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Airplane < ApplicationRecord
  has_many :flights
end
