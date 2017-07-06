class AddColumnSeatidToReservations < ActiveRecord::Migration[5.0]
  def change
    add_column :reservations, :seatid, :string
  end
end
