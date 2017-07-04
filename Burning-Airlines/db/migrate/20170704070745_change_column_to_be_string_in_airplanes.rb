class ChangeColumnToBeStringInAirplanes < ActiveRecord::Migration[5.0]
  def change
    change_column :airplanes, :column, :string
  end
end
