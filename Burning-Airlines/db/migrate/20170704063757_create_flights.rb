class CreateFlights < ActiveRecord::Migration[5.0]
  def change
    create_table :flights do |t|
      t.integer :name
      t.date :date
      t.string :to
      t.string :from
      t.integer :seats
      t.integer :airplane_id

      t.timestamps
    end
  end
end
