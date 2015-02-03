class AddUsername < ActiveRecord::Migration
  def change
    add_column :users, :username, :string
    change_column :users, :username, :string, null: false
  end
end
