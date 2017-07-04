class CreateAirplanes < ActiveRecord::Migration[5.0]
  def change
    create_table :airplanes do |t|
      t.integer :name
      t.integer :row
      t.integer :column

      t.timestamps
    end
  end
end
