class ChangeColumnToBeIntegerInAirplanes < ActiveRecord::Migration[5.0]
  def change

    remove_column :airplanes, :column

  end
end
