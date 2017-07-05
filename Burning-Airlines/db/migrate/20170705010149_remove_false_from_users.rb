class RemoveFalseFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :false
  end
end
