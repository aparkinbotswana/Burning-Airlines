class AddColumnToAirplanes < ActiveRecord::Migration[5.0]
  def change
    add_column :airplanes, :column, :integer
  end
end
